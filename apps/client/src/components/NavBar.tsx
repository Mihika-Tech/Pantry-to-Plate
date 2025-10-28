import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="navbar">
            <div className="brand">Pantry + Plate</div>
            <nav>
                <NavLink to="/" className="nav">Home</NavLink>
                <NavLink to="/cuisine" className="nav">Cuisine</NavLink>
                <NavLink to="/pantry" className="nav">Pantry</NavLink>
                <NavLink to="/constraints" className="nav">Constraints</NavLink>
                <NavLink to="/results" className="nav">Results</NavLink>
            </nav>
        </header>
    )
}