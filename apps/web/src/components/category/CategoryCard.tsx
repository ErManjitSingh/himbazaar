import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/types";
import { cn } from "@/lib/utils";

export function CategoryCard({
  category,
  className,
}: {
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className={cn(
        "group relative block overflow-hidden rounded-lg bg-hb-cream ring-1 ring-hb-border/70 card-lift",
        className
      )}
    >
      <div className="relative aspect-[5/4]">
        <Image
          src={category.image.url}
          alt={category.image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-hb-deep/80 via-hb-deep/20 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
        <h3 className="font-medium text-white">{category.name}</h3>
        <p className="mt-0.5 line-clamp-1 text-xs text-white/80">
          {category.shortDescription}
        </p>
        <p className="mt-1 text-[11px] uppercase tracking-wider text-hb-gold">
          {category.productCount} products
        </p>
      </div>
    </Link>
  );
}
