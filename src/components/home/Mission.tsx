import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Mission() {
  return (
    <section
      className="text-paper text-center pt-[120px] pb-[100px] relative overflow-hidden"
      style={{
        background:
          "linear-gradient(150deg, var(--blue-deep) 0%, var(--ink) 60%)",
      }}
      id="mission"
    >
      <Container>
        <Eyebrow className="text-blue mb-5">Our Mission</Eyebrow>
        <h2 className="font-display font-bold text-[clamp(30px,4.4vw,52px)] leading-[1.05] tracking-tight max-w-[820px] mx-auto">
          Culture knows no borders, and neither does our commitment to those
          who make it.
        </h2>
        <p className="max-w-[600px] mx-auto mt-[26px] text-base leading-loose text-white/68">
          Our mission is to uplift and protect African creativity everywhere.
          We champion artistic excellence, advocate for creative rights, and
          build opportunities for those shaping the culture and stories of
          today and tomorrow.
        </p>
        <div className="mission-seal w-[150px] h-[150px] mx-auto mt-[52px] rounded-full border-[1.5px] border-white/35 flex items-center justify-center relative">
          <div
            className="chevron-mark w-[34px] h-[34px]"
            style={{ background: "linear-gradient(135deg, var(--blue), var(--paper))" }}
          />
        </div>
      </Container>
    </section>
  );
}
