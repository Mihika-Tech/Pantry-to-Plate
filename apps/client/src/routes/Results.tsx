import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

export default function Results() {
    // later fetch from recommend
    const [results, setResults] = useState<{id:string; title:string; fit:number}[]>([]);
    const [loading, setLoading] = useState(false);
    const API_URL = "http://localhost:4000";
    
    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/recommend`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                cuisine: "Indian",
                pantry: ["onion", "tomato", "chickpeas"],
                time: 30,
                diet: ["vegetarian"]
        })
    })
        .then(r => r.json())
        .then(d => setResults(d.resulst ?? []))
        .finally(() => setLoading(false));
    }, []);


    return (
        <section>
            <h2>Results</h2>
            {loading && <p>Loading...</p>}
            <div className="list">
                {results.map((r) => (
                    <div key={r.id} className="row">
                        <div className="title">{r.title}</div>
                        <div className="fit">Fit: {Math.round(r.fit * 100)}%</div>
                    </div>
                ))}
            </div>
        </section>
    );
}