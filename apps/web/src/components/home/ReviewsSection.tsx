import { reviews } from "@/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Rating } from "@/components/ui/Rating";

export function ReviewsSection() {
  const featured = reviews.slice(0, 6);

  return (
    <section className="section-pad">
      <div className="container-hb">
        <SectionHeading
          eyebrow="Loved across India"
          title="What customers say"
          description="Real words from people who brought a piece of Himachal home."
          align="center"
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((review) => (
            <blockquote
              key={review._id}
              className="flex flex-col rounded-lg bg-white p-6 ring-1 ring-hb-border/80"
            >
              <Rating value={review.rating} />
              <p className="mt-4 flex-1 text-base leading-relaxed text-hb-deep">
                “{review.comment}”
              </p>
              <footer className="mt-5 text-sm text-hb-muted">
                <span className="font-medium text-hb-deep">{review.userName}</span>
                {" — "}
                {review.location}
                <span className="mt-1 block text-xs">
                  Purchased {review.productName}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
