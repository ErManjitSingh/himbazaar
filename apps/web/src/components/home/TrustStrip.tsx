import { Leaf, ShieldCheck, Truck, BadgeCheck } from "lucide-react";

const items = [
  { icon: Leaf, label: "Authentic Himalayan origin" },
  { icon: BadgeCheck, label: "Verified local sellers" },
  { icon: ShieldCheck, label: "Quality checked" },
  { icon: Truck, label: "Free shipping above ₹999" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-hb-border bg-hb-cream/70">
      <div className="container-hb grid grid-cols-2 gap-4 py-5 md:grid-cols-4 md:gap-6 md:py-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-hb-deep ring-1 ring-hb-border">
              <Icon className="h-4 w-4" />
            </span>
            <p className="text-xs font-medium leading-snug text-hb-deep md:text-sm">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
