import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { steps } from "@/lib/content/prize2025";

export function HowItWorked() {
  return (
    <section className="bg-mist py-20" id="how">
      <Container narrow>
        <SectionHead
          title="Submission & Judging Process"
          align="center"
          compact
          description="The inaugural edition ran as a direct self-submission contest via Instagram."
        />
        <div className="steps max-w-[700px] mx-auto">
          {steps.map((step) => (
            <div
              key={step}
              className="grid grid-cols-[48px_1fr] gap-5 py-[22px] border-b border-line last:border-b-0"
            >
              <div className="step-num text-xl font-extrabold text-blue" />
              <p className="text-[14.5px] leading-relaxed text-ink-soft">{step}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
