import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { judges2025 } from "@/lib/content/prize";

export function Judges() {
  return (
    <section className="py-[88px]">
      <Container narrow>
        <SectionHead
          eyebrow="How Winners Are Chosen"
          title="Selection Process"
          align="center"
          compact
          description="Nominations are reviewed in-house by The Witsprouts Project team, who narrow the pool to a shortlist. A guest judge is then announced to make the final call."
        />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-5 items-stretch">
          <div className="border-[1.5px] border-dashed border-line p-7 flex flex-col justify-center items-center text-center">
            <Eyebrow className="mb-2.5">2026 · Final Judge</Eyebrow>
            <h3 className="text-[17px] font-bold">To Be Announced</h3>
            <p className="text-[13.5px] text-ink-soft mt-2">
              Shortlist reviewed in-house · Final judge to be announced closer
              to the shortlist stage.
            </p>
          </div>
          <div className="border border-line p-7">
            <Eyebrow className="text-blue mb-2.5">2025 Panel · Archive</Eyebrow>
            {judges2025.map((judge, i) => (
              <div
                key={judge.name}
                className={`py-3 ${i < judges2025.length - 1 ? "border-b border-line" : ""}`}
              >
                <div className="font-bold text-[14.5px]">{judge.name}</div>
                <div className="text-xs text-ink-soft">{judge.role}</div>
              </div>
            ))}
            <Link
              href="/prize/2025/judges"
              className="mt-4 text-xs tracking-[0.02em] font-bold text-blue inline-flex items-center gap-1.5"
            >
              See Full 2025 Archive →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
