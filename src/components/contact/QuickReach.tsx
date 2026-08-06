import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

const cards = [
  {
    tag: "General Enquiries",
    value: "info@witsprouts.org",
    note: "For anything that doesn't fit elsewhere",
  },
  {
    tag: "Storytelling Prize",
    value: "prize@witsprouts.org",
    note: "Nomination and prize-specific questions",
  },
  {
    tag: "Follow Along",
    value: "Instagram · X · TikTok",
    note: "@witsproutsorg",
  },
];

export function QuickReach() {
  return (
    <section className="py-20">
      <Container size="prize">
        <SectionHead
          title="Pick the Channel That Fits"
          align="center"
          compact
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
          {cards.map((card) => (
            <div key={card.tag} className="bg-paper p-8 text-center">
              <div className="text-[11px] tracking-[0.05em] uppercase font-bold text-blue">
                {card.tag}
              </div>
              <div className="text-[17px] font-bold mt-2.5">{card.value}</div>
              <div className="text-[13px] text-ink-soft mt-1.5">{card.note}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
