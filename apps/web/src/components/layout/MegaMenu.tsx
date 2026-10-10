"use client";

import Link from "next/link";
import { NAV_ITEMS } from "@/lib/constants";
import { useUIStore } from "@/store/uiStore";
import { cn } from "@/lib/utils";

export function MegaNav() {
  const megaMenu = useUIStore((s) => s.megaMenu);
  const setMegaMenu = useUIStore((s) => s.setMegaMenu);

  return (
    <nav
      className="hidden border-t border-hb-border bg-white lg:block"
      aria-label="Primary"
      onMouseLeave={() => setMegaMenu(null)}
    >
      <ul className="container-hb flex items-center gap-1">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            className="relative"
            onMouseEnter={() => setMegaMenu(item.label)}
          >
            <Link
              href={item.href}
              className={cn(
                "inline-flex h-11 items-center px-3 text-[13px] font-medium tracking-wide text-hb-deep/90 transition hover:text-hb-deep",
                megaMenu === item.label && "text-hb-deep"
              )}
            >
              {item.label}
            </Link>
            {megaMenu === item.label && item.children && (
              <div className="absolute left-0 top-full z-50 w-[320px] border border-t-0 border-hb-border bg-white p-4">
                <ul className="space-y-1">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-3 py-2.5 hover:bg-hb-cream"
                        onClick={() => setMegaMenu(null)}
                      >
                        <span className="block text-sm font-medium text-hb-deep">
                          {child.label}
                        </span>
                        {"description" in child && child.description && (
                          <span className="mt-0.5 block text-xs text-hb-muted">
                            {child.description}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
