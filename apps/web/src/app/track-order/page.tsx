import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo";
import { TrackOrderClient } from "@/components/cart/TrackOrderClient";

export const metadata = buildMetadata({
  title: "Track order",
  description: "Track your HimBazaar order status.",
  path: "/track-order",
});

export default function TrackOrderPage() {
  return (
    <div className="container-hb py-8 md:py-10">
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">Track order</h1>
      <p className="mt-2 text-sm text-hb-muted">
        Enter your order number to see live mock tracking.
      </p>
      <div className="mt-8 max-w-xl">
        <Suspense fallback={<div className="h-32 rounded-lg bg-hb-cream" />}>
          <TrackOrderClient />
        </Suspense>
      </div>
    </div>
  );
}
