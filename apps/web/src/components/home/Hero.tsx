import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden md:min-h-[85vh]">
      <Image
        src={images.hero}
        alt="Himalayan mountains at soft warm light"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="container-hb relative flex min-h-[78vh] flex-col justify-end pb-14 pt-24 md:min-h-[85vh] md:justify-center md:pb-20 md:pt-28">
        <div className="max-w-xl animate-fade-up text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-hb-gold">
            Straight from the mountains
          </p>
          <h1 className="font-serif text-4xl leading-[1.1] text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            From the Himalayas
            <br />
            to Your Home
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/85 md:text-lg animate-fade-up-delay">
            Discover authentic products made, grown and crafted in the mountains
            of Himachal Pradesh.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-delay">
            <Link href="/shop">
              <Button variant="gold" size="lg">
                Shop Himalayan Products
              </Button>
            </Link>
            <Link href="/region/kullu">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:border-white hover:bg-white/10"
              >
                Explore by Region
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
