import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CollectionShowcase({
  collections,
}: {
  collections: Collection[];
}) {
  const featured = collections.slice(0, 4);

  return (
    <section className="section-pad gradient-mountain">
      <div className="container-hb">
        <SectionHeading
          title="Shop collections"
          description="Curated picks for gifting, pantry and wellness."
          href="/collection/taste-of-himachal"
          linkLabel="Browse collections"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((col) => (
            <Link
              key={col._id}
              href={`/collection/${col.slug}`}
              className="group relative min-h-[240px] overflow-hidden border border-hb-border"
            >
              <Image
                src={col.image.url}
                alt={col.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hb-deep/85 via-hb-deep/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-serif text-xl text-white">{col.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-hb-gold">
                  Shop now
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
