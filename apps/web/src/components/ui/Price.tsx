import { cn, formatINR } from "@/lib/utils";

export function Price({
  price,
  mrp,
  discount,
  size = "md",
  className,
}: {
  price: number;
  mrp?: number;
  discount?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: { price: "text-sm", mrp: "text-xs" },
    md: { price: "text-base", mrp: "text-sm" },
    lg: { price: "text-2xl", mrp: "text-base" },
  };

  return (
    <div className={cn("flex flex-wrap items-baseline gap-2", className)}>
      <span className={cn("font-semibold text-hb-deep", sizes[size].price)}>
        {formatINR(price)}
      </span>
      {mrp != null && mrp > price && (
        <span className={cn("text-hb-muted line-through", sizes[size].mrp)}>
          {formatINR(mrp)}
        </span>
      )}
      {discount != null && discount > 0 && (
        <span className={cn("font-medium text-hb-natural", sizes[size].mrp)}>
          {discount}% off
        </span>
      )}
    </div>
  );
}
