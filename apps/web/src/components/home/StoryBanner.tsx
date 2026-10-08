import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Button } from "@/components/ui/Button";

export function StoryBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[70vh] md:min-h-[75vh]">
        <Image
          src={images.mountains}
          alt="Himalayan landscape"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-hb-deep/75 via-hb-deep/45 to-hb-deep/20" />
        <div className="container-hb relative flex min-h-[70vh] items-end py-16 md:min-h-[75vh] md:py-20">
          <div className="max-w-xl text-white">
            <p className="font-serif text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.05] tracking-[-0.03em] text-balance">
              Stories from the valleys that make these goods.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/75 md:text-base">
              Farms, kitchens, and workshops across Himachal — the people behind
              every jar and weave.
            </p>
            <Link href="/stories" className="mt-8 inline-block">
              <Button variant="gold" size="lg">
                Read stories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
