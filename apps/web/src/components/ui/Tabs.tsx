"use client";

import { cn } from "@/lib/utils";

export function Tabs({
  tabs,
  active,
  onChange,
  className,
}: {
  tabs: { id: string; label: string }[];
  active: string;
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      className={cn(
        "flex gap-1 overflow-x-auto scrollbar-none border-b border-hb-border",
        className
      )}
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          type="button"
          aria-selected={active === tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            "whitespace-nowrap px-4 py-3 text-sm font-medium transition-colors",
            active === tab.id
              ? "border-b-2 border-hb-deep text-hb-deep"
              : "text-hb-muted hover:text-hb-deep"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
