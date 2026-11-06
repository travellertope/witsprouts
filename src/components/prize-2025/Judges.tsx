import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { judges } from "@/lib/content/prize2025";

export function Judges() {
  return (
    <section className="py-20" id="judges">
      <Container narrow>
        <SectionHead
          title="2025 Prize Judged By"
          align="center"
          compact
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {judges.map((judge) => (
            <div key={judge.name} className="border border-line overflow-hidden">
              {"photo" in judge && judge.photo && (
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={judge.photo as string}
                    alt={judge.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div className="p-[30px]">
                <div className="text-xl font-bold">{judge.name}</div>
                <div className="text-[13.5px] text-ink-soft mt-2 leading-relaxed">{judge.role}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
