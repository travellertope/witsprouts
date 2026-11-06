import Image from "next/image";
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
            <div className="text-[11px] tracking-[0.05em] uppercase font-bold text-blue">
              {partner.tag}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
