import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <header className="relative h-[420px] overflow-hidden">
      <Image
        src="/images/about/about-hero.jpg"
        alt="Storytelling event microphone"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-scrim-bottom absolute inset-0" />
      <Container size="prize" className="relative z-[2] h-full flex flex-col justify-end pb-[52px]">
        <h1 className="text-white font-extrabold text-[clamp(34px,5vw,56px)] leading-[1.12] tracking-tight max-w-[680px]">
          Building The Infrastructure For Africa&apos;s Creative Generation
        </h1>
        <p className="text-white/85 mt-3.5 text-base leading-relaxed max-w-[520px]">
          The Witsprouts Project exists because talent is everywhere, but
          platforms, mentorship, and funding are not. We close that gap.
        </p>
      </Container>
    </header>
  );
}
