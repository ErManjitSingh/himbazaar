import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "flex h-11 w-full rounded-md border border-hb-border bg-white px-3.5 text-sm text-hb-text placeholder:text-hb-muted/80 transition-colors focus:border-hb-deep focus:outline-none focus:ring-1 focus:ring-hb-deep/20",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
