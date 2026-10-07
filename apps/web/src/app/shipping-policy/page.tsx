import { PolicyPage } from "@/lib/policy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Shipping Policy",
  path: "/shipping-policy",
});

export default function ShippingPolicyPage() {
  return (
    <PolicyPage
      title="Shipping Policy"
      paragraphs={[
        "Orders are typically dispatched within 1–3 business days. Delivery timelines vary by destination and usually range from 4–7 days.",
        "Free shipping applies on eligible orders above ₹999. Multi-seller carts may ship in separate packages.",
        "You will receive tracking updates once your order is shipped.",
      ]}
    />
  );
}
