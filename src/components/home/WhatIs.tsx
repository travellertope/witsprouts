import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const images = [
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=700&q=80&auto=format&fit=crop",
    alt: "Community arts gathering",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&q=80&auto=format&fit=crop",
    alt: "Creative workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80&auto=format&fit=crop",
    alt: "Mentorship session",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&q=80&auto=format&fit=crop",
    alt: "Performance arts",
  },
  {
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=500&q=80&auto=format&fit=crop",
    alt: "Festival crowd",
  },
];

export function WhatIs() {
  return (
    <section className="bg-ink text-paper py-[104px]" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow className="mb-[18px]">Our Story</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(28px,3.6vw,44px)] leading-[1.08] tracking-tight">
              What Is The
              <br />
              Witsprouts Project?
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-white/75 mb-5">
              We believe arts and culture are not a luxury sitting outside
              development — they are development. A community that can tell
              its own stories, celebrate its own heritage, and build
              livelihoods from its own creativity is a community building
              real, lasting resilience.
            </p>
            <p className="text-base leading-relaxed text-white/75 mb-5">
              Starting from a base in Lagos and Abuja, we&apos;re building a
              model that can travel — first across Nigeria, then across West
              Africa, and outward to the wider African diaspora.
            </p>
            <Button href="#contact" variant="white" className="mt-3">
              Get Involved →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3.5 mt-16">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative rounded-sm overflow-hidden ${
                img.tall ? "row-span-2 h-[322px]" : "h-[150px]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
