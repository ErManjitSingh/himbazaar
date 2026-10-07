import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About HimBazaar",
  description:
    "HimBazaar is India's marketplace for authentic Himalayan & Himachali products.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-hb max-w-3xl py-10 md:py-16">
      <h1 className="font-serif text-4xl text-hb-deep">About HimBazaar</h1>
      <p className="mt-6 text-base leading-relaxed text-hb-muted">
        HimBazaar is an elegant digital marketplace connecting India&apos;s
        customers with the people, products and traditions of Himachal Pradesh.
        We believe every jar of honey, every shawl and every spice blend carries
        a valley, a maker and a story.
      </p>
      <p className="mt-4 text-base leading-relaxed text-hb-muted">
        Our mission is to make authentic Himalayan products discoverable,
        trustworthy and beautifully presented — while helping local sellers
        reach customers across India.
      </p>
    </div>
  );
}
