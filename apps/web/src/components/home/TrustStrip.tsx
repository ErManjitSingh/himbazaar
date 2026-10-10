import { BadgeCheck, Leaf, ShieldCheck, Truck } from "lucide-react";

const items = [
  { icon: Leaf, label: "Authentic Himalayan origin" },
  { icon: BadgeCheck, label: "Verified local sellers" },
  { icon: ShieldCheck, label: "Quality checked" },
  { icon: Truck, label: "Free shipping above ₹999" },
];

export function TrustStrip() {
  return (
    <section className="border-b border-hb-border bg-white">
      <div className="container-hb grid grid-cols-2 gap-4 py-4 md:grid-cols-4 md:gap-6 md:py-5">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon className="h-4 w-4 shrink-0 text-hb-deep" aria-hidden />
            <p className="text-xs font-medium leading-snug text-hb-deep md:text-[13px]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
