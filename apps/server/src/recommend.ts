import { prisma } from "./db";
import type { Prisma } from "../prisma/generated/client";

// ---------- Types the client can send ----------
export type RecommendRequest = {
  cuisine?: string;
  pantry?: string[];
  timeMinutes?: number;
  diet?: string[];
  budgetCents?: number | null;
  skillLevel?: number | null;
  flavor?: {
    heat?: number;
    sweet?: number;
    sour?: number;
    umami?: number;
    bitter?: number;
  } | null;
  zeroWaste?: boolean;
};

// ---------- Response types ----------
export type RecommendResult = {
  id: string;
  title: string;
  cuisine: string;
  fit: number; // 0..1
  why: {
    coverage: number;
    timeFit: number;
    dietFit: number;
    budgetFit: number;
    cuisineFit: number;
    flavorFit: number;
    details: {
      have: string[];
      missing: string[];
      keystonesMissing: string[];
      timeRecipe: number;
      costEstimate?: number | null;
    };
  };
};

// ---------- Internal types ----------
type RecipeWithIngs = Prisma.RecipeGetPayload<{
  include: { ingredients: { include: { ingredient: true } } };
}>;

const lc = (s: string) => s.toLowerCase().trim();

function toStringArray(v: unknown): string[] {
  if (Array.isArray(v)) return v.map((x) => String(x));
  return [];
}

function cosine(a: number[], b: number[]) {
  let dot = 0,
    na = 0,
    nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (na === 0 || nb === 0) return 0.5;
  return dot / (Math.sqrt(na) * Math.sqrt(nb));
}

function normFlavor(x?: RecommendRequest["flavor"]) {
  const v = x ?? {};
  const tuple = [
    Math.max(0, Math.min(4, v.heat ?? 0)),
    Math.max(0, Math.min(4, v.sweet ?? 0)),
    Math.max(0, Math.min(4, v.sour ?? 0)),
    Math.max(0, Math.min(4, v.umami ?? 0)),
    Math.max(0, Math.min(4, v.bitter ?? 0))
  ];
  return tuple.map((n) => n / 4);
}

function asNumber(n: unknown): number | null {
  return typeof n === "number" && Number.isFinite(n) ? n : null;
}

