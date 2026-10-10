import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CollectionShowcase } from "@/components/home/CollectionShowcase";
import { StoryBanner } from "@/components/home/StoryBanner";
import { GiftHampers } from "@/components/home/GiftHampers";
import { CategoryCard } from "@/components/category/CategoryCard";
import { RegionCard } from "@/components/region/RegionCard";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getBestSellers,
  getCategories,
  getCollections,
  getGiftHampers,
  getNewArrivals,
  getRegions,
  getSellers,
} from "@/services";

export default async function HomePage() {
  const [
    categories,
    collections,
    bestSellers,
    newArrivals,
    regions,
    sellers,
    hampers,
  ] = await Promise.all([
    getCategories(),
    getCollections(true),
    getBestSellers(8),
    getNewArrivals(8),
    getRegions(),
    getSellers(),
    getGiftHampers(),
  ]);

  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="section-pad">
        <div className="container-hb">
          <SectionHeading
            title="Shop by category"
            description="Browse pantry, wellness, wool and craft from Himachal."
            href="/shop"
            linkLabel="All categories"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-hb-cream/60">
        <div className="container-hb">
          <SectionHeading
            title="Best sellers"
            description="Most loved products — ready to add to cart."
            href="/shop?sort=rating"
            linkLabel="View all"
          />
          <ProductGrid products={bestSellers} sellers={sellers} />
        </div>
      </section>

      <section className="section-pad">
        <div className="container-hb">
          <SectionHeading
            title="New arrivals"
            description="Fresh stock from mountain sellers this week."
            href="/shop?sort=newest"
            linkLabel="See what's new"
          />
          <ProductGrid products={newArrivals} sellers={sellers} />
        </div>
      </section>

      <CollectionShowcase collections={collections} />

      <GiftHampers hampers={hampers} />

      <section className="section-pad">
        <div className="container-hb">
          <SectionHeading
            title="Shop by region"
            description="Find products from Kullu, Kinnaur, Kangra and more."
            href="/region/kullu"
            linkLabel="All regions"
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {regions.slice(0, 6).map((region) => (
              <RegionCard key={region._id} region={region} />
            ))}
          </div>
        </div>
      </section>

      <StoryBanner />
    </>
  );
}
