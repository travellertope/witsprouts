import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Spotlight() {
  return (
    <section className="bg-mist py-[88px]" id="spotlight">
      <Container size="prize">
        <div className="bg-ink text-paper grid grid-cols-1 md:grid-cols-2 gap-11 items-center p-9 md:p-16">
          <div className="relative w-full h-[280px] md:h-full md:min-h-[280px]">
            <Image
              src="/images/prize/spotlight-performance.jpg"
              alt="Storytelling performance"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-blue">
              2025 Spotlight · Our First Winner
            </div>
            <h3 className="text-[clamp(22px,2.8vw,30px)] font-bold mt-3">
              Rachel Ajisafe — &ldquo;Haunting Song of Promises&rdquo;
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/72">
              Rachel Ajisafe was named the overall winner of the inaugural
              Witsprouts Storytelling Prize 2025 for her oral performance
              rooted in the cultural heritage of Sango, delivered with
              energy, passion, and poetic flair. She was selected from a
              shortlist of three finalists — Debbie Ajom, Keesh Rowland, and
              Rachel Ajisafe — and received ₦500,000 as the inaugural prize.
            </p>
            <blockquote className="border-l-2 border-blue pl-5 mt-[26px]">
              <p className="text-lg leading-snug font-semibold">
                &ldquo;A natural storyteller with a poetic flair — she moved
                beyond mere recitation to create a performance that truly
                embodied the spirit of African storytelling.&rdquo;
              </p>
              <cite className="block mt-3 text-xs tracking-[0.02em] uppercase font-semibold text-white/55 not-italic">
                Jude Idada &amp; Akanbi Taofeek, 2025 Judges
              </cite>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
