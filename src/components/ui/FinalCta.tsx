import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function FinalCta({
  eyebrow,
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  size = "default",
}: {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  size?: "default" | "prize";
}) {
  return (
    <section className="bg-ink text-paper text-center py-[88px]">
      <Container size={size}>
        <Eyebrow className="text-white/60 mb-4">{eyebrow}</Eyebrow>
        <h2 className="font-extrabold text-[clamp(28px,3.6vw,42px)] leading-[1.12] tracking-tight max-w-[640px] mx-auto">
          {title}
        </h2>
        <p className="mt-[18px] mb-8 text-[15px] text-white/65 max-w-[460px] mx-auto">
          {description}
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <Button href={primaryHref} variant="blue">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="white">
            {secondaryLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
