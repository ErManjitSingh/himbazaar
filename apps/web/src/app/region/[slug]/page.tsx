import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductGrid } from "@/components/product/ProductGrid";
import { buildMetadata } from "@/lib/seo";
import { getProducts, getRegionBySlug, getSellers } from "@/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const region = await getRegionBySlug(slug);
  if (!region) return {};
  return buildMetadata({
    title: `${region.name} — Products from the valley`,
    description: region.description,
    path: `/region/${region.slug}`,
    image: region.image.url,
  });
}

export default async function RegionPage({ params }: Props) {
  const { slug } = await params;
  const region = await getRegionBySlug(slug);
  if (!region) notFound();

  const [result, sellers] = await Promise.all([
    getProducts({ region: region._id, limit: 48 }),
    getSellers(),
  ]);

  return (
    <div>
      <div className="relative h-64 md:h-80">
        <Image
          src={region.image.url}
          alt={region.image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hb-deep/80 to-hb-deep/20" />
        <div className="container-hb relative flex h-full flex-col justify-end pb-8 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hb-gold">
            Every valley has a story
          </p>
          <h1 className="mt-2 font-serif text-4xl md:text-5xl">{region.name}</h1>
          <p className="mt-3 max-w-xl text-sm text-white/85 md:text-base">
            {region.description}
          </p>
        </div>
      </div>
      <div className="container-hb py-8 md:py-10">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: region.name },
          ]}
        />
        <div className="mb-8 flex flex-wrap gap-2">
          {region.highlights.map((h) => (
            <span
              key={h}
              className="rounded-full bg-hb-cream px-3 py-1 text-xs font-medium text-hb-deep"
            >
              {h}
            </span>
          ))}
        </div>
        <ProductGrid products={result.data} sellers={sellers} />
      </div>
    </div>
  );
}
