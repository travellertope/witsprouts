import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { steps } from "@/lib/content/prize";

export function HowToNominate() {
  return (
    <section className="bg-mist py-24" id="nominate">
      <Container narrow>
        <SectionHead
          eyebrow="The Process"
          title="How Nominations Work"
          align="center"
          description="This edition runs on nominations rather than direct self-submission — so the Prize can reach storytellers who might never put themselves forward."
        />
        <div className="steps">
          {steps.map((step) => (
            <div
              key={step.title}
              className="grid grid-cols-[64px_1fr] gap-6 py-7 border-b border-line last:border-b-0"
            >
              <div className="step-num font-display text-[28px] font-bold text-blue" />
              <div>
                <h4 className="font-display text-lg font-semibold mb-1.5">{step.title}</h4>
                <p className="text-[14.5px] leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="#nominate-form" variant="blue">
            Nominate a Storyteller →
          </Button>
        </div>
      </Container>
    </section>
  );
}
