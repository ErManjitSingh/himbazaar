import Link from "next/link";
import {
  Heart,
  LogOut,
  MapPin,
  Package,
  CreditCard,
  Bell,
  LifeBuoy,
  User,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Account",
  path: "/account",
  noIndex: true,
});

const links = [
  { href: "/account/profile", label: "Profile", icon: User },
  { href: "/account/orders", label: "Orders", icon: Package },
  { href: "/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/addresses", label: "Addresses", icon: MapPin },
  { href: "/account#payments", label: "Saved payments", icon: CreditCard },
  { href: "/account#notifications", label: "Notifications", icon: Bell },
  { href: "/contact", label: "Support", icon: LifeBuoy },
];

export default function AccountPage() {
  return (
    <div className="container-hb py-8 md:py-10">
      <h1 className="font-serif text-3xl text-hb-deep md:text-4xl">Account</h1>
      <p className="mt-2 text-sm text-hb-muted">
        Mock account UI — authentication will connect later.
      </p>
      <div className="mt-8 rounded-lg bg-hb-cream/60 p-6 ring-1 ring-hb-border">
        <p className="text-xs font-semibold uppercase tracking-wider text-hb-gold">
          Guest preview
        </p>
        <p className="mt-2 font-serif text-2xl text-hb-deep">Priya Sharma</p>
        <p className="text-sm text-hb-muted">+91 98765 43210</p>
      </div>
      <ul className="mt-6 divide-y divide-hb-border rounded-lg bg-white ring-1 ring-hb-border">
        {links.map(({ href, label, icon: Icon }) => (
          <li key={label}>
            <Link
              href={href}
              className="flex items-center gap-3 px-4 py-4 text-sm font-medium text-hb-deep hover:bg-hb-cream/50"
            >
              <Icon className="h-4 w-4 text-hb-muted" />
              {label}
            </Link>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-medium text-hb-danger hover:bg-hb-cream/50"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}
