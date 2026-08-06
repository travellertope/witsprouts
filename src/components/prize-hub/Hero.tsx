import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <header className="relative h-[420px] overflow-hidden">
      <Image
        src="/images/prize-hub/hero-prize-hub.jpg"
        alt="Storytelling performance"
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
        <div className="text-white/90 mb-4 text-[13px] tracking-[0.1em] uppercase font-bold">
          An Annual Witsprouts Project Initiative
        </div>
        <h1 className="text-white font-extrabold text-[clamp(34px,5vw,58px)] leading-[1.12] tracking-tight max-w-[720px]">
          The Witsprouts Storytelling Prize
        </h1>
        <p className="text-white/85 mt-4 text-base leading-relaxed max-w-[560px]">
          An annual prize reviving the art of oral storytelling — celebrating
          storytellers who bring narrative traditions to life for a new
          generation, in every form they take.
        </p>
        <div className="flex gap-3.5 mt-7 justify-center flex-wrap">
          <Button href="/prize/2026" variant="blue">
            See the Current Edition →
          </Button>
          <Button href="#archive" variant="white">
            Browse Past Editions
          </Button>
        </div>
      </Container>
    </header>
  );
}
