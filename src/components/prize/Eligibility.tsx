import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

const items = [
  "Using multimedia to tell engaging, impactful stories",
  "Working in any form of oral or multimedia storytelling",
  "Based anywhere across Africa or the African diaspora",
];

export function Eligibility() {
  return (
    <section className="py-[88px]">
      <Container narrow>
        <SectionHead
          eyebrow="Eligibility"
          title="Who Can Be Nominated"
          align="center"
          compact
          description="The Witsprouts Storytelling Prize is open to young storytellers and voice artists who are:"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mb-8">
          {items.map((item) => (
            <div key={item} className="border border-line p-6 text-center">
              <div className="w-[38px] h-[38px] rounded-full bg-mist mx-auto mb-3.5 flex items-center justify-center text-blue font-bold">
                ✓
              </div>
              <p className="text-[13.5px] leading-relaxed text-ink-soft">{item}</p>
            </div>
          ))}
        </div>
        <div className="text-center text-[17px] font-semibold p-[22px] bg-paper border border-line">
          Anyone can nominate — a friend, a colleague, a fan, or the
          storyteller themselves.
        </div>
      </Container>
    </section>
  );
}
