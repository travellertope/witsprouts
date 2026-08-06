import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

const pillars = [
  {
    letter: "A",
    title: "Authenticity",
    body: "Work rooted in real communities and real stories, never performative or borrowed. We put power and decision-making in the hands of the creatives and communities we serve.",
  },
  {
    letter: "C",
    title: "Community",
    body: "Arts and culture belong to the people. We co-create with the communities we serve, centring their voices and lived experiences.",
  },
  {
    letter: "E",
    title: "Excellence",
    body: "Working with intention, creativity, and care — continuously raising the bar for what arts-led development looks like in Africa.",
  },
];

export function AceFramework() {
  return (
    <section className="py-[88px]" id="ace">
      <Container size="prize">
        <SectionHead
          title="The ACE Framework"
          align="center"
          compact
          description="Three values that guide every decision, programme, and partnership we pursue."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.letter} className="border border-line p-8">
              <div className="text-[38px] font-extrabold text-blue leading-none">
                {pillar.letter}
              </div>
              <h3 className="text-[19px] font-bold mt-4">{pillar.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft mt-2.5">{pillar.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
