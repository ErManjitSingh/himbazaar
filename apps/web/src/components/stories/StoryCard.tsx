import Image from "next/image";
import Link from "next/link";
import type { Story } from "@/types";
import { cn } from "@/lib/utils";

export function StoryCard({
  story,
  className,
}: {
  story: Story;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg bg-white ring-1 ring-hb-border/80 card-lift",
        className
      )}
    >
      <Link href={`/stories/${story.slug}`} className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={story.image.url}
          alt={story.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-hb-gold">
          {story.category}
        </p>
        <Link href={`/stories/${story.slug}`}>
          <h3 className="mt-2 font-serif text-xl leading-snug text-hb-deep group-hover:underline">
            {story.title}
          </h3>
        </Link>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-hb-muted">
          {story.excerpt}
        </p>
        <Link
          href={`/stories/${story.slug}`}
          className="mt-4 text-sm font-medium text-hb-deep underline-offset-4 hover:underline"
        >
          Read story →
        </Link>
      </div>
    </article>
  );
}
