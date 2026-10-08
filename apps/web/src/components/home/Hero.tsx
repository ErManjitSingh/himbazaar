import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <Image
        src={images.landscapeLahaul}
        alt="High Himalayan ridge under soft mountain light"
        fill
        priority
        sizes="100vw"
        className="object-cover animate-hero-ken"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="container-hb relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
        <div className="max-w-3xl text-white">
          <p className="animate-fade-up font-serif text-[clamp(3.25rem,12vw,7.5rem)] leading-[0.92] tracking-[-0.03em]">
            HimBazaar
          </p>
          <h1 className="mt-5 max-w-xl animate-fade-up-delay font-sans text-lg font-medium leading-snug text-white/95 sm:text-xl md:text-2xl">
            Authentic goods from Himachal, shipped to your door.
          </h1>
          <p className="mt-3 max-w-md animate-fade-up-delay text-sm leading-relaxed text-white/70 md:text-base">
            Honey, ghee, wool, and craft — sourced from the valleys that make them.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-late">
            <Link href="/shop">
              <Button variant="gold" size="lg">
                Shop now
              </Button>
            </Link>
            <Link href="/region/kullu">
              <Button
                variant="outline"
                size="lg"
                className="border-white/35 text-white hover:border-white hover:bg-white/10"
              >
                Explore regions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
