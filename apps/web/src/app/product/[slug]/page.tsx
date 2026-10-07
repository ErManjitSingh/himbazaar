import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Rating } from "@/components/ui/Rating";
import { Price } from "@/components/ui/Price";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { ProductGrid } from "@/components/product/ProductGrid";
import { AddToCartActions } from "@/components/product/AddToCartActions";
import {
  breadcrumbJsonLd,
  buildMetadata,
  faqJsonLd,
  productJsonLd,
} from "@/lib/seo";
import {
  getCategories,
  getProductBySlug,
  getRelatedProducts,
  getRegions,
  getSellerById,
  getSellers,
} from "@/services";
import { reviews } from "@/data";
import { BadgeCheck, MapPin } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};
  return buildMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/product/${product.slug}`,
    image: product.images[0]?.url,
    type: "product",
  });
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const [seller, category, region, related, sellers] = await Promise.all([
    getSellerById(product.sellerId),
    getCategories().then((cats) =>
      cats.find((c) => c._id === product.categoryId)
    ),
    getRegions().then((regs) => regs.find((r) => r._id === product.regionId)),
    getRelatedProducts(product),
    getSellers(),
  ]);

  const productReviews = reviews.filter((r) => r.productId === product._id);

  return (
    <div className="container-hb py-8 md:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            productJsonLd({
              name: product.name,
              description: product.description,
              images: product.images.map((i) => i.url),
              sku: product.sku,
              price: product.price,
              mrp: product.mrp,
              rating: product.rating,
              reviewCount: product.reviewCount,
              slug: product.slug,
              brand: product.brand,
              availability: product.stock > 0,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              {
                name: category?.name ?? "Shop",
                path: category ? `/category/${category.slug}` : "/shop",
              },
              { name: product.name, path: `/product/${product.slug}` },
            ])
          ),
        }}
      />
      {product.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd(product.faqs)),
          }}
        />
      )}

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: category?.name ?? "Shop",
            href: category ? `/category/${category.slug}` : "/shop",
          },
          { label: product.name },
        ]}
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-3">
          <div className="relative aspect-square overflow-hidden rounded-lg bg-hb-cream">
            <Image
              src={product.images[0]?.url ?? ""}
              alt={product.images[0]?.alt ?? product.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            {product.discount > 0 && (
              <Badge tone="dark" className="absolute left-4 top-4">
                {product.discount}% off
              </Badge>
            )}
          </div>
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img) => (
                <div
                  key={img.url}
                  className="relative aspect-square overflow-hidden rounded-md bg-hb-cream"
                >
                  <Image src={img.url} alt={img.alt} fill className="object-cover" sizes="120px" />
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          {seller && (
            <Link
              href={`/seller/${seller.slug}`}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-hb-muted hover:text-hb-deep"
            >
              {seller.name}
              {seller.verified && " · Verified"}
            </Link>
          )}
          <h1 className="mt-2 font-serif text-3xl text-hb-deep md:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3">
            <Rating value={product.rating} count={product.reviewCount} size="md" />
          </div>
          <div className="mt-5">
            <Price
              price={product.price}
              mrp={product.mrp}
              discount={product.discount}
              size="lg"
            />
          </div>
          <p className="mt-4 text-base leading-relaxed text-hb-muted">
            {product.shortDescription}
          </p>

          <AddToCartActions product={product} />

          <div className="mt-8 rounded-lg bg-hb-cream/70 p-5 ring-1 ring-hb-border/70">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-hb-gold">
              From the Mountains
            </p>
            <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-hb-muted">Origin</dt>
                <dd className="mt-0.5 font-medium text-hb-deep">{product.origin}</dd>
              </div>
              {region && (
                <div>
                  <dt className="text-hb-muted">Region</dt>
                  <dd className="mt-0.5">
                    <Link
                      href={`/region/${region.slug}`}
                      className="font-medium text-hb-deep hover:underline"
                    >
                      {region.name}
                    </Link>
                  </dd>
                </div>
              )}
              {seller && (
                <div>
                  <dt className="text-hb-muted">Made by</dt>
                  <dd className="mt-0.5 flex items-center gap-1 font-medium text-hb-deep">
                    <Link href={`/seller/${seller.slug}`} className="hover:underline">
                      {seller.name}
                    </Link>
                    {seller.verified && (
                      <BadgeCheck className="h-4 w-4 text-hb-gold" />
                    )}
                  </dd>
                </div>
              )}
              {category && (
                <div>
                  <dt className="text-hb-muted">Category</dt>
                  <dd className="mt-0.5">
                    <Link
                      href={`/category/${category.slug}`}
                      className="font-medium text-hb-deep hover:underline"
                    >
                      {category.name}
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          <ul className="mt-6 space-y-2">
            {product.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-hb-deep">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-hb-gold" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="space-y-8">
          <section>
            <h2 className="font-serif text-2xl text-hb-deep">Description</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-hb-muted md:text-base">
              {product.description}
            </p>
          </section>
          {product.ingredients && (
            <section>
              <h2 className="font-serif text-2xl text-hb-deep">Ingredients</h2>
              <p className="mt-3 text-sm text-hb-muted">
                {product.ingredients.join(", ")}
              </p>
            </section>
          )}
          {(product.howToUse || product.storage) && (
            <section className="grid gap-6 sm:grid-cols-2">
              {product.howToUse && (
                <div>
                  <h3 className="font-medium text-hb-deep">How to use</h3>
                  <p className="mt-2 text-sm text-hb-muted">{product.howToUse}</p>
                </div>
              )}
              {product.storage && (
                <div>
                  <h3 className="font-medium text-hb-deep">Storage</h3>
                  <p className="mt-2 text-sm text-hb-muted">{product.storage}</p>
                </div>
              )}
            </section>
          )}
          <section>
            <h2 className="font-serif text-2xl text-hb-deep">Shipping & returns</h2>
            <p className="mt-3 text-sm text-hb-muted">
              Free shipping above ₹999. Easy returns within 7 days on eligible
              products. See our{" "}
              <Link href="/shipping-policy" className="underline">
                shipping
              </Link>{" "}
              and{" "}
              <Link href="/return-policy" className="underline">
                return
              </Link>{" "}
              policies.
            </p>
          </section>
          {product.faqs && product.faqs.length > 0 && (
            <section>
              <h2 className="mb-4 font-serif text-2xl text-hb-deep">FAQs</h2>
              <Accordion items={product.faqs} />
            </section>
          )}
        </div>

        {seller && (
          <aside className="h-fit rounded-lg bg-white p-6 ring-1 ring-hb-border">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-hb-gold">
              Seller
            </p>
            <Link
              href={`/seller/${seller.slug}`}
              className="mt-3 block font-serif text-2xl text-hb-deep hover:underline"
            >
              {seller.name}
            </Link>
            <p className="mt-2 flex items-center gap-1 text-sm text-hb-muted">
              <MapPin className="h-3.5 w-3.5" />
              {seller.village}, {seller.district}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-hb-muted">
              {seller.shortDescription}
            </p>
            <Link
              href={`/seller/${seller.slug}`}
              className="mt-4 inline-block text-sm font-medium text-hb-deep underline-offset-4 hover:underline"
            >
              View store →
            </Link>
          </aside>
        )}
      </div>

      {productReviews.length > 0 && (
        <section className="mt-14">
          <h2 className="font-serif text-2xl text-hb-deep">Reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {productReviews.map((r) => (
              <div
                key={r._id}
                className="rounded-lg bg-hb-cream/50 p-5 ring-1 ring-hb-border/70"
              >
                <Rating value={r.rating} />
                <p className="mt-3 text-sm text-hb-deep">“{r.comment}”</p>
                <p className="mt-2 text-xs text-hb-muted">
                  {r.userName} — {r.location}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-14">
        <h2 className="mb-6 font-serif text-2xl text-hb-deep">Related products</h2>
        <ProductGrid products={related} sellers={sellers} />
      </section>
    </div>
  );
}
