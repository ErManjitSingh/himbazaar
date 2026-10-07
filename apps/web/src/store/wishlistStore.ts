"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { trackEvent } from "@/lib/analytics";

interface WishlistState {
  productIds: string[];
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
  clear: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      productIds: [],
      toggle: (productId) => {
        const has = get().productIds.includes(productId);
        set((state) => ({
          productIds: has
            ? state.productIds.filter((id) => id !== productId)
            : [...state.productIds, productId],
        }));
        if (!has) trackEvent("wishlist_add", { product_id: productId });
      },
      has: (productId) => get().productIds.includes(productId),
      clear: () => set({ productIds: [] }),
    }),
    { name: "himbazaar-wishlist" }
  )
);
