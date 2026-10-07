import { buildMetadata } from "@/lib/seo";
import { ContactForm } from "@/components/shared/ContactForm";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact HimBazaar support or seller onboarding.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="container-hb max-w-xl py-10">
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">Contact</h1>
      <p className="mt-2 text-sm text-hb-muted">
        Questions about orders, products or selling on HimBazaar? Write to us.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </div>
  );
}
