import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FinalCta() {
  return (
    <section className="bg-ink text-paper text-center py-[88px]">
      <Container size="prize">
        <Eyebrow className="text-white/60 mb-4">Nominations Are Open</Eyebrow>
        <h2 className="font-extrabold text-[clamp(28px,3.6vw,42px)] leading-[1.12] tracking-tight max-w-[640px] mx-auto">
          Know A Storyteller Worth Celebrating?
        </h2>
        <p className="mt-[18px] mb-8 text-[15px] text-white/65 max-w-[460px] mx-auto">
          Nominations close September 30, 2026. Put them forward — or put
          yourself forward.
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Button href="#nominate-form" variant="blue">
            Nominate Now →
          </Button>
          <Button href="mailto:prize@witsprouts.org" variant="white">
            Questions? Email Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
