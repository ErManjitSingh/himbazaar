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
        "group relative block overflow-hidden border border-hb-border",
        large ? "min-h-[280px] md:min-h-[340px]" : "min-h-[220px]",
        className
      )}
    >
      <Image
        src={region.image.url}
        alt={region.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-hb-deep/85 via-hb-deep/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
        <h3 className="font-serif text-2xl text-white">{region.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-white/80">
          {region.shortDescription}
        </p>
        <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wider text-hb-gold">
          Shop region
        </span>
      </div>
    </Link>
  );
}
