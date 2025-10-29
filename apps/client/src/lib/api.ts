const API_URL = "http://localhost:4000";

export async function pingServer(): Promise<"ok" | "down"> {
  try {
    const res = await fetch(`${API_URL}/health`);
    const json = await res.json();
    return json?.status === "ok" ? "ok" : "down";
  } catch {
    return "down";
  }
}

export async function fetchCuisines(): Promise<string[]> {
  const r = await fetch(`${API_URL}/cuisines`);
  return await r.json();
}

export type Ingredient = { id: string; name: string };
export async function fetchIngredientsByCuisine(cuisine: string): Promise<Ingredient[]> {
  const r = await fetch(`${API_URL}/ingredients?cuisine=${encodeURIComponent(cuisine)}`);
  return await r.json();
}

export type RecommendParams = {
  cuisine?: string | null;
  pantry?: string[];
  timeMinutes?: number | null;
  diet?: string[];
  budgetCents?: number | null;
  skillLevel?: number | null;
  flavor?: { heat?: number; sweet?: number; sour?: number; umami?: number; bitter?: number } | null;
  zeroWaste?: boolean;
};

export async function postRecommend(body: RecommendParams) {
  const r = await fetch(`${API_URL}/recommend`, {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!r.ok) throw new Error(`recommend failed: ${r.status}`);
  return await r.json();
}
