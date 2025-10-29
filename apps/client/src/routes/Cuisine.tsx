import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCuisines } from "../lib/api";
import { useAppState } from "../state/AppState";

export default function Cuisine() {
  const { cuisine, setCuisine, setPantry } = useAppState();
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCuisines().then(setList).finally(() => setLoading(false));
  }, []);

  function choose(c: string) {
    setCuisine(c);
    setPantry([]); // reset pantry when cuisine changes
  }

  return (
    <section>
      <h2>Choose a cuisine</h2>
      {loading && <p className="muted">Loading cuisines…</p>}
      <div className="grid">
        {list.map((c) => (
          <button
            key={c}
            className={`card ${cuisine === c ? "active" : ""}`}
            onClick={() => choose(c)}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="actions">
        <Link to="/pantry" className={`btn ${!cuisine ? "disabled" : ""}`} aria-disabled={!cuisine}>
          Next: Pantry
        </Link>
      </div>
    </section>
  );
}
