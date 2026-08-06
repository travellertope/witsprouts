import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <header className="relative h-[400px] overflow-hidden">
      <Image
        src="/images/get-involved/hero-involved.jpg"
        alt="Community raising hands at an event"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-scrim-bottom absolute inset-0" />
      <Container size="prize" className="relative z-[2] h-full flex flex-col justify-end pb-[52px]">
        <h1 className="text-white font-extrabold text-[clamp(34px,5vw,56px)] leading-[1.12] tracking-tight max-w-[680px]">
          There&apos;s A Place For You Here
        </h1>
        <p className="text-white/85 mt-3.5 text-base leading-relaxed max-w-[520px]">
          The Witsprouts Project grows through the people, organisations, and
          communities who choose to build with us. Find your pathway below.
        </p>
      </Container>
    </header>
  );
}
