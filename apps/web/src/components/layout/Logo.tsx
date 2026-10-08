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
        "font-serif text-[1.35rem] tracking-[-0.02em] md:text-[1.5rem]",
        light ? "text-white" : "text-hb-deep",
        className
      )}
      aria-label="HimBazaar home"
    >
      HimBazaar
    </Link>
  );
}
