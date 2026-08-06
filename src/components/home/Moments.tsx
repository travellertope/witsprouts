import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { moments } from "@/lib/content/home";

export function Moments() {
  return (
    <section className="bg-ink text-paper py-24">
      <Container>
        <div className="mb-11">
          <h2 className="font-extrabold text-[clamp(28px,3.4vw,42px)] leading-[1.12] tracking-tight">
            Witsprouts Moments
          </h2>
        </div>
        <div className="moments-scroller flex gap-5 overflow-x-auto pb-2">
          {moments.map((moment) => (
            <div key={moment.title} className="flex-none w-[300px] cursor-pointer group">
              <div className="aspect-[4/3] overflow-hidden relative bg-mist">
                <Image
                  src={moment.thumbnail}
                  alt={moment.title}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-400 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="w-[50px] h-[50px] rounded-full bg-white/92 flex items-center justify-center text-[15px] text-ink">
                    ▶
                  </span>
                </div>
              </div>
              <div className="text-[15.5px] font-bold mt-3.5 leading-snug">{moment.title}</div>
              <div className="text-xs text-white/50 mt-2">{moment.meta}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
