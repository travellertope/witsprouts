import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function LonglistHero() {
  return (
    <header className="relative h-[400px] overflow-hidden">
      <Image
        src="/images/prize/hero-prize.jpg"
        alt="Witsprouts Storytelling Prize 2026"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-scrim-center absolute inset-0" />
      <Container
        size="prize"
        className="relative z-[2] h-full flex flex-col justify-center items-center text-center"
      >
        <div className="inline-flex items-center gap-2 text-xs tracking-[0.08em] uppercase font-bold text-blue mb-4">
          2026 Storytelling Prize · Longlist
        </div>
        <h1 className="text-white font-extrabold text-[clamp(32px,4.8vw,54px)] leading-[1.12] tracking-tight max-w-[720px]">
          The 2026 Longlist
        </h1>
        <p className="text-white/85 mt-4 text-base leading-relaxed max-w-[520px]">
          Nine storytellers from across Nigeria and the diaspora,
          nominated for the 2nd edition of the Witsprouts Storytelling Prize.
        </p>
      </Container>
    </header>
  );
}
