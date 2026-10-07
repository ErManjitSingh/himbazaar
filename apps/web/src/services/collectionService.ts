import { collections, products } from "@/data";
import type { Collection, Product } from "@/types";

const delay = (ms = 40) => new Promise((r) => setTimeout(r, ms));

/** Future: GET /api/collections */
export async function getCollections(featuredOnly = false): Promise<Collection[]> {
  await delay();
  return featuredOnly
    ? collections.filter((c) => c.isFeatured)
    : collections;
}

/** Future: GET /api/collections/:slug */
export async function getCollectionBySlug(
  slug: string
): Promise<(Collection & { products: Product[] }) | null> {
  await delay();
  const collection = collections.find((c) => c.slug === slug) ?? null;
  if (!collection) return null;
  return {
    ...collection,
    products: collection.productIds
      .map((id) => products.find((p) => p._id === id))
      .filter(Boolean) as Product[],
  };
}
