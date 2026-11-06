import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <header className="relative h-[340px] overflow-hidden">
      <Image
        src="/images/contact/hero-contact.jpg"
        alt="Team collaborating"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-scrim-bottom absolute inset-0" />
      <Container size="prize" className="relative z-[2] h-full flex flex-col justify-end pb-11">
        <h1 className="text-white font-bold text-[clamp(32px,4.6vw,50px)] leading-[1.12] tracking-tight max-w-[600px]">
          Let&apos;s Talk
        </h1>
        <p className="text-white/85 mt-3 text-[15.5px] leading-relaxed max-w-[480px]">
          Have a question, a partnership idea, or a story you want to tell?
          Reach out — we read everything.
        </p>
      </Container>
    </header>
  );
}
