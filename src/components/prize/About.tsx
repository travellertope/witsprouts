import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

export function About() {
  return (
    <section className="py-[88px]" id="about">
      <Container size="prize">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="flex-none w-full md:w-[420px] lg:w-[480px]">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src="/images/about-storyteller.jpg"
                alt="A storyteller at work in a podcast studio"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <SectionHead title="About the Prize" align="left" compact />
            <p className="text-[15.5px] leading-loose text-ink-soft">
              The Witsprouts Storytelling Prize was launched to acknowledge and
              amplify the voices of storytellers who are reinventing the way
              stories are told. It exists to revive the art of oral storytelling
              while celebrating and rewarding exceptional storytelling talent.
            </p>
            <blockquote className="border-l-2 border-ochre pl-5 my-[26px]">
              <p className="text-lg leading-snug font-semibold">
                &ldquo;Storytelling is one of the most powerful tools we have, and
                it is evolving. Contemporary griots, creative podcasters, spoken
                word artists, animators, voice-over artists, and everyone
                involved in the art of storytelling are carrying something
                important forward. The Witsprouts Storytelling Prize exists to
                make sure those voices are encouraged, celebrated, and
                supported.&rdquo;
              </p>
              <cite className="block mt-3 text-xs tracking-[0.02em] uppercase font-semibold text-ink-soft not-italic">
                Tope Akintayo, Director, The Witsprouts Project
              </cite>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
