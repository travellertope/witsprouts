import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Partner } from "@/lib/content/home";

export function PartnersRow({
  partners,
  note,
  narrow = false,
  align = "left",
}: {
  partners: Partner[];
  note: string;
  narrow?: boolean;
  align?: "left" | "center";
}) {
  return (
    <Container narrow={narrow}>
      <SectionHead
        title="Organisations We've Partnered With"
        description={note}
        align={align}
        compact={narrow}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
        {partners.map((partner) => (
          <div key={partner.name} className="bg-paper py-9 px-[26px] text-center">
            <div className="text-lg font-bold">{partner.name}</div>
            <div className="text-[11px] tracking-[0.05em] uppercase font-bold text-blue mt-2">
              {partner.tag}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
