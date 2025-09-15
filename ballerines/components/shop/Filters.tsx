"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { DualRange } from "@/components/ui/dual-range";

export function Filters() {
  return (
    <aside className="sticky top-16 h-fit w-full shrink-0 space-y-6 rounded-2xl border bg-card p-4 md:w-64">
      <div>
        <h3 className="mb-2 text-sm font-semibold">Genre</h3>
        <div className="flex flex-col gap-2 text-sm">
          <label className="flex items-center gap-2"><Checkbox /> Femmes</label>
          <label className="flex items-center gap-2"><Checkbox /> Hommes</label>
          <label className="flex items-center gap-2"><Checkbox /> Enfants</label>
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Tailles EU</h3>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 12 }).map((_, i) => 35 + i).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => {}}
              className="rounded-full border px-2 py-0.5 text-xs hover:border-primary active:scale-95"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Couleur</h3>
        <div className="flex flex-wrap gap-2">
          {["Noir", "Ivoire", "Rose", "Chocolat"].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {}}
              className="rounded-full border px-2 py-0.5 text-xs hover:border-primary active:scale-95"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-sm font-semibold">Prix</h3>
        <DualRange min={19} max={149} value={[39, 119]} onChange={() => {}} />
      </div>
      <Button variant="outline" className="w-full">Réinitialiser</Button>
    </aside>
  );
}


