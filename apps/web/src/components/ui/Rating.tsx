import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export function Rating({
  value,
  count,
  size = "sm",
  className,
}: {
  value: number;
  count?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const star = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className={cn("flex items-center gap-1.5 text-hb-muted", className)}>
      <span className="inline-flex items-center gap-0.5 text-hb-gold">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              star,
              i < Math.round(value) ? "fill-hb-gold text-hb-gold" : "text-hb-border"
            )}
          />
        ))}
      </span>
      <span className={cn("font-medium text-hb-text", size === "sm" ? "text-xs" : "text-sm")}>
        {value.toFixed(1)}
      </span>
      {count != null && (
        <span className={size === "sm" ? "text-xs" : "text-sm"}>
          ({count.toLocaleString("en-IN")})
        </span>
      )}
    </div>
  );
}
