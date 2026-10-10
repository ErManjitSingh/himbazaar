import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden md:min-h-[78vh]">
      <Image
        src={images.hero}
        alt="Daylight over Himalayan valleys"
        fill
        priority
        sizes="100vw"
        className="object-cover animate-hero-ken"
      />
      <div className="hero-overlay absolute inset-0" />

      <div className="container-hb relative flex min-h-[72vh] flex-col justify-end pb-12 pt-24 md:min-h-[78vh] md:justify-center md:pb-16">
        <div className="max-w-2xl text-white">
          <p className="animate-fade-up font-serif text-[clamp(2.75rem,9vw,5.5rem)] leading-[0.95] tracking-[-0.03em]">
            HimBazaar
          </p>
          <h1 className="mt-4 max-w-lg animate-fade-up-delay text-lg font-medium leading-snug text-white/95 sm:text-xl md:text-2xl">
            Shop authentic Himalayan food, wool & craft
          </h1>
          <p className="mt-3 max-w-md animate-fade-up-delay text-sm leading-relaxed text-white/75 md:text-base">
            Honey, ghee, spices, shawls — from verified Himachali sellers, delivered pan-India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up-late">
            <Link href="/shop">
              <Button variant="gold" size="lg">
                Shop products
              </Button>
            </Link>
            <Link href="/shop?sort=rating">
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 bg-white/5 text-white hover:border-white hover:bg-white/15"
              >
                Best sellers
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
