import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function OurStory() {
  return (
    <section className="py-[88px]" id="story">
      <Container size="prize">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] w-full">
            <Image
              src="/images/about/about-why.webp"
              alt="Why Witsprouts"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="font-bold text-[clamp(28px,3.4vw,42px)] leading-[1.12] tracking-tight mb-6">
              Why Witsprouts
            </h2>
            <p className="text-[15.5px] leading-loose text-ink-soft mb-4">
              Witsprouts began in 2018 as a personal development platform
              founded by Tope Akintayo, and grew into a storytelling and
              publishing home under Witsprouts Global Ltd. Since the
              beginning, one line has held true across everything the
              Witsprouts name has touched: to foster a deeper engagement in
              African arts and culture.
            </p>
            <p className="text-[15.5px] leading-loose text-ink-soft mb-4">
              The Witsprouts Project (The Witsprouts Arts &amp; Culture
              Empowerment Initiative) was founded to carry that same purpose
              into structured, on-the-ground programming — giving Africa&apos;s
              emerging creatives the platforms, skills, and networks that
              formal systems too often withhold, particularly for those in
              underserved and low-income communities.
            </p>
            <p className="text-[15.5px] leading-loose text-ink-soft">
              Starting from a base in Lagos and Abuja, we&apos;re building a
              model that can travel — first across Nigeria, then across West
              Africa, and outward to the wider African diaspora.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
