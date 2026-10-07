import { PolicyPage } from "@/lib/policy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Return Policy",
  path: "/return-policy",
});

export default function ReturnPolicyPage() {
  return (
    <PolicyPage
      title="Return Policy"
      paragraphs={[
        "Eligible products may be returned within 7 days of delivery if unused and in original packaging.",
        "Perishable food items may have limited return eligibility for quality issues only. Contact support with photos if something arrives damaged.",
        "Refunds are processed to the original payment method after inspection.",
      ]}
    />
  );
}
