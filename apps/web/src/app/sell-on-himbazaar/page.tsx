import Link from "next/link";
import { SellerCard } from "@/components/seller/SellerCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { buildMetadata } from "@/lib/seo";
import { getSellers } from "@/services";

export const metadata = buildMetadata({
  title: "Sell on HimBazaar",
  description:
    "Sell your Himachali products to India. Verified sellers, fair reach, mountain stories.",
  path: "/sell-on-himbazaar",
});

const benefits = [
  "Reach customers across India",
  "Keep your brand and origin story",
  "Verified seller badge builds trust",
  "Multi-product catalog tools (coming soon)",
  "Transparent commission model",
  "Support for farmers, artisans and kitchens",
];

const steps = [
  { title: "Apply", text: "Tell us about your products and where you make them." },
  { title: "Verify", text: "We review authenticity, quality and documentation." },
  { title: "List", text: "Add products with origin, photos and pricing." },
  { title: "Sell", text: "Fulfil orders and grow with HimBazaar." },
];

export default async function SellPage() {
  const sellers = await getSellers();

  return (
    <div>
      <section className="gradient-mountain section-pad">
        <div className="container-hb max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hb-gold">
            For makers of Himachal
          </p>
          <h1 className="mt-3 font-serif text-4xl text-hb-deep md:text-6xl">
            Sell Your Story.
            <br />
            Reach India.
          </h1>
          <p className="mt-5 text-base text-hb-muted md:text-lg">
            HimBazaar is built for local Himachali sellers — farmers, artisans,
            and family kitchens ready to share authentic products with the
            country.
          </p>
          <Link href="/contact" className="mt-8 inline-block">
            <Button size="lg" variant="primary">
              Start Selling
            </Button>
          </Link>
        </div>
      </section>

      <section className="section-pad container-hb">
        <SectionHeading
          title="Why sell on HimBazaar"
          description="A marketplace that values origin as much as conversion."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b) => (
            <li
              key={b}
              className="rounded-lg bg-white p-5 text-sm text-hb-deep ring-1 ring-hb-border"
            >
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-pad bg-hb-cream/50">
        <div className="container-hb">
          <SectionHeading title="How it works" />
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-lg bg-white p-5 ring-1 ring-hb-border">
                <p className="text-xs font-semibold text-hb-gold">0{i + 1}</p>
                <h3 className="mt-2 font-serif text-xl text-hb-deep">{s.title}</h3>
                <p className="mt-2 text-sm text-hb-muted">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="verification" className="section-pad container-hb">
        <SectionHeading
          title="Seller verification"
          description="We verify identity, product authenticity and basic quality standards before listings go live. Commission is category-based and communicated clearly before onboarding."
        />
        <div className="rounded-lg bg-hb-deep p-8 text-white md:p-10">
          <h3 className="font-serif text-2xl">Categories we welcome</h3>
          <p className="mt-3 max-w-2xl text-white/80">
            Food & pantry, honey, ghee, spices, tea, dry fruits, wool & shawls,
            handicrafts, wellness and curated gift hampers — made in Himachal.
          </p>
          <Link href="/contact" className="mt-6 inline-block">
            <Button variant="gold">Start Selling</Button>
          </Link>
        </div>
      </section>

      <section className="section-pad container-hb">
        <SectionHeading title="Seller stories" href="/stories" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sellers.slice(0, 4).map((s) => (
            <SellerCard key={s._id} seller={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
