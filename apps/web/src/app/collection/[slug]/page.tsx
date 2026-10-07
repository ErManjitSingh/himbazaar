import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductGrid } from "@/components/product/ProductGrid";
import { buildMetadata } from "@/lib/seo";
import { getCollectionBySlug, getSellers } from "@/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) return {};
  return buildMetadata({
    title: collection.name,
    description: collection.description,
    path: `/collection/${collection.slug}`,
    image: collection.image.url,
  });
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = await getCollectionBySlug(slug);
  if (!collection) notFound();
  const sellers = await getSellers();

  return (
    <div>
      <div className="relative h-56 md:h-72">
        <Image
          src={collection.image.url}
          alt={collection.image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hb-deep/55" />
        <div className="container-hb relative flex h-full flex-col justify-end pb-8 text-white">
          <h1 className="font-serif text-3xl md:text-5xl">{collection.name}</h1>
          <p className="mt-2 max-w-xl text-sm text-white/85 md:text-base">
            {collection.description}
          </p>
        </div>
      </div>
      <div className="container-hb py-8 md:py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: collection.name },
          ]}
        />
        <ProductGrid products={collection.products} sellers={sellers} />
      </div>
    </div>
  );
}
