import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-hb flex flex-col items-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hb-gold">
        404
      </p>
      <h1 className="mt-3 font-serif text-3xl text-hb-deep md:text-4xl">
        This path disappears into the mist
      </h1>
      <p className="mt-3 max-w-md text-sm text-hb-muted">
        The page you&apos;re looking for isn&apos;t here. Head back to the marketplace.
      </p>
      <Link href="/" className="mt-8">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
}
