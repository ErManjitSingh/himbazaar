import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CollectionShowcase({
  collections,
}: {
  collections: Collection[];
}) {
  return (
    <section className="section-pad bg-hb-cream/40">
      <div className="container-hb">
        <SectionHeading
          eyebrow="Collections"
          title="Featured Himachal collections"
          description="Editorial edits curated around taste, craft and valley identity."
          href="/collection/taste-of-himachal"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {collections.slice(0, 8).map((col) => (
            <Link
              key={col._id}
              href={`/collection/${col.slug}`}
              className="group relative min-h-[240px] overflow-hidden rounded-lg"
            >
              <Image
                src={col.image.url}
                alt={col.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hb-deep/85 via-hb-deep/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-serif text-xl text-white">{col.name}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-white/80">
                  {col.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
