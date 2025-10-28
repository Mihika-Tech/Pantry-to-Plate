import { Link } from "react-router-dom";

export default function Constraints() {
    return (
        <section>
            <h2>Constraints</h2>
            <ul>
                <li>Time : slider (eg: 20-40 mins)</li>
                <li>Diet : veg/vegan/gluten-free, etc</li>
                <li>Budget : $ to $$$</li>
                <li>Skill : 1-5</li>
            </ul>
            <div className="actions">
                <Link to="/results" className="btn">Find Recipes</Link>
            </div>
        </section>
    )
}