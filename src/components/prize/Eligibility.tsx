import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

const items = [
  "Using multimedia to tell engaging, impactful stories",
  "Working in any form of oral or multimedia storytelling",
  "Based anywhere across Africa or the African diaspora",
];

export function Eligibility() {
  return (
    <section className="py-24">
      <Container narrow>
        <SectionHead
          eyebrow="Eligibility"
          title="Who Can Be Nominated"
          align="center"
          description="The Witsprouts Storytelling Prize is open to young storytellers and voice artists who are:"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-9">
          {items.map((item) => (
            <div key={item} className="border border-line rounded-md p-[26px] text-center">
              <div className="w-10 h-10 rounded-full bg-mist-2 mx-auto mb-4 flex items-center justify-center text-blue font-display font-bold">
                ✓
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center font-display text-lg font-medium p-6 bg-mist rounded-md">
          Anyone can nominate — a friend, a colleague, a fan, or the
          storyteller themselves.
        </div>
      </Container>
    </section>
  );
}
