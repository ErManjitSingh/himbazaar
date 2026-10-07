import Image from "next/image";
import Link from "next/link";
import type { Region } from "@/types";
import { cn } from "@/lib/utils";

export function RegionCard({
  region,
  large,
  className,
}: {
  region: Region;
  large?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={`/region/${region.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg ring-1 ring-hb-border/70 card-lift",
        large ? "min-h-[280px] md:min-h-[360px]" : "min-h-[220px]",
        className
      )}
    >
      <Image
        src={region.image.url}
        alt={region.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-hb-deep/85 via-hb-deep/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-serif text-2xl text-white md:text-3xl">{region.name}</h3>
        <p className="mt-2 max-w-sm text-sm text-white/85 line-clamp-2">
          {region.shortDescription}
        </p>
        <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-hb-gold">
          Explore →
        </span>
      </div>
    </Link>
  );
}
