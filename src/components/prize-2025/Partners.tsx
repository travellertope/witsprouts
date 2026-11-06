import Image from "next/image";
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
            <div key={partner.name} className="bg-paper py-9 px-[26px] flex flex-col items-center justify-center text-center min-h-[120px]">
              {partner.logo ? (
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={52}
                  className="object-contain max-h-[52px] w-auto mb-3"
                />
              ) : (
                <div className="text-lg font-bold mb-2">{partner.name}</div>
              )}
              <div className="text-[11px] tracking-[0.05em] uppercase font-bold text-ochre">
                {partner.tag}
              </div>
            </div>
          ))}
        </div>
        <blockquote className="border-l-2 border-ochre pl-5 mt-8 max-w-[640px] mx-auto text-left">
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
