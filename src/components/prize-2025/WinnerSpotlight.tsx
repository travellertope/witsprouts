import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { finalists, winnerQuotes } from "@/lib/content/prize2025";

export function WinnerSpotlight() {
  return (
    <section className="py-20" id="winner">
      <Container size="prize">
        <div className="bg-ink text-paper grid grid-cols-1 md:grid-cols-2 gap-11 items-center p-9 md:p-16">
          <div className="relative w-full h-[280px] md:h-full md:min-h-[300px]">
            <Image
              src="/images/prize-2025/spotlight-performance.jpg"
              alt="Storytelling performance"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-[11px] tracking-[0.08em] uppercase font-bold text-blue">
              The Winner
            </div>
            <h3 className="text-[clamp(22px,2.8vw,30px)] font-bold mt-3">
              Rachel Ajisafe — &ldquo;Haunting Song of Promises&rdquo;
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/72">
              Rachel Ajisafe was named the overall winner of the inaugural
              Witsprouts Storytelling Prize for her oral performance rooted
              in the cultural heritage of Sango, delivered with energy,
              passion, and poetic flair. She received ₦500,000 as the
              inaugural prize.
            </p>
            <div className="flex gap-3 mt-6 flex-wrap">
              {finalists.map((f) => (
                <span
                  key={f.name}
                  className={`text-[13px] font-semibold px-4 py-2 border ${
                    f.winner ? "border-blue text-blue" : "border-white/25"
                  }`}
                >
                  {f.name} — {f.winner ? "Winner" : "Finalist"}
                </span>
              ))}
            </div>
            {winnerQuotes.map((q) => (
              <blockquote key={q.cite} className="border-l-2 border-blue pl-5 mt-6">
                <p className="text-lg leading-snug font-semibold">&ldquo;{q.quote}&rdquo;</p>
                <cite className="block mt-3 text-xs tracking-[0.02em] uppercase font-semibold text-white/55 not-italic">
                  {q.cite}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
