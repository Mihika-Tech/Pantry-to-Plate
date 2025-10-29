import { Link } from "react-router-dom";
import Slider from "../components/Slider";
import PillToggleGroup from "../components/PillToggleGroup";
import { useAppState } from "../state/AppState";

const DIET = ["vegetarian", "vegan", "gluten-free"];

export default function Constraints() {
  const {
    timeMinutes, setTimeMinutes,
    diet, setDiet,
    budgetCents, setBudgetCents,
    skillLevel, setSkillLevel,
    flavor, setFlavor,
    zeroWaste, setZeroWaste
  } = useAppState();

  const f = flavor || { heat: 1, sweet: 1, sour: 1, umami: 2, bitter: 0 };

  return (
    <section>
      <h2>Constraints</h2>

      <Slider label="Time" min={10} max={120} step={5} value={timeMinutes ?? 30} onChange={(n) => setTimeMinutes(n)} unit="min" />
      <Slider label="Budget" min={100} max={1000} step={50} value={budgetCents ?? 400} onChange={(n) => setBudgetCents(n)} unit="¢/serving" />
      <Slider label="Skill level" min={1} max={5} step={1} value={skillLevel ?? 2} onChange={(n) => setSkillLevel(n)} />

      <h3>Diet</h3>
      <PillToggleGroup options={DIET} selected={diet} onChange={setDiet} />

      <h3>Flavor preference</h3>
      <div className="flavors">
        <Slider label="Heat"  min={0} max={4} value={f.heat ?? 0}  onChange={(n)=> setFlavor({ ...f, heat: n })} />
        <Slider label="Sweet" min={0} max={4} value={f.sweet ?? 0} onChange={(n)=> setFlavor({ ...f, sweet: n })} />
        <Slider label="Sour"  min={0} max={4} value={f.sour ?? 0}  onChange={(n)=> setFlavor({ ...f, sour: n })} />
        <Slider label="Umami" min={0} max={4} value={f.umami ?? 0} onChange={(n)=> setFlavor({ ...f, umami: n })} />
        <Slider label="Bitter" min={0} max={4} value={f.bitter ?? 0} onChange={(n)=> setFlavor({ ...f, bitter: n })} />
      </div>

      <label className="checkrow">
        <input type="checkbox" checked={zeroWaste} onChange={(e)=> setZeroWaste(e.target.checked)} />
        <span>Prefer using more of what I already have (zero-waste)</span>
      </label>

      <div className="actions">
        <Link to="/results" className="btn">Find recipes</Link>
      </div>
    </section>
  );
}
