"use client";

import { create } from "zustand";

interface UIState {
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  megaMenu: string | null;
  toast: { message: string; type?: "success" | "error" | "info" } | null;
  setSearchOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setMegaMenu: (id: string | null) => void;
  showToast: (message: string, type?: "success" | "error" | "info") => void;
  clearToast: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  searchOpen: false,
  mobileMenuOpen: false,
  megaMenu: null,
  toast: null,
  setSearchOpen: (searchOpen) => set({ searchOpen }),
  setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
  setMegaMenu: (megaMenu) => set({ megaMenu }),
  showToast: (message, type = "success") => {
    set({ toast: { message, type } });
    setTimeout(() => set({ toast: null }), 2800);
  },
  clearToast: () => set({ toast: null }),
}));
