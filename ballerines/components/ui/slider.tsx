"use client";
import * as React from "react";

type Props = {
  min: number;
  max: number;
  step?: number;
  value: [number, number];
  onChange: (v: [number, number]) => void;
};

export function Slider({ min, max, step = 1, value, onChange }: Props) {
  const [v, setV] = React.useState<[number, number]>(value);
  React.useEffect(() => setV(value), [value]);

  function handle(i: 0 | 1, next: number) {
    const clamped = Math.min(Math.max(next, min), max);
    const newV: [number, number] = i === 0 ? [Math.min(clamped, v[1]), v[1]] : [v[0], Math.max(clamped, v[0])];
    setV(newV);
    onChange(newV);
  }

  return (
    <div className="flex items-center gap-2">
      <input type="range" min={min} max={max} step={step} value={v[0]} onChange={(e) => handle(0, Number(e.target.value))} className="w-28" />
      <span className="text-sm">{v[0]}€</span>
      <span>—</span>
      <input type="range" min={min} max={max} step={step} value={v[1]} onChange={(e) => handle(1, Number(e.target.value))} className="w-28" />
      <span className="text-sm">{v[1]}€</span>
    </div>
  );
}


