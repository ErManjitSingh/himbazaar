"use client";

import { Button } from "./Button";
import { Minus, Plus } from "lucide-react";

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="inline-flex items-center rounded-md border border-hb-border bg-white">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-10 text-center text-sm font-medium tabular-nums">{value}</span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none"
        aria-label="Increase quantity"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}
