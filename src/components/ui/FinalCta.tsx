import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FinalCta({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  size = "default",
  /** Subtle divider above the section, for pages where it follows a
   * light section rather than another dark one. */
  topBorder = false,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  size?: "default" | "prize";
  topBorder?: boolean;
}) {
  return (
    <section
      className={`bg-teal text-paper text-center py-[88px] ${
        topBorder ? "border-t border-white/10" : ""
      }`}
    >
      <Container size={size}>
        <h2 className="font-bold text-[clamp(28px,3.6vw,42px)] leading-[1.12] tracking-tight max-w-[640px] mx-auto">
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
