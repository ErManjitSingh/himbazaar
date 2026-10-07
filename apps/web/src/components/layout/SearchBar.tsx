"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { getPopularSearches, getSearchSuggestions } from "@/services/searchService";
import type { SearchSuggestion } from "@/types";
import { useRecentStore } from "@/store/recentStore";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

export function SearchBar({
  className,
  compact,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [, startTransition] = useTransition();
  const router = useRouter();
  const wrapRef = useRef<HTMLDivElement>(null);
  const recent = useRecentStore((s) => s.searches);
  const addSearch = useRecentStore((s) => s.addSearch);
  const popular = getPopularSearches();

  useEffect(() => {
    if (!open) return;
    startTransition(() => {
      void getSearchSuggestions(query).then(setSuggestions);
    });
  }, [query, open]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function submit(q: string) {
    const value = q.trim();
    if (!value) return;
    addSearch(value);
    trackEvent("search", { search_term: value });
    setOpen(false);
    router.push(`/search?q=${encodeURIComponent(value)}`);
  }

  return (
    <div ref={wrapRef} className={cn("relative w-full", className)}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit(query);
        }}
        className="relative"
      >
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-hb-muted" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          placeholder="Search Himachali honey, ghee, shawls…"
          aria-label="Search products"
          className={cn(
            "w-full rounded-md border border-hb-border bg-hb-ivory pl-10 pr-10 text-sm text-hb-text placeholder:text-hb-muted/80 focus:border-hb-deep focus:outline-none focus:ring-1 focus:ring-hb-deep/20",
            compact ? "h-10" : "h-11"
          )}
        />
        {query && (
          <button
            type="button"
            aria-label="Clear search"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-hb-muted hover:text-hb-deep"
            onClick={() => setQuery("")}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {open && (
        <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 max-h-[70vh] overflow-auto rounded-lg border border-hb-border bg-white p-3 shadow-xl">
          {!query && (
            <div className="space-y-4">
              {recent.length > 0 && (
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-hb-muted">
                    Recent
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recent.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => submit(r)}
                        className="rounded-full bg-hb-cream px-3 py-1.5 text-xs text-hb-deep hover:bg-[#efe8d8]"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-hb-muted">
                  Popular
                </p>
                <div className="flex flex-wrap gap-2">
                  {popular.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => submit(r)}
                      className="rounded-full bg-hb-cream px-3 py-1.5 text-xs text-hb-deep hover:bg-[#efe8d8]"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {query && suggestions.length > 0 && (
            <ul className="space-y-0.5">
              {suggestions.map((s) => (
                <li key={`${s.type}-${s.href}`}>
                  <Link
                    href={s.href}
                    onClick={() => {
                      if (s.type === "query" || s.type === "product") addSearch(s.label);
                      setOpen(false);
                    }}
                    className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-hb-cream"
                  >
                    {s.image ? (
                      <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded bg-hb-cream">
                        <Image src={s.image} alt="" fill className="object-cover" sizes="40px" />
                      </span>
                    ) : (
                      <Search className="h-4 w-4 shrink-0 text-hb-muted" />
                    )}
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm text-hb-deep">{s.label}</span>
                      <span className="text-[11px] uppercase tracking-wider text-hb-muted">
                        {s.type}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {query && suggestions.length === 0 && (
            <p className="px-2 py-4 text-sm text-hb-muted">
              No suggestions — press Enter to search.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
