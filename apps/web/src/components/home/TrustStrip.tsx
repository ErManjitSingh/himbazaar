const items = [
  "Authentic Himalayan origin",
  "Verified local sellers",
  "Quality checked",
  "Free shipping above ₹999",
];

export function TrustStrip() {
  return (
    <section className="border-b border-hb-border bg-hb-cream/50">
      <div className="container-hb flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-center md:justify-between md:py-5">
        {items.map((label) => (
          <p
            key={label}
            className="text-[11px] font-medium uppercase tracking-[0.16em] text-hb-muted md:text-xs"
          >
            {label}
          </p>
        ))}
      </div>
    </section>
  );
}
