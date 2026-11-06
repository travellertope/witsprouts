import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

export function VisionMission() {
  return (
    <section className="bg-teal text-paper py-24" id="mission">
      <Container size="prize">
        <SectionHead
          title="What We're Working Toward"
          align="center"
          dark
          compact
        />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-9 md:gap-0">
          <div className="md:pr-9">
            <h3 className="text-[clamp(22px,2.6vw,28px)] font-bold leading-snug">
              An Africa where every creative has the platform, skills, and
              community to turn their talent into a sustainable creative
              life.
            </h3>
          </div>
          <div className="hidden md:block bg-white/15" />
          <div className="md:pl-9">
            <h3 className="text-[19px] font-semibold leading-relaxed">
              To empower emerging African creatives and the communities
              around them through arts and culture programming that builds
              skills, opens platforms, strengthens social cohesion, and
              creates sustainable livelihoods — delivered with authenticity,
              in genuine partnership with community, and to a standard of
              excellence.
            </h3>
          </div>
        </div>
      </Container>
    </section>
  );
}
