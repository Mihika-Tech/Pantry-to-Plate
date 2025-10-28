import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pingServer } from "../lib/api";

export default function Landing() {
    const [server, setServer] = useState<"ok" | "down">("down");

    useEffect(() => {
        pingServer().then(setServer);
    }, []);

    return (
        <section>
            <h1>Smart Pantry + Plate</h1>
            <p>Pick a cuisine, tick your pantry, set time & diet -- get ranked recipes with tips.</p>
            <div className={`badge ${server === "ok" ? "ok" : "down"}`}>
                Server: {server}
            </div>
            <div className="actions">
                <Link to="/cuisine" className="btn">Start</Link>
            </div>
        </section>
    )
}