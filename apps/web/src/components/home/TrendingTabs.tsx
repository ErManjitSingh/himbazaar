"use client";

import { useState } from "react";
import { Tabs } from "@/components/ui/Tabs";
import { ProductGrid } from "@/components/product/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Product, Seller } from "@/types";

export function TrendingTabs({
  trending,
  newArrivals,
  topRated,
  favourites,
  sellers,
}: {
  trending: Product[];
  newArrivals: Product[];
  topRated: Product[];
  favourites: Product[];
  sellers: Seller[];
}) {
  const [active, setActive] = useState("trending");
  const map: Record<string, Product[]> = {
    trending,
    new: newArrivals,
    rated: topRated,
    favourites,
  };

  return (
    <section className="section-pad">
      <div className="container-hb">
        <SectionHeading
          eyebrow="Discover"
          title="Trending from the hills"
          href="/shop"
        />
        <Tabs
          tabs={[
            { id: "trending", label: "Trending" },
            { id: "new", label: "New Arrivals" },
            { id: "rated", label: "Top Rated" },
            { id: "favourites", label: "Himachal Favourites" },
          ]}
          active={active}
          onChange={setActive}
          className="mb-8"
        />
        <ProductGrid products={map[active] ?? trending} sellers={sellers} />
      </div>
    </section>
  );
}
