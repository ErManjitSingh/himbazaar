import { Suspense } from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ShopFilters } from "@/components/product/ShopFilters";
import { buildMetadata } from "@/lib/seo";
import { getCategories, getProducts, getRegions, getSellers } from "@/services";
import type { SortOption } from "@/types";

export const metadata = buildMetadata({
  title: "Shop",
  description:
    "Browse authentic Himachali products — honey, ghee, shawls, spices, crafts and more.",
  path: "/shop",
});

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const sort = (typeof params.sort === "string" ? params.sort : "relevance") as SortOption;
  const categorySlug = typeof params.category === "string" ? params.category : undefined;
  const regionSlug = typeof params.region === "string" ? params.region : undefined;
  const minRating = params.rating ? Number(params.rating) : undefined;

  const [categories, regions, sellers] = await Promise.all([
    getCategories(),
    getRegions(),
    getSellers(),
  ]);

  const category = categorySlug
    ? categories.find((c) => c.slug === categorySlug)
    : undefined;
  const region = regionSlug
    ? regions.find((r) => r.slug === regionSlug)
    : undefined;

  const result = await getProducts({
    sort,
    category: category?._id,
    region: region?._id,
    minRating,
    minPrice: params.minPrice ? Number(params.minPrice) : undefined,
    maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
    availability: params.inStock === "1" ? "in_stock" : "all",
    limit: 48,
  });

  return (
    <div className="container-hb py-8 md:py-10">
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">Shop</h1>
          <p className="mt-1 text-sm text-hb-muted">
            {result.total} products from the mountains
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <Suspense fallback={<div className="h-40 rounded-lg bg-hb-cream" />}>
          <ShopFilters categories={categories} regions={regions} sellers={sellers} />
        </Suspense>
        <ProductGrid products={result.data} sellers={sellers} />
      </div>
    </div>
  );
}
