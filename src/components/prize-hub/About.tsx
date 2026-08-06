import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

export function About() {
  return (
    <section className="py-[88px]" id="about">
      <Container narrow>
        <SectionHead
          eyebrow="Why This Prize Exists"
          title="Making Sure The Storytellers Are Seen"
          align="center"
          compact
          description="The Witsprouts Storytelling Prize was launched to acknowledge and amplify the voices of storytellers who are reinventing the way stories are told. It exists to revive the art of oral storytelling while celebrating and rewarding exceptional storytelling talent — sitting inside The Witsprouts Project's wider mission to foster a deeper engagement in African arts and culture."
        />
        <blockquote className="border-l-2 border-blue pl-5 max-w-[600px] mx-auto text-left">
          <p className="text-lg leading-snug font-semibold">
            &ldquo;Storytelling is one of the most powerful tools we have, and
            it is evolving. The Witsprouts Storytelling Prize exists to make
            sure those voices are encouraged, celebrated, and supported.&rdquo;
          </p>
          <cite className="block mt-3 text-xs tracking-[0.02em] uppercase font-semibold text-ink-soft not-italic">
            Tope Akintayo, Director, The Witsprouts Project
          </cite>
        </blockquote>
        <p className="text-[13.5px] text-ink-soft mt-7 text-center">
          Format, theme, and eligibility are set fresh for each edition — see
          the current edition for what applies right now.
        </p>
      </Container>
    </section>
  );
}
