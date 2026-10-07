"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/constants";
import { useUIStore } from "@/store/uiStore";
import { Logo } from "./Logo";

export function MobileMenu() {
  const open = useUIStore((s) => s.mobileMenuOpen);
  const setOpen = useUIStore((s) => s.setMobileMenuOpen);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-hb-deep/40"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
      />
      <aside className="absolute inset-y-0 left-0 flex w-[86%] max-w-sm flex-col bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-hb-border px-4 py-4">
          <Logo />
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-hb-deep hover:bg-hb-cream"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mb-2 ml-3 border-l border-hb-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-sm text-hb-muted hover:text-hb-deep"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
