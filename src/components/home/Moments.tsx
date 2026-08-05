import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { moments } from "@/lib/content/home";

export function Moments() {
  return (
    <section className="bg-ink text-paper py-[104px]">
      <Container>
        <div className="mb-12">
          <Eyebrow className="text-blue">Storytelling Moments</Eyebrow>
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,46px)] leading-[1.08] tracking-tight mt-3.5">
            Witsprouts Moments
          </h2>
        </div>
        <div className="moments-scroller flex gap-5 overflow-x-auto pb-2">
          {moments.map((moment) => (
            <div key={moment.title} className="flex-none w-[300px] cursor-pointer group">
              <div className="aspect-[4/3] rounded-sm overflow-hidden relative bg-mist-2">
                <Image
                  src={moment.thumbnail}
                  alt={moment.title}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-[52px] h-[52px] rounded-full bg-white/90 flex items-center justify-center text-base text-ink">
                    ▶
                  </span>
                </div>
              </div>
              <div className="font-display text-base font-semibold mt-3.5 leading-snug">
                {moment.title}
              </div>
              <div className="font-mono text-[11px] text-white/50 mt-2 tracking-[0.04em]">
                {moment.meta}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
