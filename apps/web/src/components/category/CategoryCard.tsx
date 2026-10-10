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
        "group flex flex-col overflow-hidden border border-hb-border bg-white transition hover:border-hb-deep/30",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-hb-cream">
        <Image
          src={category.image.url}
          alt={category.image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="p-3 text-center">
        <h3 className="text-sm font-semibold text-hb-deep">{category.name}</h3>
        <p className="mt-0.5 text-[11px] text-hb-muted">
          {category.productCount} products
        </p>
      </div>
    </Link>
  );
}
