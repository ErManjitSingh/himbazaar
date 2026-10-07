import Image from "next/image";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import type { Seller } from "@/types";
import { Rating } from "@/components/ui/Rating";
import { cn } from "@/lib/utils";

export function SellerCard({
  seller,
  className,
}: {
  seller: Seller;
  className?: string;
}) {
  return (
    <Link
      href={`/seller/${seller.slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-hb-border/80 card-lift",
        className
      )}
    >
      <div className="relative h-28 bg-hb-cream">
        <Image
          src={seller.coverImage.url}
          alt={seller.coverImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="relative px-4 pb-5 pt-8">
        <div className="absolute -top-7 left-4 h-14 w-14 overflow-hidden rounded-full ring-2 ring-white">
          <Image
            src={seller.logo.url}
            alt={seller.logo.alt}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>
        <div className="flex items-center gap-1.5">
          <h3 className="font-medium text-hb-deep group-hover:underline">
            {seller.name}
          </h3>
          {seller.verified && (
            <BadgeCheck className="h-4 w-4 text-hb-gold" aria-label="Verified" />
          )}
        </div>
        <p className="mt-1 text-xs text-hb-muted">
          {seller.village}, {seller.district}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-hb-muted">
          {seller.shortDescription}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <Rating value={seller.rating} count={seller.reviewCount} />
          <span className="text-xs text-hb-muted">
            {seller.productCount} products
          </span>
        </div>
      </div>
    </Link>
  );
}
