import { PolicyPage } from "@/lib/policy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      paragraphs={[
        "HimBazaar respects your privacy. We collect only the information needed to process orders, improve the marketplace experience and communicate important updates.",
        "We do not sell personal data. Payment details will be handled by certified payment partners when live payments are enabled.",
        "You may request access or deletion of account data by contacting support.",
      ]}
    />
  );
}
