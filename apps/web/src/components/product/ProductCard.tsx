"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import type { Product, Seller } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { Price } from "@/components/ui/Price";
import { Rating } from "@/components/ui/Rating";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useUIStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

export function ProductCard({
  product,
  seller,
  className,
}: {
  product: Product;
  seller?: Seller | null;
  className?: string;
}) {
  const addItem = useCartStore((s) => s.addItem);
  const toggleWish = useWishlistStore((s) => s.toggle);
  const wished = useWishlistStore((s) => s.productIds.includes(product._id));
  const showToast = useUIStore((s) => s.showToast);

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-hb-border/80 card-lift",
        className
      )}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-hb-cream">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.images[0]?.url ?? ""}
            alt={product.images[0]?.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </Link>
        {product.discount > 0 && (
          <Badge tone="dark" className="absolute left-2.5 top-2.5">
            {product.discount}% off
          </Badge>
        )}
        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => {
            toggleWish(product._id);
            showToast(wished ? "Removed from wishlist" : "Saved to wishlist");
          }}
          className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-hb-deep shadow-sm backdrop-blur transition hover:bg-white"
        >
          <Heart
            className={cn("h-4 w-4", wished && "fill-hb-danger text-hb-danger")}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-3.5 sm:p-4">
        {seller && (
          <Link
            href={`/seller/${seller.slug}`}
            className="text-[11px] font-medium uppercase tracking-wider text-hb-muted hover:text-hb-deep"
          >
            {seller.name}
          </Link>
        )}
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 font-medium leading-snug text-hb-deep hover:underline">
            {product.name}
          </h3>
        </Link>
        <Rating value={product.rating} count={product.reviewCount} />
        <div className="mt-auto flex items-end justify-between gap-2 pt-1">
          <Price
            price={product.price}
            mrp={product.mrp}
            discount={product.discount}
            size="sm"
          />
          <button
            type="button"
            aria-label={`Add ${product.name} to cart`}
            onClick={() => {
              addItem(product._id, product.sellerId);
              showToast("Added to cart");
            }}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-hb-deep text-white transition hover:bg-hb-forest"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