// ---------- Core scorer ----------
export async function recommend(req: RecommendRequest): Promise<RecommendResult[]> {
  const cuisine = req.cuisine?.trim();
  const pantrySet = new Set((req.pantry ?? []).map(lc));
  const maxTime = asNumber(req.timeMinutes);
  const dietReq = (req.diet ?? []).map(lc);
  const budgetLimit = asNumber(req.budgetCents);
  const skillPref = asNumber(req.skillLevel);
  const flavorPref = normFlavor(req.flavor);

  const recipes: RecipeWithIngs[] = await prisma.recipe.findMany({
    where: cuisine ? { cuisine } : {},
    include: {
      ingredients: { include: { ingredient: true } }
    },
    take: 100,
    orderBy: { title: "asc" }
  });

  const dna = cuisine ? await prisma.cuisineDNA.findUnique({ where: { cuisine } }) : null;

  const dnaWords = new Set<string>();
  if (dna) {
    const parts = [
      ...toStringArray(dna.aromatics),
      ...toStringArray(dna.baseSpices),
      ...toStringArray(dna.staples),
      ...toStringArray(dna.techniques)
    ];
    parts.forEach((w) => dnaWords.add(lc(w)));
  }

  const results: RecommendResult[] = recipes.map((r: RecipeWithIngs) => {
    // --- Coverage ---
    const nonOptional = r.ingredients.filter((iu) => !iu.optional);

    const have: string[] = [];
    const missing: string[] = [];
    const keystonesMissing: string[] = [];

    for (const iu of nonOptional) {
      const name = lc(iu.ingredient.name);
      const aliases = toStringArray(iu.ingredient.aliases).map(lc);
      const present = pantrySet.has(name) || aliases.some((a) => pantrySet.has(a));
      if (present) {
        have.push(iu.ingredient.name);
      } else {
        missing.push(iu.ingredient.name);
        if (iu.isKeystone) keystonesMissing.push(iu.ingredient.name);
      }
    }

    const coverage = nonOptional.length === 0 ? 1 : have.length / nonOptional.length;

    // --- Time fit ---
    const t = r.timeMinutes;
    let timeFit = 1;
    if (maxTime != null) {
      if (t <= maxTime) timeFit = 1;
      else {
        const over = t - maxTime;
        timeFit = Math.max(0, 1 - over / Math.max(10, maxTime));
      }
    }

    // --- Diet fit ---
    const recipeDiet = toStringArray(r.dietTags).map(lc);
    const dietFit = dietReq.length === 0 ? 1 : dietReq.every((d) => recipeDiet.includes(d)) ? 1 : 0;

    // --- Budget fit ---
    let budgetFit = 0.5;
    if (budgetLimit != null) {
      if (r.costEstimate == null) budgetFit = 0.5;
      else if (r.costEstimate <= budgetLimit) budgetFit = 1;
      else {
        const over = r.costEstimate - budgetLimit;
        budgetFit = Math.max(0, 1 - over / Math.max(1, budgetLimit));
      }
    }

    // --- Cuisine fit ---
    let cuisineFit = 1;
    if (cuisine) {
      if (r.cuisine === cuisine) {
        cuisineFit = 1;
      } else if (dnaWords.size) {
        const ingNames = new Set(r.ingredients.map((iu) => lc(iu.ingredient.name)));
        let overlap = 0;
        for (const w of ingNames) if (dnaWords.has(w)) overlap++;
        const denom = Math.max(1, ingNames.size);
        cuisineFit = Math.min(1, overlap / denom + 0.3);
      } else {
        cuisineFit = 0.8;
      }
    }

    // --- Flavor fit ---
    const rf = (r.flavor as unknown) as Record<string, number> | null;
    const recipeVec = rf
      ? [
          Number(rf.heat ?? 0) / 4,
          Number(rf.sweet ?? 0) / 4,
          Number(rf.sour ?? 0) / 4,
          Number(rf.umami ?? 0) / 4,
          Number(rf.bitter ?? 0) / 4
        ]
      : [0, 0, 0, 0, 0];
    const flavorFit = cosine(flavorPref, recipeVec);

    // --- Skill nudge ---
    let skillNudge = 0;
    if (skillPref != null && Number.isFinite(skillPref) && r.skillLevel != null) {
      const delta = Math.abs(skillPref - r.skillLevel);
      skillNudge = Math.max(0, 1 - delta / 4) * 0.05;
    }

    // --- Zero-waste nudge ---
    let wasteNudge = 0;
    if (req.zeroWaste) {
      const totalMatch = r.ingredients.filter((iu) => pantrySet.has(lc(iu.ingredient.name))).length;
      const n = r.ingredients.length || 1;
      wasteNudge = (totalMatch / n) * 0.05;
    }

    const score =
      0.35 * coverage +
      0.2 * timeFit +
      0.15 * dietFit +
      0.1 * budgetFit +
      0.1 * cuisineFit +
      0.1 * flavorFit +
      skillNudge +
      wasteNudge;

    return {
      id: r.id,
      title: r.title,
      cuisine: r.cuisine,
      fit: Math.max(0, Math.min(1, score)),
      why: {
        coverage,
        timeFit,
        dietFit,
        budgetFit,
        cuisineFit,
        flavorFit,
        details: {
          have,
          missing,
          keystonesMissing,
          timeRecipe: r.timeMinutes,
          costEstimate: r.costEstimate ?? null
        }
      }
    };
  });

  results.sort((a, b) => {
    if (b.fit !== a.fit) return b.fit - a.fit;
    const ka = a.why.details.keystonesMissing.length;
    const kb = b.why.details.keystonesMissing.length;
    if (ka !== kb) return ka - kb;
    return a.why.details.timeRecipe - b.why.details.timeRecipe;
  });

  return results;
}
