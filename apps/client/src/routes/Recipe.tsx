import { useParams } from "react-router-dom";

export default function Recipe() {
    const { id } = useParams();
    return (
        <section>
            <h2>Recipe #{id}</h2>
            <p>Steps and tips go here. Inline timers, substitutions, sides.</p>
        </section>
    );
}