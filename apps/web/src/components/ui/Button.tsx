import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-hb-deep text-white hover:bg-hb-forest shadow-sm",
  secondary:
    "bg-hb-cream text-hb-deep hover:bg-[#efe8d8]",
  outline:
    "border border-hb-deep/25 bg-transparent text-hb-deep hover:border-hb-deep hover:bg-hb-cream/60",
  ghost: "bg-transparent text-hb-deep hover:bg-hb-cream",
  gold: "bg-hb-gold text-hb-deep hover:brightness-105 shadow-sm",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-xs tracking-wide",
  md: "h-11 px-5 text-sm tracking-wide",
  lg: "h-12 px-7 text-sm tracking-[0.08em]",
  icon: "h-10 w-10",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md font-medium uppercase transition-colors disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
