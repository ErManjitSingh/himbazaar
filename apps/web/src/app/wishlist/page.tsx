import { buildMetadata } from "@/lib/seo";
import { WishlistView } from "@/components/product/WishlistView";

export const metadata = buildMetadata({
  title: "Wishlist",
  path: "/wishlist",
  noIndex: true,
});

export default function WishlistPage() {
  return (
    <div className="container-hb py-8 md:py-10">
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">Wishlist</h1>
      <div className="mt-8">
        <WishlistView />
      </div>
    </div>
  );
}
