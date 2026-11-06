import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <header className="relative h-[420px] overflow-hidden">
      <Image
        src="/images/prize-2025/hero-2025.jpg"
        alt="Storytelling performance"
        fill
        priority
        sizes="100vw"
        className="object-cover grayscale-[15%]"
      />
      <div className="hero-scrim-center absolute inset-0" />
      <Container
        size="prize"
        className="relative z-[2] h-full flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-white font-bold text-[clamp(32px,4.8vw,54px)] leading-[1.12] tracking-tight max-w-[720px]">
          The Inaugural Witsprouts Storytelling Prize
        </h1>
        <p className="text-white/85 mt-3.5 text-base leading-relaxed max-w-[540px]">
          A look back at the edition that started it all — where the
          Witsprouts Storytelling Prize first set out to revive oral
          storytelling and reward exceptional talent.
        </p>
        <p className="mt-5 text-sm text-white/70 italic">
          Theme: &ldquo;Rebooting Legends and Memories&rdquo;
        </p>
      </Container>
    </header>
  );
}
