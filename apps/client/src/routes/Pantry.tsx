import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchIngredientsByCuisine } from "../lib/api";
import SearchableChecklist from "../components/SearchableChecklist";
import { useAppState } from "../state/AppState";

export default function Pantry() {
  const { cuisine, pantry, setPantry } = useAppState();
  const [all, setAll] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (!cuisine) { nav("/cuisine"); return; }
    setLoading(true);
    fetchIngredientsByCuisine(cuisine)
      .then((ings) => setAll(ings.map(i => i.name)))
      .finally(() => setLoading(false));
  }, [cuisine]);

  const count = useMemo(() => pantry.length, [pantry]);

  return (
    <section>
      <h2>What do you have? <span className="muted">({cuisine})</span></h2>
      {loading && <p className="muted">Loading ingredients…</p>}
      {!loading && (
        <SearchableChecklist
          items={all}
          selected={pantry}
          onChange={setPantry}
        />
      )}
      <div className="actions">
        <Link to="/constraints" className="btn">Next: Constraints ({count} selected)</Link>
      </div>
    </section>
  );
}
