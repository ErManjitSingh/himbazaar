import Image from "next/image";
import { notFound } from "next/navigation";
import { BadgeCheck, MapPin } from "lucide-react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Rating } from "@/components/ui/Rating";
import { ProductGrid } from "@/components/product/ProductGrid";
import { buildMetadata } from "@/lib/seo";
import { trackEvent } from "@/lib/analytics";
import { getProducts, getSellerBySlug, getSellers } from "@/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const seller = await getSellerBySlug(slug);
  if (!seller) return {};
  return buildMetadata({
    title: seller.name,
    description: seller.description,
    path: `/seller/${seller.slug}`,
    image: seller.coverImage.url,
  });
}

export default async function SellerPage({ params }: Props) {
  const { slug } = await params;
  const seller = await getSellerBySlug(slug);
  if (!seller) notFound();

  // Analytics hook point for seller_view (server logs in future)
  void trackEvent;

  const [result, sellers] = await Promise.all([
    getProducts({ seller: seller._id, limit: 48 }),
    getSellers(),
  ]);

  return (
    <div>
      <div className="relative h-48 md:h-64">
        <Image
          src={seller.coverImage.url}
          alt={seller.coverImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-hb-deep/40" />
      </div>
      <div className="container-hb -mt-12 relative pb-10">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-hb-border md:p-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: seller.name },
            ]}
          />
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-hb-cream">
              <Image
                src={seller.logo.url}
                alt={seller.logo.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-serif text-3xl text-hb-deep">{seller.name}</h1>
                {seller.verified && (
                  <BadgeCheck className="h-5 w-5 text-hb-gold" aria-label="Verified" />
                )}
              </div>
              <p className="mt-1 flex items-center gap-1 text-sm text-hb-muted">
                <MapPin className="h-3.5 w-3.5" />
                {seller.village}, {seller.district}, {seller.state}
              </p>
              <div className="mt-2">
                <Rating value={seller.rating} count={seller.reviewCount} />
              </div>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-hb-muted md:text-base">
                {seller.description}
              </p>
              {seller.story && (
                <p className="mt-3 max-w-2xl font-serif text-lg italic text-hb-deep">
                  “{seller.story}”
                </p>
              )}
            </div>
          </div>
        </div>

        <h2 className="mt-10 font-serif text-2xl text-hb-deep">Products</h2>
        <div className="mt-6">
          <ProductGrid products={result.data} sellers={sellers} />
        </div>
      </div>
    </div>
  );
}
