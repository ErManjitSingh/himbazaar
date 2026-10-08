"use client";

import Link from "next/link";
import { Heart, Menu, ShoppingBag, User } from "lucide-react";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { MegaNav } from "./MegaMenu";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useUIStore } from "@/store/uiStore";
import { useHydrated } from "@/hooks/useHydrated";

export function Header() {
  const items = useCartStore((s) => s.items);
  const wishlist = useWishlistStore((s) => s.productIds);
  const setMobileMenuOpen = useUIStore((s) => s.setMobileMenuOpen);
  const mounted = useHydrated();

  const cartCount = mounted
    ? items.reduce((sum, i) => sum + i.quantity, 0)
    : 0;
  const wishCount = mounted ? wishlist.length : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-hb-border/60 bg-hb-ivory/90 backdrop-blur-md">
      <div className="container-hb flex h-14 items-center gap-3 md:h-16 md:gap-5">
        <button
          type="button"
          className="lg:hidden"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5 text-hb-deep" />
        </button>

        <Logo className="shrink-0" />

        <div className="mx-auto hidden max-w-xl flex-1 md:block">
          <SearchBar />
        </div>

        <div className="ml-auto flex items-center gap-0.5 sm:gap-1">
          <Link
            href="/account"
            className="rounded-sm p-2 text-hb-deep hover:bg-hb-cream"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>

          <Link
            href="/wishlist"
            className="relative rounded-sm p-2 text-hb-deep hover:bg-hb-cream"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
            {wishCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-sm bg-hb-gold px-1 text-[10px] font-semibold text-white">
                {wishCount}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            className="relative rounded-sm p-2 text-hb-deep hover:bg-hb-cream"
            aria-label="Cart"
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-sm bg-hb-deep px-1 text-[10px] font-semibold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="container-hb pb-3 md:hidden">
        <SearchBar compact />
      </div>

      <MegaNav />
    </header>
  );
}
