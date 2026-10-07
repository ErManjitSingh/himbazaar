import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { CollectionShowcase } from "@/components/home/CollectionShowcase";
import { StoryBanner } from "@/components/home/StoryBanner";
import { TrendingTabs } from "@/components/home/TrendingTabs";
import { GiftHampers } from "@/components/home/GiftHampers";
import { WhyHimBazaar } from "@/components/home/WhyHimBazaar";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { CategoryCard } from "@/components/category/CategoryCard";
import { RegionCard } from "@/components/region/RegionCard";
import { SellerCard } from "@/components/seller/SellerCard";
import { StoryCard } from "@/components/stories/StoryCard";
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
  getStories,
  getTopRated,
  getTrending,
} from "@/services";

export default async function HomePage() {
  const [
    categories,
    collections,
    bestSellers,
    regions,
    sellers,
    trending,
    newArrivals,
    topRated,
    hampers,
    stories,
  ] = await Promise.all([
    getCategories(),
    getCollections(true),
    getBestSellers(8),
    getRegions(),
    getSellers(),
    getTrending(8),
    getNewArrivals(8),
    getTopRated(8),
    getGiftHampers(),
    getStories(3),
  ]);

  const favourites = bestSellers.filter((p) =>
    p.tags.some((t) => ["bestseller", "himachal", "rajma", "honey", "ghee"].includes(t))
  );

  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="section-pad">
        <div className="container-hb">
          <SectionHeading
            eyebrow="Shop by category"
            title="Find what the mountains make best"
            href="/shop"
            linkLabel="Browse all"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {categories.slice(0, 12).map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      </section>

      <CollectionShowcase collections={collections} />

      <section className="section-pad">
        <div className="container-hb">
          <SectionHeading
            eyebrow="Best sellers"
            title="Loved across India"
            description="The jars, weaves and crafts customers return for."
            href="/shop?sort=rating"
          />
          <ProductGrid products={bestSellers} sellers={sellers} />
        </div>
      </section>

      <section className="section-pad bg-hb-cream/40">
        <div className="container-hb">
          <SectionHeading
            eyebrow="Discover by region"
            title="Every valley has a story."
            description="Explore products rooted in Shimla, Kullu, Kinnaur, Spiti and beyond."
            href="/region/kullu"
            linkLabel="Explore regions"
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {regions.slice(0, 6).map((region, i) => (
              <RegionCard
                key={region._id}
                region={region}
                large={i === 0}
                className={i === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-hb">
          <SectionHeading
            eyebrow="Meet the makers"
            title="Made in a small village. Loved across India."
            description="Verified farmers, artisans and family kitchens behind every listing."
            href="/sell-on-himbazaar"
            linkLabel="Sell on HimBazaar"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sellers.slice(0, 4).map((seller) => (
              <SellerCard key={seller._id} seller={seller} />
            ))}
          </div>
        </div>
      </section>

      <StoryBanner />

      <TrendingTabs
        trending={trending}
        newArrivals={newArrivals}
        topRated={topRated}
        favourites={favourites.length ? favourites : bestSellers}
        sellers={sellers}
      />

      <GiftHampers hampers={hampers} />

      <WhyHimBazaar />

      <ReviewsSection />

      <section className="section-pad bg-hb-cream/40">
        <div className="container-hb">
          <SectionHeading
            eyebrow="Stories from Himachal"
            title="Read the mountains"
            href="/stories"
            linkLabel="All stories"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {stories.map((story) => (
              <StoryCard key={story._id} story={story} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
