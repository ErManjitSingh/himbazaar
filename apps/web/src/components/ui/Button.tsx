import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary: "bg-hb-deep text-white hover:bg-hb-forest",
  secondary: "bg-hb-cream text-hb-deep hover:bg-[#e7ece8]",
  outline:
    "border border-hb-deep/20 bg-transparent text-hb-deep hover:border-hb-deep/40 hover:bg-hb-cream",
  ghost: "bg-transparent text-hb-deep hover:bg-hb-cream",
  gold: "bg-hb-gold text-white hover:bg-[#b45d24]",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-xs font-semibold",
  md: "h-11 px-5 text-sm font-semibold",
  lg: "h-12 px-7 text-sm font-semibold",
  icon: "h-10 w-10",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm transition-colors disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
