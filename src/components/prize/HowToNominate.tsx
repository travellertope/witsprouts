import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { steps } from "@/lib/content/prize";

export function HowToNominate() {
  return (
    <section className="bg-mist py-[88px]" id="nominate">
      <Container narrow>
        <SectionHead
          eyebrow="The Process"
          title="How Nominations Work"
          align="center"
          compact
          description="This edition runs on nominations rather than direct self-submission — so the Prize can reach storytellers who might never put themselves forward."
        />
        <div className="steps">
          {steps.map((step) => (
            <div
              key={step.title}
              className="grid grid-cols-[56px_1fr] gap-[22px] py-[26px] border-b border-line last:border-b-0"
            >
              <div className="step-num text-2xl font-extrabold text-blue" />
              <div>
                <h4 className="text-[17px] font-bold mb-1.5">{step.title}</h4>
                <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-9">
          <Button href="#nominate-form" variant="blue">
            Nominate a Storyteller →
          </Button>
        </div>
      </Container>
    </section>
  );
}
