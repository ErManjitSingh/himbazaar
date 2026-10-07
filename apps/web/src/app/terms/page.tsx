import { PolicyPage } from "@/lib/policy";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <PolicyPage
      title="Terms of Service"
      paragraphs={[
        "By using HimBazaar you agree to shop respectfully, provide accurate order information and comply with applicable Indian laws.",
        "Product authenticity claims are backed by seller verification processes; marketplace listings remain the responsibility of respective sellers.",
        "These terms will evolve as payments, logistics and seller tools go live.",
      ]}
    />
  );
}
