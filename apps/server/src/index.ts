import "dotenv/config";
import express from "express";
import cors from "cors";
import { prisma } from "./db";
import { recommend, type RecommendRequest } from "./recommend";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.get("/health", (_req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/cuisines", async (_req, res) => {
  const rows = await prisma.cuisineDNA.findMany({ orderBy: { cuisine: "asc" } });
  res.json(rows.map((r) => r.cuisine));
});

app.get("/ingredients", async (req, res) => {
  const cuisine = String(req.query.cuisine || "");
  const [dna, ings] = await Promise.all([
    cuisine ? prisma.cuisineDNA.findUnique({ where: { cuisine } }) : null,
    prisma.ingredient.findMany({ orderBy: { name: "asc" } }),
  ]);

  if (!dna) return res.json(ings);

  const priority = new Set(
    [...(dna.aromatics as any[]), ...(dna.baseSpices as any[]), ...(dna.staples as any[])].map((s) =>
      String(s).toLowerCase()
    )
  );

  const ranked = [...ings].sort((a, b) => {
    const pa = priority.has(a.name.toLowerCase()) ? 0 : 1;
    const pb = priority.has(b.name.toLowerCase()) ? 0 : 1;
    if (pa !== pb) return pa - pb;
    return a.name.localeCompare(b.name);
  });

  res.json(ranked);
});

// NEW: real scoring
app.post("/recommend", async (req, res) => {
  try {
    const body: RecommendRequest = req.body ?? {};
    const results = await recommend(body);
    res.json({ params: body, count: results.length, results });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: "Failed to recommend", message: String(e?.message || e) });
  }
});

const PORT = Number(process.env.PORT || 4000);
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
