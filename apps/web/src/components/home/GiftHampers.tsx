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
          eyebrow="Gifting"
          title="Gift the mountains"
          description="Curated hampers for celebrations, hosts and anyone who loves Himachal."
          href="/collection/himachali-gifting"
          linkLabel="View all hampers"
          className="[&_h2]:text-white [&_p]:text-white/70 [&_a]:text-hb-gold"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hampers.slice(0, 4).map((hamper) => (
            <Link
              key={hamper._id}
              href={`/product/${hamper.slug}`}
              className="group overflow-hidden rounded-lg bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={hamper.images[0]?.url ?? ""}
                  alt={hamper.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-white">{hamper.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/65">
                  {hamper.shortDescription}
                </p>
                <div className="mt-3 [&_span]:text-white [&_.line-through]:text-white/45 [&_.text-hb-natural]:text-hb-gold">
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
