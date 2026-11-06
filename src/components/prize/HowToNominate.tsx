import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { steps } from "@/lib/content/prize";

export function HowToNominate() {
  return (
    <section className="bg-mist py-[88px]" id="nominate">
      <Container narrow>
        <SectionHead
          title="How Nominations Worked"
          align="center"
          compact
          description="This edition ran on nominations rather than direct self-submission — so the Prize could reach storytellers who might never put themselves forward."
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
          <p className="text-sm text-ink-soft">
            Nominations for the 2026 edition closed on September 30, 2026.
            The shortlist will be announced in due course.
          </p>
        </div>
      </Container>
    </section>
  );
}
