import { useEffect, useState } from "react";
import { postRecommend } from "../lib/api";
import { useAppState } from "../state/AppState";

type Result = {
  id: string; title: string; cuisine: string; fit: number;
  why: {
    coverage: number; timeFit: number; dietFit: number; budgetFit: number; cuisineFit: number; flavorFit: number;
    details: { have: string[]; missing: string[]; keystonesMissing: string[]; timeRecipe: number; costEstimate?: number | null; }
  };
};

export default function Results() {
  const s = useAppState();
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true); setErr(null);
    postRecommend({
      cuisine: s.cuisine,
      pantry: s.pantry,
      timeMinutes: s.timeMinutes ?? undefined,
      diet: s.diet,
      budgetCents: s.budgetCents ?? undefined,
      skillLevel: s.skillLevel ?? undefined,
      flavor: s.flavor ?? undefined,
      zeroWaste: s.zeroWaste
    })
      .then((d) => setResults(d.results ?? []))
      .catch((e) => setErr(String(e)))
      .finally(() => setLoading(false));
  }, [s.cuisine, s.pantry, s.timeMinutes, s.diet, s.budgetCents, s.skillLevel, s.flavor, s.zeroWaste]);

  return (
    <section>
      <h2>Results</h2>
      {loading && <p className="muted">Scoring recipes…</p>}
      {err && <p className="error">Error: {err}</p>}
      <div className="list">
        {results.map((r) => (
          <div key={r.id} className="row">
            <div>
              <div className="title">{r.title} <span className="muted">({r.cuisine})</span></div>
              <div className="muted small">
                have: {r.why.details.have.join(", ") || "—"} &middot; missing: {r.why.details.missing.join(", ") || "—"}
              </div>
            </div>
            <div className="fit">
              Fit {(r.fit*100).toFixed(0)}%
              <div className="muted small">
                cov {(r.why.coverage*100).toFixed(0)} • time {(r.why.timeFit*100).toFixed(0)} • diet {(r.why.dietFit*100).toFixed(0)}
              </div>
            </div>
          </div>
        ))}
        {!loading && !err && results.length === 0 && <div className="muted">No matches yet. Try relaxing constraints.</div>}
      </div>
    </section>
  );
}
