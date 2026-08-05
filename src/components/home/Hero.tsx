import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  return (
    <header className="relative bg-ink text-paper overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1530917203633-106d4a1a0967?w=2400&q=80&auto=format&fit=crop"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] opacity-55"
        />
      </div>
      <div className="hero-scrim absolute inset-0 z-[1]" />
      <div className="hero-bg-shape absolute -top-[10%] -right-[8%] w-[52%] h-[130%] z-[2]" />

      <Container>
        <div className="relative z-[2] pt-[88px] pb-[76px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-end">
          <div>
            <Eyebrow className="text-blue mb-[22px] flex items-center gap-2.5 before:content-[''] before:w-[26px] before:h-[1.5px] before:bg-blue">
              The Witsprouts Project
            </Eyebrow>
            <h1 className="font-display font-bold text-[clamp(44px,6vw,78px)] leading-[1.05] tracking-tight">
              Where Culture
              <br />
              Becomes <span className="text-blue">Power.</span>
            </h1>
            <p className="mt-[22px] text-lg leading-relaxed text-white/72 max-w-[480px]">
              To foster a deeper engagement in African arts and culture. We
              build platforms, opportunities, and communities for Africa&apos;s
              creative generation — especially those furthest from the
              mainstream.
            </p>
            <div className="flex gap-4 mt-9 flex-wrap">
              <Button href="/prize/2026" variant="solid">
                Nominate a Storyteller →
              </Button>
              <Button href="#what-we-do" variant="outline" className="border-white/50 text-white">
                See What We Do
              </Button>
            </div>
          </div>

          <div className="bg-white/6 border border-white/14 rounded-sm p-8 backdrop-blur-md">
            <p className="font-display text-xl leading-relaxed">
              &ldquo;Lasting creative change is not imposed — it is
              delicately uncovered, expressed, shared, and sustained.&rdquo;
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.06em] text-white/55 uppercase">
              The Witsprouts Project · Strategic Vision
            </p>
            <div className="flex gap-7 mt-7 pt-6 border-t border-white/14">
              <div>
                <div className="font-display text-3xl font-bold text-blue">₦500K</div>
                <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-white/50 mt-0.5">
                  Storytelling Prize
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-blue">6</div>
                <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-white/50 mt-0.5">
                  SDGs Aligned
                </div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-blue">3</div>
                <div className="font-mono text-[10px] tracking-[0.06em] uppercase text-white/50 mt-0.5">
                  2025 Partners
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
