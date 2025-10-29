import fs from "fs";
import path from "path";
import { PrismaClient } from "../prisma/generated/client";

const prisma = new PrismaClient();
const dataDir = path.join(__dirname, "seed-data");

async function upsertIngredients(list: { name: string; groups: string[] }[]) {
  const out = [];
  for (const i of list) {
    const ing = await prisma.ingredient.upsert({
      where: { name: i.name },
      update: {},
      create: { name: i.name, groups: i.groups, aliases: [] }
    });
    out.push(ing);
  }
  return out;
}

async function seedFromFile(file: string) {
  const raw = JSON.parse(fs.readFileSync(file, "utf8"));
  const { cuisine, dna, recipes } = raw;

  // upsert cuisine DNA
  await prisma.cuisineDNA.upsert({
    where: { cuisine },
    update: {},
    create: { cuisine, ...dna }
  });

  // iterate recipes
  for (const r of recipes) {
    const ingredients = await upsertIngredients(r.ingredients);
    const ingMap = new Map(ingredients.map((i) => [i.name, i]));

    const recipe = await prisma.recipe.create({
      data: {
        title: r.title,
        cuisine,
        timeMinutes: r.timeMinutes,
        costEstimate: r.costEstimate,
        dietTags: r.dietTags,
        skillLevel: r.skillLevel,
        sidePairs: r.sidePairs,
        flavor: r.flavor,
        ingredients: {
          create: r.ingredients.map((x: any) => ({
            ingredientId: ingMap.get(x.name)!.id,
            qty: x.qty,
            unit: x.unit,
            isKeystone: x.isKeystone ?? false
          }))
        },
        steps: { create: r.steps.map((s: string, i: number) => ({ index: i + 1, text: s })) },
        quirks: { create: r.quirks.map((q: string) => ({ text: q, tags: ["tip"] })) }
      }
    });

    console.log(`✔ Seeded ${recipe.title}`);
  }
}

async function main() {
  const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".json"));
  for (const f of files) {
    console.log(`\n🌍  Seeding ${f}...`);
    await seedFromFile(path.join(dataDir, f));
  }
  console.log("\n✅  All cuisines seeded.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
