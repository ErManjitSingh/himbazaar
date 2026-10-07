/** Shared domain types — aligned with future MongoDB / REST API contracts */

export type ID = string;

export interface ImageAsset {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Category {
  _id: ID;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: ImageAsset;
  productCount: number;
  parentId?: ID | null;
  isActive: boolean;
  sortOrder: number;
}

export interface Region {
  _id: ID;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: ImageAsset;
  district?: string;
  productCount: number;
  highlights: string[];
}

export interface Seller {
  _id: ID;
  name: string;
  slug: string;
  logo: ImageAsset;
  coverImage: ImageAsset;
  description: string;
  shortDescription: string;
  village: string;
  district: string;
  state: string;
  regionId: ID;
  verified: boolean;
  rating: number;
  reviewCount: number;
  productCount: number;
  story?: string;
  specialties: string[];
  status: "active" | "pending" | "suspended";
  createdAt: string;
}

export interface ProductVariant {
  id: ID;
  label: string;
  sku: string;
  price: number;
  mrp: number;
  stock: number;
  weight?: string;
}

export interface Product {
  _id: ID;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  images: ImageAsset[];
  price: number;
  mrp: number;
  discount: number;
  categoryId: ID;
  subCategoryId?: ID;
  sellerId: ID;
  regionId: ID;
  collectionIds: ID[];
  brand?: string;
  sku: string;
  stock: number;
  rating: number;
  reviewCount: number;
  ingredients?: string[];
  highlights: string[];
  howToUse?: string;
  storage?: string;
  origin: string;
  weight?: string;
  variants?: ProductVariant[];
  tags: string[];
  dietary?: string[];
  faqs?: { question: string; answer: string }[];
  isFeatured: boolean;
  isBestSeller: boolean;
  isTrending: boolean;
  isNewArrival: boolean;
  isGiftHamper: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  _id: ID;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: ImageAsset;
  productIds: ID[];
  isFeatured: boolean;
}

export interface Story {
  _id: ID;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: ImageAsset;
  author: string;
  readTime: number;
  relatedProductIds: ID[];
  relatedRegionId?: ID;
  relatedSellerId?: ID;
  publishedAt: string;
}

export interface Review {
  _id: ID;
  productId: ID;
  productName: string;
  userName: string;
  location: string;
  rating: number;
  title?: string;
  comment: string;
  createdAt: string;
  verified: boolean;
}

export interface Banner {
  _id: ID;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  image: ImageAsset;
  placement: "announcement" | "hero" | "mid" | "promo";
  isActive: boolean;
}

export interface GiftHamper {
  _id: ID;
  name: string;
  slug: string;
  description: string;
  image: ImageAsset;
  price: number;
  mrp: number;
  itemCount: number;
  productId: ID;
}

export interface Address {
  _id: ID;
  label: string;
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface CartItem {
  productId: ID;
  sellerId: ID;
  quantity: number;
  variantId?: ID;
  addedAt: string;
}

export interface OrderTimelineStep {
  status: "placed" | "confirmed" | "packed" | "shipped" | "out_for_delivery" | "delivered";
  label: string;
  description?: string;
  completedAt?: string;
  isCurrent?: boolean;
}

export interface OrderItem {
  productId: ID;
  productName: string;
  productImage: string;
  sellerId: ID;
  sellerName: string;
  quantity: number;
  price: number;
}

export interface Order {
  _id: ID;
  orderNumber: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  status: OrderTimelineStep["status"];
  timeline: OrderTimelineStep[];
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
  estimatedDelivery?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
  featured?: { title: string; href: string; image: string }[];
}

export type SortOption =
  | "relevance"
  | "price_asc"
  | "price_desc"
  | "rating"
  | "newest"
  | "discount";

export interface ProductFilters {
  category?: string;
  region?: string;
  seller?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  availability?: "in_stock" | "all";
  dietary?: string[];
  sort?: SortOption;
  query?: string;
  collection?: string;
  page?: number;
  limit?: number;
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface SearchSuggestion {
  type: "product" | "category" | "seller" | "region" | "query";
  label: string;
  href: string;
  image?: string;
}
