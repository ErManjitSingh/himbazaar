import { products } from "@/data";
import type { PaginatedResult, Product, ProductFilters } from "@/types";

const delay = (ms = 80) => new Promise((r) => setTimeout(r, ms));

function applyFilters(list: Product[], filters: ProductFilters = {}) {
  let result = list.filter((p) => p.isActive);

  if (filters.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.tags.some((t) => t.includes(q)) ||
        p.origin.toLowerCase().includes(q)
    );
  }

  if (filters.category) {
    result = result.filter((p) => p.categoryId === filters.category || p.categoryId.includes(filters.category!));
  }

  if (filters.region) {
    result = result.filter((p) => p.regionId === filters.region || p.regionId.endsWith(filters.region!));
  }

  if (filters.seller) {
    result = result.filter((p) => p.sellerId === filters.seller || p.sellerId.includes(filters.seller!));
  }

  if (filters.collection) {
    result = result.filter((p) => p.collectionIds.includes(filters.collection!));
  }

  if (filters.minPrice != null) {
    result = result.filter((p) => p.price >= filters.minPrice!);
  }

  if (filters.maxPrice != null) {
    result = result.filter((p) => p.price <= filters.maxPrice!);
  }

  if (filters.minRating != null) {
    result = result.filter((p) => p.rating >= filters.minRating!);
  }

  if (filters.availability === "in_stock") {
    result = result.filter((p) => p.stock > 0);
  }

  if (filters.dietary?.length) {
    result = result.filter((p) =>
      filters.dietary!.every((d) => p.dietary?.includes(d))
    );
  }

  switch (filters.sort) {
    case "price_asc":
      result = [...result].sort((a, b) => a.price - b.price);
      break;
    case "price_desc":
      result = [...result].sort((a, b) => b.price - a.price);
      break;
    case "rating":
      result = [...result].sort((a, b) => b.rating - a.rating);
      break;
    case "newest":
      result = [...result].sort(
        (a, b) => Number(b.isNewArrival) - Number(a.isNewArrival)
      );
      break;
    case "discount":
      result = [...result].sort((a, b) => b.discount - a.discount);
      break;
    default:
      result = [...result].sort(
        (a, b) => Number(b.isBestSeller) - Number(a.isBestSeller) || b.rating - a.rating
      );
  }

  return result;
}

/** Future: GET /api/products */
export async function getProducts(
  filters: ProductFilters = {}
): Promise<PaginatedResult<Product>> {
  await delay();
  const page = filters.page ?? 1;
  const limit = filters.limit ?? 24;
  const filtered = applyFilters(products, filters);
  const start = (page - 1) * limit;
  const data = filtered.slice(start, start + limit);

  return {
    data,
    total: filtered.length,
    page,
    limit,
    totalPages: Math.max(1, Math.ceil(filtered.length / limit)),
  };
}

/** Future: GET /api/products/:slug */
export async function getProductBySlug(slug: string): Promise<Product | null> {
  await delay();
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getProductById(id: string): Promise<Product | null> {
  await delay();
  return products.find((p) => p._id === id) ?? null;
}

export async function getBestSellers(limit = 8): Promise<Product[]> {
  await delay();
  return products.filter((p) => p.isBestSeller).slice(0, limit);
}

export async function getTrending(limit = 8): Promise<Product[]> {
  await delay();
  return products.filter((p) => p.isTrending).slice(0, limit);
}

export async function getNewArrivals(limit = 8): Promise<Product[]> {
  await delay();
  return products.filter((p) => p.isNewArrival).slice(0, limit);
}

export async function getTopRated(limit = 8): Promise<Product[]> {
  await delay();
  return [...products].sort((a, b) => b.rating - a.rating).slice(0, limit);
}

export async function getGiftHampers(): Promise<Product[]> {
  await delay();
  return products.filter((p) => p.isGiftHamper);
}

export async function getRelatedProducts(
  product: Product,
  limit = 4
): Promise<Product[]> {
  await delay();
  return products
    .filter(
      (p) =>
        p._id !== product._id &&
        (p.categoryId === product.categoryId ||
          p.regionId === product.regionId ||
          p.sellerId === product.sellerId)
    )
    .slice(0, limit);
}

export async function getProductsByIds(ids: string[]): Promise<Product[]> {
  await delay();
  return ids
    .map((id) => products.find((p) => p._id === id))
    .filter(Boolean) as Product[];
}
