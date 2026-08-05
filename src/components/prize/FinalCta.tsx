import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FinalCta() {
  return (
    <section className="bg-ink text-paper text-center py-[100px]">
      <Container size="prize">
        <Eyebrow className="text-blue mb-[18px]">Nominations Are Open</Eyebrow>
        <h2 className="font-display font-bold text-[clamp(30px,4vw,48px)] leading-[1.08] tracking-tight max-w-[680px] mx-auto">
          Know A Storyteller Worth Celebrating?
        </h2>
        <p className="mt-5 mb-9 text-base text-white/68 max-w-[480px] mx-auto">
          Nominations close September 30, 2026. Put them forward — or put
          yourself forward.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="#nominate-form" variant="blue">
            Nominate Now →
          </Button>
          <Button href="mailto:prize@witsprouts.org" variant="white" className="border-white/50 text-white">
            Questions? Email Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
