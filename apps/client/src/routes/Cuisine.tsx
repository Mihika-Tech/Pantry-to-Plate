import { Link } from "react-router-dom";

const CUISINES = ["Indian", "Italian", "Mexican", "Chinese", "American", "Mediterranean", "Thai"];

export default function Cuisine() {
    return (
        <section>
            <h2>Choose a cuisine</h2>
            <div className="grid">
                {CUISINES.map((cuisine) => (
                    <button key={cuisine} className="card">{cuisine}</button>
                ))}
            </div>
            <div className="actions">
                <Link to="/pantry" className="btn">Next: Pantry</Link>
            </div>
        </section>
    )
}