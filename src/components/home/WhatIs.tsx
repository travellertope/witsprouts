import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

const images = [
  { src: "/images/home/what-community.jpg", alt: "Community arts gathering", tall: true },
  { src: "/images/home/what-mentorship.jpg", alt: "Mentorship session" },
  { src: "/images/home/what-studio.jpg", alt: "Creative studio work" },
  { src: "/images/home/what-podcast.jpg", alt: "Podcast recording" },
  { src: "/images/home/what-audience.jpg", alt: "Audience at event" },
];

export function WhatIs() {
  return (
    <section className="bg-ink text-paper py-24" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Eyebrow className="text-white/60 mb-4">Our Story</Eyebrow>
            <h2 className="font-extrabold text-[clamp(28px,3.4vw,42px)] leading-[1.12] tracking-tight">
              What Is The
              <br />
              Witsprouts Project?
            </h2>
          </div>
          <div>
            <p className="text-[15.5px] leading-loose text-white/70 mb-[18px]">
              We believe arts and culture are not a luxury sitting outside
              development — they are development. A community that can tell
              its own stories, celebrate its own heritage, and build
              livelihoods from its own creativity is a community building
              real, lasting resilience.
            </p>
            <p className="text-[15.5px] leading-loose text-white/70 mb-[18px]">
              Starting from a base in Lagos and Abuja, we&apos;re building a
              model that can travel — first across Nigeria, then across West
              Africa, and outward to the wider African diaspora.
            </p>
            <Button href="#contact" variant="white" className="mt-2">
              Get Involved →
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-14">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative overflow-hidden ${
                img.tall ? "row-span-2 h-[318px]" : "h-[150px]"
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
