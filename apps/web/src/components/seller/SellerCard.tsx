import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import type { Seller } from "@/types";
import { cn } from "@/lib/utils";

export function SellerCard({
  seller,
  className,
}: {
  seller: Seller;
  className?: string;
}) {
  return (
    <Link href={`/seller/${seller.slug}`} className={cn("group block", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-hb-cream">
        <Image
          src={seller.coverImage.url}
          alt={seller.coverImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-4">
        <div className="flex items-center gap-1.5">
          <h3 className="font-medium text-hb-deep">{seller.name}</h3>
          {seller.verified && (
            <BadgeCheck className="h-4 w-4 text-hb-gold" aria-label="Verified" />
          )}
        </div>
        <p className="mt-1 text-xs text-hb-muted">
          {seller.village}, {seller.district}
        </p>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-hb-muted">
          {seller.shortDescription}
        </p>
      </div>
    </Link>
  );
}
