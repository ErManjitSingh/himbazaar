"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import type { Product, Seller } from "@/types";
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
        "group flex flex-col overflow-hidden border border-hb-border bg-white transition hover:border-hb-deep/25",
        className
      )}
    >
      <div className="relative aspect-square overflow-hidden bg-hb-cream">
        <Link href={`/product/${product.slug}`} className="block h-full w-full">
          <Image
            src={product.images[0]?.url ?? ""}
            alt={product.images[0]?.alt ?? product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </Link>
        {product.discount > 0 && (
          <span className="absolute left-2.5 top-2.5 bg-hb-gold px-2 py-1 text-[11px] font-semibold text-white">
            {product.discount}% OFF
          </span>
        )}
        <button
          type="button"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          onClick={() => {
            toggleWish(product._id);
            showToast(wished ? "Removed from wishlist" : "Saved to wishlist");
          }}
          className="absolute right-2.5 top-2.5 flex h-9 w-9 items-center justify-center bg-white text-hb-deep transition hover:bg-hb-cream"
        >
          <Heart
            className={cn("h-4 w-4", wished && "fill-hb-danger text-hb-danger")}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-3.5">
        {seller && (
          <Link
            href={`/seller/${seller.slug}`}
            className="text-[11px] font-medium text-hb-muted hover:text-hb-deep"
          >
            {seller.name}
          </Link>
        )}
        <Link href={`/product/${product.slug}`}>
          <h3 className="line-clamp-2 min-h-[2.5rem] text-sm font-medium leading-snug text-hb-deep">
            {product.name}
          </h3>
        </Link>
        <Rating value={product.rating} count={product.reviewCount} />
        <Price
          price={product.price}
          mrp={product.mrp}
          discount={product.discount}
          size="sm"
          className="mt-1"
        />
        <button
          type="button"
          aria-label={`Add ${product.name} to cart`}
          onClick={() => {
            addItem(product._id, product.sellerId);
            showToast("Added to cart");
          }}
          className="mt-2 flex h-10 w-full items-center justify-center gap-2 bg-hb-deep text-xs font-semibold text-white transition hover:bg-hb-forest"
        >
          <ShoppingBag className="h-3.5 w-3.5" />
          Add to cart
        </button>
      </div>
    </article>
  );
}
