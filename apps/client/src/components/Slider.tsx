export default function Slider({
  label, min, max, step = 1, value, onChange, unit
}: {
  label: string; min: number; max: number; step?: number;
  value: number; onChange: (n: number) => void; unit?: string;
}) {
  return (
    <div className="slider">
      <div className="slider-head">
        <span>{label}</span>
        <strong>{value}{unit ? ` ${unit}` : ""}</strong>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}
