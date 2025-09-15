"use client";
import * as React from "react";

type Props = {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (v: [number, number]) => void;
};

export function DualRange({ min, max, step = 1, value, onChange }: Props) {
  const [v, setV] = React.useState<[number, number]>(value);
  const [active, setActive] = React.useState<0 | 1 | null>(null);
  React.useEffect(() => setV(value), [value]);

  const minPercent = ((v[0] - min) / (max - min)) * 100;
  const maxPercent = ((v[1] - min) / (max - min)) * 100;

  function update(i: 0 | 1, next: number) {
    const clamped = Math.min(Math.max(next, min), max);
    const newV: [number, number] = i === 0 ? [Math.min(clamped, v[1] - step), v[1]] : [v[0], Math.max(clamped, v[0] + step)];
    setV(newV);
    onChange(newV);
  }

  return (
    <div className="relative h-10">
      <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded bg-muted" />
      <div
        className="absolute top-1/2 h-1 -translate-y-1/2 rounded bg-primary"
        style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v[0]}
        onPointerDown={() => setActive(0)}
        onChange={(e) => update(0, Number(e.target.value))}
        className="absolute left-0 top-0 h-8 w-full appearance-none bg-transparent"
        style={{ zIndex: active === 0 ? 3 : 1 }}
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v[1]}
        onPointerDown={() => setActive(1)}
        onChange={(e) => update(1, Number(e.target.value))}
        className="absolute left-0 top-0 h-8 w-full appearance-none bg-transparent"
        style={{ zIndex: active === 1 ? 3 : 2 }}
      />
      <div className="mt-8 flex items-center justify-between text-sm text-muted-foreground">
        <span>{v[0]}€</span>
        <span>—</span>
        <span>{v[1]}€</span>
      </div>
    </div>
  );
}


