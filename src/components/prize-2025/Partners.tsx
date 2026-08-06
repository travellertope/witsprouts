import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { partners, partnerQuote } from "@/lib/content/prize2025";

export function Partners() {
  return (
    <section className="bg-mist py-20" id="partners">
      <Container narrow>
        <SectionHead
          title="Delivered Together With Three Partners"
          align="center"
          compact
          description="These partnered on this specific edition — not standing sponsors of the Prize."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {partners.map((partner) => (
            <div key={partner.name} className="bg-paper py-8 px-[22px] text-center">
              <div className="text-lg font-bold">{partner.name}</div>
              <div className="text-[10.5px] tracking-[0.05em] uppercase font-bold text-blue mt-2">
                {partner.tag}
              </div>
            </div>
          ))}
        </div>
        <blockquote className="border-l-2 border-blue pl-5 mt-8 max-w-[640px] mx-auto text-left">
          <p className="text-[17px] leading-snug font-semibold">
            &ldquo;{partnerQuote.quote}&rdquo;
          </p>
          <cite className="block mt-3 text-xs tracking-[0.02em] uppercase font-semibold text-ink-soft not-italic">
            {partnerQuote.cite}
          </cite>
        </blockquote>
      </Container>
    </section>
  );
}
