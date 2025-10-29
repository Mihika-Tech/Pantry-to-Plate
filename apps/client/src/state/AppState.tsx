/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useMemo, useState } from "react";

export type Flavor = { heat?: number; sweet?: number; sour?: number; umami?: number; bitter?: number };
export type AppState = {
  cuisine: string | null;
  setCuisine: (c: string | null) => void;

  pantry: string[];                   // ingredient names
  setPantry: (names: string[]) => void;

  timeMinutes: number | null;
  setTimeMinutes: (n: number | null) => void;

  diet: string[];                     // ["vegetarian","vegan","gluten-free"]
  setDiet: (d: string[]) => void;

  budgetCents: number | null;
  setBudgetCents: (n: number | null) => void;

  skillLevel: number | null;          // 1..5
  setSkillLevel: (n: number | null) => void;

  flavor: Flavor | null;
  setFlavor: (f: Flavor | null) => void;

  zeroWaste: boolean;
  setZeroWaste: (b: boolean) => void;
};

const Ctx = createContext<AppState | null>(null);

const ls = {
  read<T>(k: string, fallback: T): T {
    try { const v = localStorage.getItem(k); return v ? (JSON.parse(v) as T) : fallback; } catch { return fallback; }
  },
  write(k: string, v: unknown) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {
    // ignore
  } }
};

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [cuisine, setCuisine] = useState<string | null>(ls.read("cuisine", null));
  const [pantry, setPantry] = useState<string[]>(ls.read("pantry", []));
  const [timeMinutes, setTimeMinutes] = useState<number | null>(ls.read("timeMinutes", 30));
  const [diet, setDiet] = useState<string[]>(ls.read("diet", []));
  const [budgetCents, setBudgetCents] = useState<number | null>(ls.read("budgetCents", null));
  const [skillLevel, setSkillLevel] = useState<number | null>(ls.read("skillLevel", 2));
  const [flavor, setFlavor] = useState<Flavor | null>(ls.read("flavor", null));
  const [zeroWaste, setZeroWaste] = useState<boolean>(ls.read("zeroWaste", false));

  const value = useMemo<AppState>(() => ({
    cuisine, setCuisine: (c) => { setCuisine(c); ls.write("cuisine", c); },
    pantry, setPantry: (p) => { setPantry(p); ls.write("pantry", p); },
    timeMinutes, setTimeMinutes: (n) => { setTimeMinutes(n); ls.write("timeMinutes", n); },
    diet, setDiet: (d) => { setDiet(d); ls.write("diet", d); },
    budgetCents, setBudgetCents: (n) => { setBudgetCents(n); ls.write("budgetCents", n); },
    skillLevel, setSkillLevel: (n) => { setSkillLevel(n); ls.write("skillLevel", n); },
    flavor, setFlavor: (f) => { setFlavor(f); ls.write("flavor", f); },
    zeroWaste, setZeroWaste: (b) => { setZeroWaste(b); ls.write("zeroWaste", b); }
  }), [cuisine, pantry, timeMinutes, diet, budgetCents, skillLevel, flavor, zeroWaste]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAppState() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useAppState must be used inside <AppStateProvider>");
  return v;
}
