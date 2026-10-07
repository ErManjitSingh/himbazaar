/**
 * Shared API contract types for web + mobile + future Node API.
 * Keep in sync with apps/web/src/types as the source of truth for Phase 1.
 */

export type ID = string;

export interface ApiListResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface ApiError {
  message: string;
  code?: string;
  status: number;
}

/** REST endpoints planned for Node.js backend */
export const API_ROUTES = {
  products: "/api/products",
  product: (slug: string) => `/api/products/${slug}`,
  categories: "/api/categories",
  category: (slug: string) => `/api/categories/${slug}`,
  regions: "/api/regions",
  region: (slug: string) => `/api/regions/${slug}`,
  sellers: "/api/sellers",
  seller: (slug: string) => `/api/sellers/${slug}`,
  stories: "/api/stories",
  story: (slug: string) => `/api/stories/${slug}`,
  collections: "/api/collections",
  collection: (slug: string) => `/api/collections/${slug}`,
  authLogin: "/api/auth/login",
  authRegister: "/api/auth/register",
  cart: "/api/cart",
  orders: "/api/orders",
  payments: "/api/payments",
} as const;
