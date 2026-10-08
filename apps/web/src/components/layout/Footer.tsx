import Link from "next/link";
import { Logo } from "./Logo";
import { NewsletterForm } from "@/components/home/NewsletterForm";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "All products", href: "/shop" },
      { label: "Honey", href: "/category/honey" },
      { label: "Ghee & Dairy", href: "/category/ghee-dairy" },
      { label: "Wool & Shawls", href: "/category/wool-shawls" },
      { label: "Gift hampers", href: "/collection/himachali-gifting" },
    ],
  },
  {
    title: "Discover Himachal",
    links: [
      { label: "Regions", href: "/region/kullu" },
      { label: "Stories", href: "/stories" },
      { label: "Meet the makers", href: "/sell-on-himbazaar" },
      { label: "Collections", href: "/collection/taste-of-himachal" },
    ],
  },
  {
    title: "For Sellers",
    links: [
      { label: "Sell on HimBazaar", href: "/sell-on-himbazaar" },
      { label: "Seller stories", href: "/stories" },
      { label: "Verification", href: "/sell-on-himbazaar#verification" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Track order", href: "/track-order" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping", href: "/shipping-policy" },
      { label: "Returns", href: "/return-policy" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-hb-deep text-white">
      <div className="container-hb section-pad">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/65">
              India&apos;s marketplace for authentic Himalayan &amp; Himachali
              products — straight from the mountains to your home.
            </p>
            <div className="mt-6 max-w-sm">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                Newsletter
              </p>
              <NewsletterForm />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-white/45">
                  {col.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/65 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HimBazaar. Made with care in India.</p>
          <p>Made in Himachal. Loved across India.</p>
        </div>
      </div>
    </footer>
  );
}
