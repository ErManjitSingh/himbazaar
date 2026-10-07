import { WHY_HIMBAZAAR } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyHimBazaar() {
  return (
    <section className="section-pad bg-hb-cream/50">
      <div className="container-hb">
        <SectionHeading
          eyebrow="Why HimBazaar"
          title="Built on trust from the mountains"
          description="Every purchase supports local Himachali makers — and every product is chosen for authenticity."
          align="center"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_HIMBAZAAR.map((item, i) => (
            <div
              key={item.title}
              className="rounded-lg bg-white p-6 ring-1 ring-hb-border/80"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-hb-gold">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-serif text-xl text-hb-deep">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-hb-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
