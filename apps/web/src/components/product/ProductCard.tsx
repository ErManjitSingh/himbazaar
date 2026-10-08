"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Plus } from "lucide-react";
import type { Product, Seller } from "@/types";
import { Price } from "@/components/ui/Price";
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
    <article className={cn("group flex flex-col", className)}>
      <div className="relative aspect-[4/5] overflow-hidden bg-hb-cream">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.images[0]?.url ?? ""}
            alt={product.images[0]?.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </Link>
        {product.discount > 0 && (
          <span className="absolute left-3 top-3 text-[11px] font-medium tracking-wide text-white">
            −{product.discount}%
          </span>
        )}
        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => {
            toggleWish(product._id);
            showToast(wished ? "Removed from wishlist" : "Saved to wishlist");
          }}
          className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center bg-white/90 text-hb-deep backdrop-blur-sm transition hover:bg-white"
        >
          <Heart
            className={cn("h-4 w-4", wished && "fill-hb-danger text-hb-danger")}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 pt-3.5">
        {seller && (
          <Link
            href={`/seller/${seller.slug}`}
            className="text-[11px] font-medium tracking-wide text-hb-muted hover:text-hb-deep"
          >
            {seller.name}
          </Link>
        )}
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 text-[0.95rem] font-medium leading-snug text-hb-deep">
            {product.name}
          </h3>
        </Link>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
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
            className="flex h-9 w-9 shrink-0 items-center justify-center bg-hb-deep text-white transition hover:bg-[#0f1720]"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
