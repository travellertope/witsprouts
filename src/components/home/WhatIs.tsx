import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function WhatIs() {
  return (
    <section className="bg-ink text-paper py-24" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative overflow-hidden h-[320px] lg:h-[440px]">
            <Image
              src="/images/home/what-community.jpg"
              alt="Community arts gathering"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-extrabold text-[clamp(22px,2.2vw,28px)] leading-[1.15] tracking-tight mb-5">
              What Is The Witsprouts Project?
            </h2>
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
            <Button href="/get-involved" variant="white" className="mt-2">
              Get Involved →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
