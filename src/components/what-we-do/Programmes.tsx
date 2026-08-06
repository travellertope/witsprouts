import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { programmes } from "@/lib/content/whatWeDo";

export function Programmes() {
  return (
    <section className="bg-mist py-[88px]" id="programmes">
      <Container size="prize">
        <SectionHead
          title="Eight Ways We Deliver On Our Pillars"
          align="center"
          compact
          description="Designed to create long-term educational, cultural, and empowerment outcomes across our three-year roadmap."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {programmes.map((p) => (
            <div key={p.num} className="bg-paper p-8">
              <div className="text-xs font-bold text-blue tracking-[0.05em]">{p.num}</div>
              <h3 className="text-lg font-bold mt-2.5">{p.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft mt-2.5">{p.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
