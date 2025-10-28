import { Link } from "react-router-dom";

export default function Pantry() {
    return (
        <section>
            <h2>What do you have?</h2>
            <p>(This will be a searchable checklist)</p>
            <div className="actions">
                <Link to="/constraints" className="btn">Next: Constraints</Link>
            </div>
        </section>
    )
}