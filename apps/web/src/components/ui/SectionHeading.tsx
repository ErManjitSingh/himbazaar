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
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-hb-gold">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-3xl text-hb-deep md:text-4xl text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-hb-muted md:text-base">
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
