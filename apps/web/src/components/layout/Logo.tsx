import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  light,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "font-serif text-2xl tracking-tight md:text-[1.65rem]",
        light ? "text-white" : "text-hb-deep",
        className
      )}
      aria-label="HimBazaar home"
    >
      Him<span className={light ? "text-hb-gold" : "text-hb-natural"}>Bazaar</span>
    </Link>
  );
}
