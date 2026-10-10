import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Price } from "@/components/ui/Price";

export function GiftHampers({ hampers }: { hampers: Product[] }) {
  return (
    <section className="section-pad bg-hb-deep text-white">
      <div className="container-hb">
        <SectionHeading
          title="Gift hampers"
          description="Ready-to-gift boxes of Himalayan favourites."
          href="/collection/himachali-gifting"
          linkLabel="View all hampers"
          className="[&_h2]:text-white [&_p]:text-white/70 [&_a]:text-hb-gold"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {hampers.slice(0, 4).map((hamper) => (
            <Link
              key={hamper._id}
              href={`/product/${hamper.slug}`}
              className="group overflow-hidden border border-white/15 bg-white/5 transition hover:bg-white/10"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={hamper.images[0]?.url ?? ""}
                  alt={hamper.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-3.5">
                <h3 className="line-clamp-2 text-sm font-medium text-white">
                  {hamper.name}
                </h3>
                <div className="mt-2 [&_span]:text-white [&_.line-through]:text-white/45 [&_.text-hb-natural]:text-hb-gold">
                  <Price
                    price={hamper.price}
                    mrp={hamper.mrp}
                    discount={hamper.discount}
                    size="sm"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
