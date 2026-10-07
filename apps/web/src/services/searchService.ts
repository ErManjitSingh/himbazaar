import {
  categories,
  popularSearches,
  products,
  regions,
  sellers,
} from "@/data";
import type { SearchSuggestion } from "@/types";

const delay = (ms = 60) => new Promise((r) => setTimeout(r, ms));

/** Future: GET /api/search/suggest?q= */
export async function getSearchSuggestions(
  query: string
): Promise<SearchSuggestion[]> {
  await delay();
  const q = query.trim().toLowerCase();
  if (!q) {
    return popularSearches.map((label) => ({
      type: "query" as const,
      label,
      href: `/search?q=${encodeURIComponent(label)}`,
    }));
  }

  const suggestions: SearchSuggestion[] = [];

  products
    .filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q))
    )
    .slice(0, 5)
    .forEach((p) => {
      suggestions.push({
        type: "product",
        label: p.name,
        href: `/product/${p.slug}`,
        image: p.images[0]?.url,
      });
    });

  categories
    .filter((c) => c.name.toLowerCase().includes(q))
    .slice(0, 3)
    .forEach((c) => {
      suggestions.push({
        type: "category",
        label: c.name,
        href: `/category/${c.slug}`,
        image: c.image.url,
      });
    });

  sellers
    .filter((s) => s.name.toLowerCase().includes(q))
    .slice(0, 2)
    .forEach((s) => {
      suggestions.push({
        type: "seller",
        label: s.name,
        href: `/seller/${s.slug}`,
        image: s.logo.url,
      });
    });

  regions
    .filter((r) => r.name.toLowerCase().includes(q))
    .slice(0, 2)
    .forEach((r) => {
      suggestions.push({
        type: "region",
        label: r.name,
        href: `/region/${r.slug}`,
        image: r.image.url,
      });
    });

  return suggestions;
}

export function getPopularSearches() {
  return popularSearches;
}
