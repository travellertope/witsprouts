import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { prize2026 } from "@/lib/content/prize";

export function Hero() {
  return (
    <header className="relative bg-ink text-paper overflow-hidden">
      <div
        className="absolute -top-[20%] -right-[10%] w-[55%] h-[150%] opacity-[0.32] z-[1]"
        style={{
          background: "linear-gradient(160deg, var(--navy) 0%, var(--blue) 55%, transparent 100%)",
          clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      />
      <Container size="prize">
        <div className="relative z-[2] pt-20 pb-16 text-center">
          <Eyebrow className="text-blue mb-[22px] inline-flex items-center gap-2.5 before:content-[''] before:w-[26px] before:h-[1.5px] before:bg-blue after:content-[''] after:w-[26px] after:h-[1.5px] after:bg-blue">
            {prize2026.edition} · Nominations Open
          </Eyebrow>
          <h1 className="font-display font-bold text-[clamp(38px,6vw,68px)] leading-[1.08] tracking-tight max-w-[820px] mx-auto">
            The Witsprouts
            <br />
            Storytelling Prize
          </h1>
          <p className="mt-[22px] text-lg leading-relaxed text-white/72 max-w-[560px] mx-auto">
            Celebrating storytellers doing the work of making stories matter —
            in any form, anywhere across Africa and the diaspora.
          </p>
          <div className="flex gap-4 mt-[34px] justify-center flex-wrap">
            <Button href="#nominate-form" variant="blue">
              Nominate a Storyteller →
            </Button>
            <Button href="#spotlight" variant="white" className="border-white/50 text-white">
              Meet Our First Winner
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/12 border border-white/12 rounded-sm overflow-hidden mt-14">
            <div className="bg-white/4 py-[26px] px-[18px] text-center">
              <div className="font-display text-2xl font-bold text-blue">{prize2026.purse}</div>
              <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-white/55 mt-1.5">
                Prize Purse
              </div>
            </div>
            <div className="bg-white/4 py-[26px] px-[18px] text-center">
              <div className="font-display text-2xl font-bold text-blue">{prize2026.opensLabel}</div>
              <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-white/55 mt-1.5">
                Nominations Open
              </div>
            </div>
            <div className="bg-white/4 py-[26px] px-[18px] text-center">
              <div className="font-display text-2xl font-bold text-blue">{prize2026.closesLabel}</div>
              <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-white/55 mt-1.5">
                Nominations Close
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
