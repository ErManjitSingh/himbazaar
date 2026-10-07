import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "green" | "cream" | "dark";
}) {
  const tones = {
    gold: "bg-hb-gold/15 text-hb-deep",
    green: "bg-hb-natural/15 text-hb-forest",
    cream: "bg-hb-cream text-hb-muted",
    dark: "bg-hb-deep text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
