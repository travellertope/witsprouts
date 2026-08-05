import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { judges2025 } from "@/lib/content/prize";

export function Judges() {
  return (
    <section className="py-24">
      <Container narrow>
        <SectionHead
          eyebrow="How Winners Are Chosen"
          title="Selection Process"
          align="center"
          description="Nominations are reviewed in-house by The Witsprouts Project team, who narrow the pool to a shortlist. A guest judge is then announced to make the final call."
        />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
          <div className="border-[1.5px] border-dashed border-line rounded-md p-8 flex flex-col justify-center items-center text-center">
            <Eyebrow className="text-ink-soft mb-3">2026 · Final Judge</Eyebrow>
            <h3 className="font-display text-lg">To Be Announced</h3>
            <p className="text-sm text-ink-soft mt-2">
              Shortlist reviewed in-house · Final judge to be announced closer
              to the shortlist stage.
            </p>
          </div>
          <div className="border border-line rounded-md p-8">
            <Eyebrow className="text-blue mb-3">2025 Panel · Archive</Eyebrow>
            {judges2025.map((judge, i) => (
              <div
                key={judge.name}
                className={`flex justify-between items-center py-3.5 ${
                  i < judges2025.length - 1 ? "border-b border-line" : ""
                }`}
              >
                <div>
                  <div className="font-display font-semibold text-[15px]">{judge.name}</div>
                  <div className="text-[12.5px] text-ink-soft">{judge.role}</div>
                </div>
              </div>
            ))}
            <Link
              href="/prize/2025/judges"
              className="mt-[18px] font-mono text-xs tracking-[0.05em] uppercase font-semibold text-blue inline-flex items-center gap-1.5"
            >
              See Full 2025 Archive →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
