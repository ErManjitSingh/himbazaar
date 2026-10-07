import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ProductGrid } from "@/components/product/ProductGrid";
import { articleJsonLd, buildMetadata } from "@/lib/seo";
import {
  getProductsByIds,
  getSellers,
  getStoryBySlug,
} from "@/services";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);
  if (!story) return {};
  return buildMetadata({
    title: story.title,
    description: story.excerpt,
    path: `/stories/${story.slug}`,
    image: story.image.url,
    type: "article",
  });
}

export default async function StoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);
  if (!story) notFound();

  const [related, sellers] = await Promise.all([
    getProductsByIds(story.relatedProductIds),
    getSellers(),
  ]);

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: story.title,
              excerpt: story.excerpt,
              image: story.image.url,
              author: story.author,
              publishedAt: story.publishedAt,
              slug: story.slug,
            })
          ),
        }}
      />
      <div className="relative h-64 md:h-[420px]">
        <Image
          src={story.image.url}
          alt={story.image.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hb-deep/45" />
      </div>
      <div className="container-hb py-8 md:py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Stories", href: "/stories" },
            { label: story.title },
          ]}
        />
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-hb-gold">
          {story.category}
        </p>
        <h1 className="mt-3 max-w-3xl font-serif text-3xl text-hb-deep md:text-5xl">
          {story.title}
        </h1>
        <p className="mt-4 text-sm text-hb-muted">
          By {story.author} · {story.readTime} min read ·{" "}
          {new Date(story.publishedAt).toLocaleDateString("en-IN", {
            dateStyle: "medium",
          })}
        </p>
        <div className="prose prose-neutral mt-8 max-w-3xl text-base leading-relaxed text-hb-muted">
          {story.content.split("\n\n").map((para) => (
            <p key={para.slice(0, 24)} className="mb-4">
              {para}
            </p>
          ))}
        </div>
        {story.relatedSellerId && (
          <p className="mt-6 text-sm">
            <Link href="/stories" className="text-hb-deep underline-offset-4 hover:underline">
              More stories →
            </Link>
          </p>
        )}
        {related.length > 0 && (
          <section className="mt-12">
            <h2 className="font-serif text-2xl text-hb-deep">Related products</h2>
            <div className="mt-6">
              <ProductGrid products={related} sellers={sellers} />
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
