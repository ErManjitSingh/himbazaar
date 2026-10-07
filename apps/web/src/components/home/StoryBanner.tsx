import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function StoryBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[420px] md:min-h-[480px]">
        <Image
          src={images.mountains}
          alt="Himalayan landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-hb-deep/70" />
        <div className="container-hb relative flex min-h-[420px] items-center py-16 md:min-h-[480px]">
          <div className="max-w-2xl text-white">
            <h2 className="font-serif text-3xl leading-tight text-balance md:text-5xl">
              More Than Products.
              <br />
              These Are Stories From the Mountains.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
              From small farms and family kitchens to skilled artisans and
              mountain workshops, every product carries a piece of Himachal with
              it.
            </p>
            <Link href="/stories" className="mt-8 inline-block">
              <Button variant="gold" size="lg">
                Read the stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
