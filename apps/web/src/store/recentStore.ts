"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RecentState {
  productIds: string[];
  searches: string[];
  addProduct: (id: string) => void;
  addSearch: (q: string) => void;
}

export const useRecentStore = create<RecentState>()(
  persist(
    (set, get) => ({
      productIds: [],
      searches: [],
      addProduct: (id) => {
        const next = [id, ...get().productIds.filter((x) => x !== id)].slice(0, 12);
        set({ productIds: next });
      },
      addSearch: (q) => {
        const trimmed = q.trim();
        if (!trimmed) return;
        const next = [
          trimmed,
          ...get().searches.filter((x) => x.toLowerCase() !== trimmed.toLowerCase()),
        ].slice(0, 8);
        set({ searches: next });
      },
    }),
    { name: "himbazaar-recent" }
  )
);
