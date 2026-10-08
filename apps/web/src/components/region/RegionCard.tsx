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
        "group relative block overflow-hidden",
        large ? "min-h-[300px] md:min-h-[380px]" : "min-h-[240px]",
        className
      )}
    >
      <Image
        src={region.image.url}
        alt={region.image.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-hb-deep/80 via-hb-deep/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <h3 className="font-serif text-2xl tracking-[-0.02em] text-white md:text-3xl">
          {region.name}
        </h3>
        <p className="mt-2 max-w-sm text-sm text-white/75 line-clamp-2">
          {region.shortDescription}
        </p>
      </div>
    </Link>
  );
}
