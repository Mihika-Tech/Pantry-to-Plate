import { useMemo, useState } from "react";

export default function SearchableChecklist({
  items,
  selected,
  onChange,
  placeholder = "Search ingredients…"
}: {
  items: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const qq = q.trim().toLowerCase();
    return qq ? items.filter(i => i.toLowerCase().includes(qq)) : items;
  }, [q, items]);

  function toggle(name: string) {
    const set = new Set(selected);
    if (set.has(name)) {
      set.delete(name);
    } else {
      set.add(name);
    }
    onChange([...set]);
  }

  return (
    <div className="checklist">
      <input
        className="input"
        placeholder={placeholder}
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <div className="listbox">
        {filtered.map((name) => (
          <label key={name} className="checkrow">
            <input
              type="checkbox"
              checked={selected.includes(name)}
              onChange={() => toggle(name)}
            />
            <span>{name}</span>
          </label>
        ))}
        {filtered.length === 0 && <div className="muted">No matches</div>}
      </div>
    </div>
  );
}
