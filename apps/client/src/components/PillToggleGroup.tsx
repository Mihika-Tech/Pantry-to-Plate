export default function PillToggleGroup({
  options, selected, onChange
}: { options: string[]; selected: string[]; onChange: (next: string[]) => void }) {
  function toggle(v: string) {
    const set = new Set(selected);
    if (set.has(v)) {
      set.delete(v);
    } else {
      set.add(v);
    }
    onChange([...set]);
  }
  return (
    <div className="pills">
      {options.map((o) => (
        <button
          key={o}
          className={`pill ${selected.includes(o) ? "on" : ""}`}
          onClick={() => toggle(o)}
          type="button"
        >{o}</button>
      ))}
    </div>
  );
}
