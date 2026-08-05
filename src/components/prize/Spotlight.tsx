import { Container } from "@/components/ui/Container";

export function Spotlight() {
  return (
    <section className="py-24" id="spotlight">
      <Container size="prize">
        <div
          className="spotlight relative overflow-hidden rounded-lg p-14 text-paper"
          style={{ background: "linear-gradient(150deg, var(--blue-deep) 0%, var(--ink) 65%)" }}
        >
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase font-bold text-blue">
            2025 Spotlight · Our First Winner
          </div>
          <h3 className="font-display font-bold text-[clamp(24px,3.2vw,34px)] mt-3.5 max-w-[600px]">
            Rachel Ajisafe — &ldquo;Haunting Song of Promises&rdquo;
          </h3>
          <p className="mt-[18px] text-[15px] leading-relaxed text-white/75 max-w-[640px]">
            Rachel Ajisafe was named the overall winner of the inaugural
            Witsprouts Storytelling Prize 2025 for her oral performance
            rooted in the cultural heritage of Sango, delivered with energy,
            passion, and poetic flair. She was selected from a shortlist of
            three finalists — Debbie Ajom, Keesh Rowland, and Rachel Ajisafe —
            and received ₦500,000 as the inaugural prize.
          </p>
          <blockquote className="border-l-2 border-blue pl-[22px] mt-7">
            <p className="font-display text-lg leading-snug font-medium">
              &ldquo;A natural storyteller with a poetic flair — she moved
              beyond mere recitation to create a performance that truly
              embodied the spirit of African storytelling.&rdquo;
            </p>
            <cite className="block mt-3.5 font-mono text-[11px] tracking-[0.05em] uppercase text-white/55 not-italic">
              Jude Idada & Akanbi Taofeek, 2025 Judges
            </cite>
          </blockquote>
          <blockquote className="border-l-2 border-blue pl-[22px] mt-7">
            <p className="font-display text-lg leading-snug font-medium">
              &ldquo;Rachel Ajisafe&apos;s victory is a testament to the
              enduring power and relevance of African oral storytelling in
              the modern age. She embodies our mission to connect the wisdom
              of our ancestors with the creativity of the next
              generation.&rdquo;
            </p>
            <cite className="block mt-3.5 font-mono text-[11px] tracking-[0.05em] uppercase text-white/55 not-italic">
              Tope Akintayo, Director, The Witsprouts Project
            </cite>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
