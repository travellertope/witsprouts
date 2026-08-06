import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <header className="relative h-[400px] overflow-hidden">
      <Image
        src="/images/what-we-do/hero-whatwedo.jpg"
        alt="Mentorship session"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-scrim-bottom absolute inset-0" />
      <Container size="prize" className="relative z-[2] h-full flex flex-col justify-end pb-[52px]">
        <div className="text-white/90 mb-3.5 text-[13px] tracking-[0.1em] uppercase font-bold">
          What We Do
        </div>
        <h1 className="text-white font-extrabold text-[clamp(34px,5vw,56px)] leading-[1.12] tracking-tight max-w-[680px]">
          Everything We Build Serves One Of Five Pillars
        </h1>
        <p className="text-white/85 mt-3.5 text-base leading-relaxed max-w-[520px]">
          Our programming is deliberately structured — each pillar reinforces
          the others, so participation in one naturally opens the door to
          the next.
        </p>
      </Container>
    </header>
  );
}
