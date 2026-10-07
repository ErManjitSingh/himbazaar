import { products, regions } from "@/data";
import type { Region } from "@/types";

const delay = (ms = 40) => new Promise((r) => setTimeout(r, ms));

/** Future: GET /api/regions */
export async function getRegions(): Promise<Region[]> {
  await delay();
  return regions.map((r) => ({
    ...r,
    productCount: products.filter((p) => p.regionId === r._id).length,
  }));
}

/** Future: GET /api/regions/:slug */
export async function getRegionBySlug(slug: string): Promise<Region | null> {
  await delay();
  const region = regions.find((r) => r.slug === slug) ?? null;
  if (!region) return null;
  return {
    ...region,
    productCount: products.filter((p) => p.regionId === region._id).length,
  };
}
