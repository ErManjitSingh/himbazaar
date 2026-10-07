import { buildMetadata } from "@/lib/seo";
import { CartView } from "@/components/cart/CartView";

export const metadata = buildMetadata({
  title: "Cart",
  description: "Review your HimBazaar cart — multi-seller marketplace ready.",
  path: "/cart",
  noIndex: true,
});

export default function CartPage() {
  return (
    <div className="container-hb py-8 md:py-10">
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">Your cart</h1>
      <p className="mt-2 text-sm text-hb-muted">
        Products are grouped by seller for multi-vendor checkout.
      </p>
      <div className="mt-8">
        <CartView />
      </div>
    </div>
  );
}
