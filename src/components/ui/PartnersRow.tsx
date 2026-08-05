import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Partner } from "@/lib/content/home";

export function PartnersRow({
  partners,
  note,
  narrow = false,
}: {
  partners: Partner[];
  note: string;
  narrow?: boolean;
}) {
  return (
    <Container narrow={narrow}>
      <SectionHead
        eyebrow="Our Partners"
        title="Organisations We've Partnered With"
        description={note}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-line border border-line">
        {partners.map((partner) => (
          <div key={partner.name} className="bg-paper py-10 px-7 text-center">
            <div className="font-display text-xl font-bold">{partner.name}</div>
            <div className="font-mono text-[10px] tracking-[0.08em] uppercase text-blue mt-2.5">
              {partner.tag}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
