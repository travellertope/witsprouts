import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { ServeTabs } from "@/components/home/ServeTabs";

export function HowWeServe() {
  return (
    <section className="bg-cream py-24" id="what-we-do">
      <Container>
        <SectionHead
          title="Engage, Develop, Include, Sustain"
          description="Five strategic pillars, grouped into the work behind the culture."
          align="center"
        />
        <ServeTabs />
      </Container>
    </section>
  );
}
