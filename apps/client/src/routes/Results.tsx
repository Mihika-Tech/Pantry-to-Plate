import { Link } from "react-router-dom";

export default function Results() {
    // later fetch from recommend

    const mock = [
        { id: "1", title: "Chicken Curry", fit: 0.84 },
        { id: "2", title: "Vegetable Stir Fry", fit: 0.78 },
        { id: "3", title: "Pasta Primavera", fit: 0.75 }
    ];

    return (
        <section>
            <h2>Results</h2>
            <div className="list">
                {mock.map((r) => (
                    <Link to={`/recipe/${r.id}`} key={r.id} className="row">
                        <div className="title">{r.title}</div>
                        <div className="fit">Fit: {(r.fit * 100).toFixed(0)}%</div>
                    </Link>
                ))}
            </div>
        </section>
    );
}