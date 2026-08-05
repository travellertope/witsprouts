import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ServeTabs } from "@/components/home/ServeTabs";

export function HowWeServe() {
  return (
    <section className="bg-cream py-[104px]" id="what-we-do">
      <Container>
        <div className="max-w-[640px] mx-auto mb-10 text-center">
          <Eyebrow className="text-blue mb-3.5">How We Serve Culture</Eyebrow>
          <h2 className="font-display font-bold text-[clamp(30px,3.6vw,46px)] leading-[1.08] tracking-tight">
            Engage, Develop, Include, Sustain
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            Five strategic pillars, grouped into the work behind the culture.
          </p>
        </div>
        <ServeTabs />
      </Container>
    </section>
  );
}
