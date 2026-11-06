import Image from "next/image";
import { Container } from "@/components/ui/Container";

const images = [
  { src: "/images/home/what-community.jpg", alt: "Community gathering", tall: true },
  { src: "/images/about/about-story-1.jpg", alt: "Creative professionals at work" },
  { src: "/images/about/about-story-2.jpg", alt: "Portrait of a creative" },
  { src: "/images/home/what-audience.jpg", alt: "Audience at a cultural event" },
];

export function OurStory() {
  return (
    <section className="py-[88px]" id="story">
      <Container size="prize">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-bold text-[clamp(28px,3.4vw,42px)] leading-[1.12] tracking-tight">
              Why Witsprouts
            </h2>
          </div>
          <div>
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
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
