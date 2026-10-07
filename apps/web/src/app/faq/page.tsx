import { Accordion } from "@/components/ui/Accordion";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about HimBazaar orders, shipping and sellers.",
  path: "/faq",
});

const faqs = [
  {
    question: "Do you ship across India?",
    answer: "Yes. We ship pan-India. Free shipping applies on eligible orders above ₹999.",
  },
  {
    question: "Are sellers verified?",
    answer:
      "Yes. Sellers go through an authenticity and quality review before listing products.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Eligible products can be returned within 7 days. See our return policy for details.",
  },
  {
    question: "How do I become a seller?",
    answer: "Visit Sell on HimBazaar and share your product story to begin onboarding.",
  },
];

export default function FAQPage() {
  return (
    <div className="container-hb max-w-2xl py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
      />
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">FAQ</h1>
      <div className="mt-8">
        <Accordion items={faqs} />
      </div>
    </div>
  );
}
