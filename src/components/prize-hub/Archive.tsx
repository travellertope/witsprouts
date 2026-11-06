import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { archiveEditions } from "@/lib/content/prizeHub";

export function Archive() {
  return (
    <section className="py-[88px]" id="archive">
      <Container size="prize">
        <SectionHead
          title="Past Editions"
          align="center"
          compact
          description="Every past edition, with its own theme, winner, and story — kept exactly as it happened."
        />
        <div className="border-t border-line max-w-[800px] mx-auto">
          {archiveEditions.map((edition) => (
            <div
              key={edition.year}
              className="grid grid-cols-1 sm:grid-cols-[100px_1fr_auto] gap-3.5 sm:gap-6 items-center py-7 border-b border-line"
            >
              <div className="text-[28px] font-bold text-ochre">{edition.year}</div>
              <div>
                <div className="text-[17px] font-bold">{edition.name}</div>
                <div className="text-[13.5px] text-ink-soft mt-1">{edition.meta}</div>
              </div>
              <Button href={edition.href} variant="outline" className="justify-self-start">
                View Archive →
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
