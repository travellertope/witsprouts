import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { judges } from "@/lib/content/prize2025";

export function Judges() {
  return (
    <section className="py-20" id="judges">
      <Container narrow>
        <SectionHead
          title="Two of Nigeria's Foremost Voices"
          align="center"
          compact
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {judges.map((judge) => (
            <div key={judge.name} className="border border-line p-[30px]">
              <div className="text-xl font-bold">{judge.name}</div>
              <div className="text-[13.5px] text-ink-soft mt-2 leading-relaxed">{judge.role}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
