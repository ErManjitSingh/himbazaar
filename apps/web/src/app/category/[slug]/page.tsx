import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductGrid } from "@/components/product/ProductGrid";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { getCategoryBySlug, getProducts, getSellers } from "@/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return {};
  return buildMetadata({
    title: category.name,
    description: category.description,
    path: `/category/${category.slug}`,
    image: category.image.url,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const [result, sellers] = await Promise.all([
    getProducts({ category: category._id, limit: 48 }),
    getSellers(),
  ]);

  return (
    <div className="container-hb py-8 md:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: category.name, path: `/category/${category.slug}` },
            ])
          ),
        }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: category.name },
        ]}
      />
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">
        {category.name}
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-hb-muted md:text-base">
        {category.description}
      </p>
      <p className="mt-2 text-sm text-hb-muted">{result.total} products</p>
      <div className="mt-8">
        <ProductGrid products={result.data} sellers={sellers} />
      </div>
    </div>
  );
}
