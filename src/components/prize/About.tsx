import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

export function About() {
  return (
    <section className="py-[88px]" id="about">
      <Container narrow>
        <SectionHead
          title="Making Sure The Storytellers Are Seen"
          align="center"
          compact
        />
        <p className="text-[15.5px] leading-loose text-ink-soft">
          The Witsprouts Storytelling Prize was launched to acknowledge and
          amplify the voices of storytellers who are reinventing the way
          stories are told. It exists to revive the art of oral storytelling
          while celebrating and rewarding exceptional storytelling talent.
        </p>
        <p className="text-[15.5px] leading-loose text-ink-soft mt-4">
          The inaugural 2025 edition centred on the theme &ldquo;Rebooting
          Legends and Memories,&rdquo; calling on Nigerian artists and
          creatives to reimagine traditional African oral storytelling for
          today&apos;s digital platforms through original 5–10 minute
          theatrical video performances.
        </p>
        <blockquote className="border-l-2 border-blue pl-5 my-[26px]">
          <p className="text-lg leading-snug font-semibold">
            &ldquo;Storytelling is one of the most powerful tools we have, and
            it is evolving. Contemporary griots, creative podcasters, spoken
            word artists, animators, voice-over artists, and everyone
            involved in the art of storytelling are carrying something
            important forward. The Witsprouts Storytelling Prize exists to
            make sure those voices are encouraged, celebrated, and
            supported.&rdquo;
          </p>
          <cite className="block mt-3 text-xs tracking-[0.02em] uppercase font-semibold text-ink-soft not-italic">
            Tope Akintayo, Director, The Witsprouts Project
          </cite>
        </blockquote>
      </Container>
    </section>
  );
}
