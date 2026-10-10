import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function StoryBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[380px] md:min-h-[420px]">
        <Image
          src={images.mountains}
          alt="Himalayan landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hb-deep/70" />
        <div className="container-hb relative flex min-h-[380px] items-center py-14 md:min-h-[420px]">
          <div className="max-w-xl text-white">
            <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-balance md:text-4xl">
              Know the makers behind every product
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
              From village kitchens to valley farms — stories that make shopping
              on HimBazaar feel personal.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/stories">
                <Button variant="gold" size="lg">
                  Read stories
                </Button>
              </Link>
              <Link href="/shop">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  Continue shopping
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
