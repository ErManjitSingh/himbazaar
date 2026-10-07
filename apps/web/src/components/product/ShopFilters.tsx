"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import type { Category, Region, Seller } from "@/types";

export function ShopFilters({
  categories,
  regions,
  sellers,
}: {
  categories: Category[];
  regions: Region[];
  sellers: Seller[];
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function setParam(key: string, value?: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (!value) params.delete(key);
    else params.set(key, value);
    router.push(`/shop?${params.toString()}`);
  }

  return (
    <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
      <div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-hb-deep">
          Sort
        </p>
        <select
          className="h-10 w-full rounded-md border border-hb-border bg-white px-3 text-sm"
          value={searchParams.get("sort") ?? "relevance"}
          onChange={(e) => setParam("sort", e.target.value)}
          aria-label="Sort products"
        >
          <option value="relevance">Relevance</option>
          <option value="price_asc">Price: Low to High</option>
          <option value="price_desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="newest">New Arrivals</option>
          <option value="discount">Discount</option>
        </select>
      </div>

      <FilterGroup title="Category">
        {categories.map((c) => (
          <Link
            key={c._id}
            href={`/shop?category=${c.slug}`}
            className="block py-1 text-sm text-hb-muted hover:text-hb-deep"
          >
            {c.name}
          </Link>
        ))}
      </FilterGroup>

      <FilterGroup title="Region">
        {regions.map((r) => (
          <Link
            key={r._id}
            href={`/shop?region=${r.slug}`}
            className="block py-1 text-sm text-hb-muted hover:text-hb-deep"
          >
            {r.name}
          </Link>
        ))}
      </FilterGroup>

      <FilterGroup title="Rating">
        {[4, 3].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setParam("rating", String(r))}
            className="block py-1 text-left text-sm text-hb-muted hover:text-hb-deep"
          >
            {r}+ stars
          </button>
        ))}
      </FilterGroup>

      <FilterGroup title="Sellers">
        {sellers.slice(0, 6).map((s) => (
          <Link
            key={s._id}
            href={`/seller/${s.slug}`}
            className="block py-1 text-sm text-hb-muted hover:text-hb-deep"
          >
            {s.name}
          </Link>
        ))}
      </FilterGroup>

      <button
        type="button"
        onClick={() => setParam("inStock", searchParams.get("inStock") === "1" ? undefined : "1")}
        className="text-sm font-medium text-hb-deep underline-offset-4 hover:underline"
      >
        {searchParams.get("inStock") === "1" ? "Show all" : "In stock only"}
      </button>
    </aside>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-hb-deep">
        {title}
      </p>
      <div className="max-h-48 overflow-y-auto">{children}</div>
    </div>
  );
}
