import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <header className="relative h-[560px] overflow-hidden">
      <Image
        src="/images/home/hero-performance.jpg"
        alt="Live performance audience"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="hero-scrim-bottom absolute inset-0" />
      <Container className="relative z-[2] h-full flex flex-col justify-end pb-14">
        <h1 className="text-white font-extrabold text-[clamp(38px,5.6vw,64px)] leading-[1.12] tracking-tight max-w-[720px]">
          Where Culture
          <br />
          Becomes <span className="text-blue">Power.</span>
        </h1>
        <p className="text-white/85 mt-4 text-base leading-relaxed max-w-[480px]">
          To foster a deeper engagement in African arts and culture. We build
          platforms, opportunities, and communities for Africa&apos;s
          creative generation.
        </p>
        <div className="flex gap-3.5 mt-7 flex-wrap">
          <Button href="/prize/2026" variant="solid" className="!bg-white !text-ink !border-white">
            Explore the Prize →
          </Button>
          <Button href="/what-we-do" variant="white">
            See What We Do
          </Button>
        </div>
      </Container>
    </header>
  );
}
