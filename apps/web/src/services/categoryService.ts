import { categories, products } from "@/data";
import type { Category } from "@/types";

const delay = (ms = 40) => new Promise((r) => setTimeout(r, ms));

/** Future: GET /api/categories */
export async function getCategories(): Promise<Category[]> {
  await delay();
  return categories
    .filter((c) => c.isActive && !c.parentId)
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((c) => ({
      ...c,
      productCount: products.filter((p) => p.categoryId === c._id).length,
    }));
}

/** Future: GET /api/categories/:slug */
export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  await delay();
  const category = categories.find((c) => c.slug === slug) ?? null;
  if (!category) return null;
  return {
    ...category,
    productCount: products.filter((p) => p.categoryId === category._id).length,
  };
}
