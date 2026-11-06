import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <header className="relative h-[460px] overflow-hidden">
      <Image
        src="/images/prize/hero-prize.jpg"
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
        <h1 className="text-white font-extrabold text-[clamp(34px,5vw,58px)] leading-[1.12] tracking-tight max-w-[720px]">
          The Witsprouts
          <br />
          Storytelling Prize
        </h1>
        <p className="text-white/85 mt-4 text-base leading-relaxed max-w-[520px]">
          Celebrating storytellers doing the work of making stories matter —
          in any form, anywhere across Africa and the diaspora.
        </p>
        <div className="flex gap-3.5 mt-7 justify-center flex-wrap">
          <Button href="#dates" variant="blue">
            See Key Dates →
          </Button>
          <Button href="#spotlight" variant="white">
            Meet Our First Winner
          </Button>
        </div>
      </Container>
    </header>
  );
}
