import { cn } from "@/lib/utils";
import Link from "next/link";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-3 md:mb-10",
        align === "center" && "items-center text-center",
        href && align === "left" && "md:flex-row md:items-end md:justify-between",
        className
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.2em] text-hb-muted">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-[1.85rem] leading-tight tracking-[-0.02em] text-hb-deep md:text-[2.35rem] text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-hb-muted md:text-[0.95rem]">
            {description}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="text-sm font-medium text-hb-deep underline-offset-4 hover:underline"
        >
          {linkLabel}
        </Link>
      )}
    </div>
  );
}
