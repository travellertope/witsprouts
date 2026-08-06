import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

export function Theme() {
  return (
    <section className="py-20" id="theme">
      <Container narrow>
        <SectionHead
          title="Rebooting Legends and Memories"
          align="center"
          compact
          description="The first edition of the Prize called on Nigerian artists and creatives to reimagine traditional African oral storytelling for today's digital platforms through original 5–10 minute theatrical video performances."
        />
        <p className="text-[14.5px] leading-loose text-ink-soft text-center max-w-[600px] mx-auto">
          The Witsprouts Storytelling Prize was launched to acknowledge and
          amplify the voices of storytellers who are reinventing the way
          stories are told — open to storytellers, performers, and creatives
          across Nigeria, both at home and in the diaspora.
        </p>
      </Container>
    </section>
  );
}
