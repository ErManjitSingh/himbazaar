import Link from "next/link";
import { ProductGrid } from "@/components/product/ProductGrid";
import { CategoryCard } from "@/components/category/CategoryCard";
import { buildMetadata } from "@/lib/seo";
import {
  getCategories,
  getPopularSearches,
  getProducts,
  getRegions,
  getSellers,
} from "@/services";

type SearchParams = Promise<{ q?: string }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q } = await searchParams;
  return buildMetadata({
    title: q ? `Search: ${q}` : "Search",
    description: "Search authentic Himachali products, sellers and regions.",
    path: q ? `/search?q=${encodeURIComponent(q)}` : "/search",
    noIndex: true,
  });
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  const [result, categories, sellers, regions] = await Promise.all([
    getProducts({ query: query || undefined, limit: 48 }),
    getCategories(),
    getSellers(),
    getRegions(),
  ]);

  const matchedCategories = query
    ? categories.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  const matchedSellers = query
    ? sellers.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()))
    : [];
  const matchedRegions = query
    ? regions.filter((r) => r.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  const popular = getPopularSearches();

  return (
    <div className="container-hb py-8 md:py-10">
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">
        {query ? (
          <>
            Search results for <span className="text-hb-natural">“{query}”</span>
          </>
        ) : (
          "Search HimBazaar"
        )}
      </h1>

      {!query && (
        <div className="mt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-hb-muted">
            Popular searches
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {popular.map((term) => (
              <Link
                key={term}
                href={`/search?q=${encodeURIComponent(term)}`}
                className="rounded-full bg-hb-cream px-3 py-1.5 text-sm text-hb-deep hover:bg-[#efe8d8]"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      )}

      {query && result.total === 0 && (
        <div className="mt-10">
          <p className="text-hb-muted">No products found for “{query}”.</p>
          <h2 className="mt-8 font-serif text-2xl text-hb-deep">
            Popular categories
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
            {categories.slice(0, 4).map((c) => (
              <CategoryCard key={c._id} category={c} />
            ))}
          </div>
          <h2 className="mt-10 font-serif text-2xl text-hb-deep">
            Recommended products
          </h2>
          <div className="mt-4">
            <ProductGrid
              products={(await getProducts({ sort: "rating", limit: 8 })).data}
              sellers={sellers}
            />
          </div>
        </div>
      )}

      {query && result.total > 0 && (
        <>
          {(matchedCategories.length > 0 ||
            matchedSellers.length > 0 ||
            matchedRegions.length > 0) && (
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {matchedCategories.map((c) => (
                <Link
                  key={c._id}
                  href={`/category/${c.slug}`}
                  className="rounded-md bg-hb-cream px-3 py-1.5 text-hb-deep"
                >
                  Category: {c.name}
                </Link>
              ))}
              {matchedSellers.map((s) => (
                <Link
                  key={s._id}
                  href={`/seller/${s.slug}`}
                  className="rounded-md bg-hb-cream px-3 py-1.5 text-hb-deep"
                >
                  Seller: {s.name}
                </Link>
              ))}
              {matchedRegions.map((r) => (
                <Link
                  key={r._id}
                  href={`/region/${r.slug}`}
                  className="rounded-md bg-hb-cream px-3 py-1.5 text-hb-deep"
                >
                  Region: {r.name}
                </Link>
              ))}
            </div>
          )}
          <p className="mt-4 text-sm text-hb-muted">{result.total} products</p>
          <div className="mt-6">
            <ProductGrid products={result.data} sellers={sellers} />
          </div>
        </>
      )}
    </div>
  );
}
