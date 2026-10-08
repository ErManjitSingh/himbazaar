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
          title="Collections"
          description="Taste, craft, and valley — edited for how people actually shop."
          href="/collection/taste-of-himachal"
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((col) => (
            <Link
              key={col._id}
              href={`/collection/${col.slug}`}
              className="group relative min-h-[280px] overflow-hidden"
            >
              <Image
                src={col.image.url}
                alt={col.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hb-deep/80 via-hb-deep/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-xl tracking-[-0.02em] text-white">
                  {col.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
