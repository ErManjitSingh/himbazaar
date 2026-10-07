import { buildMetadata } from "@/lib/seo";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";

export const metadata = buildMetadata({
  title: "Checkout",
  description: "Secure HimBazaar checkout — mock payment UI only.",
  path: "/checkout",
  noIndex: true,
});

export default function CheckoutPage() {
  return (
    <div className="container-hb py-8 md:py-10">
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">Checkout</h1>
      <p className="mt-2 text-sm text-hb-muted">
        Mock checkout only — payment gateway will connect later.
      </p>
      <div className="mt-8">
        <CheckoutForm />
      </div>
    </div>
  );
}
