import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Mission() {
  return (
    <section className="bg-ink text-paper text-center py-[110px]" id="mission">
      <Container>
        <Eyebrow className="text-white/60 mb-[18px]">Our Mission</Eyebrow>
        <h2 className="font-extrabold text-[clamp(28px,4vw,46px)] leading-[1.12] tracking-tight max-w-[780px] mx-auto">
          Culture knows no borders, and neither does our commitment to those
          who make it.
        </h2>
        <p className="max-w-[560px] mx-auto mt-[22px] text-[15.5px] leading-loose text-white/65">
          Our mission is to uplift and protect African creativity everywhere.
          We champion artistic excellence, advocate for creative rights, and
          build opportunities for those shaping the culture and stories of
          today and tomorrow.
        </p>
        <div className="chevron-mark bg-blue w-14 h-14 mx-auto mt-11" />
      </Container>
    </section>
  );
}
