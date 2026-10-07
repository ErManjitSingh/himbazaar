import { buildMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "Addresses",
  path: "/account/addresses",
  noIndex: true,
});

export default function AddressesPage() {
  return (
    <div className="container-hb py-8 md:py-10">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-serif text-3xl text-hb-deep">Addresses</h1>
        <Button type="button" variant="outline" size="sm">
          Add address
        </Button>
      </div>
      <div className="mt-8 max-w-md rounded-lg bg-white p-5 ring-1 ring-hb-border">
        <p className="text-xs font-semibold uppercase tracking-wider text-hb-gold">
          Default · Home
        </p>
        <p className="mt-2 font-medium text-hb-deep">Priya Sharma</p>
        <p className="mt-1 text-sm leading-relaxed text-hb-muted">
          42 Cedar Lane, Sector 17
          <br />
          Chandigarh, Chandigarh 160017
          <br />
          +91 98765 43210
        </p>
      </div>
    </div>
  );
}
