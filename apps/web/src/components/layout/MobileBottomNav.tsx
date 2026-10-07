"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Grid3X3, Heart, Home, Search, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import { useHydrated } from "@/hooks/useHydrated";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/shop", label: "Categories", icon: Grid3X3 },
  { href: "/search", label: "Search", icon: Search },
  { href: "/wishlist", label: "Wishlist", icon: Heart },
  { href: "/cart", label: "Cart", icon: ShoppingBag },
];

export function MobileBottomNav() {
  const pathname = usePathname();
  const items = useCartStore((s) => s.items);
  const mounted = useHydrated();
  const cartCount = mounted
    ? items.reduce((sum, i) => sum + i.quantity, 0)
    : 0;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-hb-border bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
      aria-label="Mobile"
    >
      <ul className="grid grid-cols-5">
        {links.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : pathname === href || pathname.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "relative flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium",
                  active ? "text-hb-deep" : "text-hb-muted"
                )}
              >
                <Icon className="h-5 w-5" />
                {label}
                {href === "/cart" && cartCount > 0 && (
                  <span className="absolute right-[22%] top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-hb-deep px-1 text-[9px] text-white">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
