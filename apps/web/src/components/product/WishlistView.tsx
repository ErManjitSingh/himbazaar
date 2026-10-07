"use client";

import { products, sellers } from "@/data";
import { useWishlistStore } from "@/store/wishlistStore";
import { useHydrated } from "@/hooks/useHydrated";
import { ProductGrid } from "./ProductGrid";
import { EmptyState } from "@/components/ui/EmptyState";

export function WishlistView() {
  const ids = useWishlistStore((s) => s.productIds);
  const mounted = useHydrated();

  if (!mounted) {
    return <div className="h-40 animate-pulse rounded-lg bg-hb-cream" />;
  }

  const list = products.filter((p) => ids.includes(p._id));
  if (list.length === 0) {
    return (
      <EmptyState
        title="No saved products yet"
        description="Tap the heart on any product to save it here."
        actionHref="/shop"
        actionLabel="Browse products"
      />
    );
  }

  return <ProductGrid products={list} sellers={sellers} />;
}
