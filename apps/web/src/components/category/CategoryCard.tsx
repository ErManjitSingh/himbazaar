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
      className={cn("group block", className)}
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-hb-cream">
        <Image
          src={category.image.url}
          alt={category.image.alt}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-3">
        <h3 className="font-medium text-hb-deep">{category.name}</h3>
        <p className="mt-0.5 text-xs text-hb-muted">
          {category.productCount} products
        </p>
      </div>
    </Link>
  );
}
