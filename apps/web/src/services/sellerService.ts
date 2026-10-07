import { products, sellers } from "@/data";
import type { Seller } from "@/types";

const delay = (ms = 40) => new Promise((r) => setTimeout(r, ms));

/** Future: GET /api/sellers */
export async function getSellers(): Promise<Seller[]> {
  await delay();
  return sellers.map((s) => ({
    ...s,
    productCount: products.filter((p) => p.sellerId === s._id).length,
  }));
}

/** Future: GET /api/sellers/:slug */
export async function getSellerBySlug(slug: string): Promise<Seller | null> {
  await delay();
  const seller = sellers.find((s) => s.slug === slug) ?? null;
  if (!seller) return null;
  return {
    ...seller,
    productCount: products.filter((p) => p.sellerId === seller._id).length,
  };
}

export async function getSellerById(id: string): Promise<Seller | null> {
  await delay();
  return sellers.find((s) => s._id === id) ?? null;
}
