import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";

const atAGlance = [
  { label: "Theme", value: "None — open scope" },
  { label: "Eligibility", value: "Africa & the diaspora" },
  { label: "Entry model", value: "Nomination" },
  { label: "Judging", value: "In-house + guest judge" },
];

export function CurrentEdition() {
  return (
    <section className="bg-mist py-[88px]" id="current">
      <Container size="prize">
        <SectionHead title="The Current Edition" compact />
        <div className="bg-ink text-paper p-9 md:p-14 grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs tracking-[0.08em] uppercase font-bold text-blue">
              2nd Edition · Nominations Closed
            </div>
            <h3 className="text-[clamp(24px,3vw,34px)] font-bold mt-3.5">
              The Witsprouts Storytelling Prize 2026
            </h3>
            <p className="mt-3.5 text-[15px] leading-relaxed text-white/68 max-w-[440px]">
              No theme this year — open to all forms of oral and multimedia
              storytelling, from podcasts and spoken word to animation, audio
              drama, and video.
            </p>
            <div className="flex gap-7 mt-6">
              <div>
                <div className="text-xl font-extrabold text-blue">₦500,000</div>
                <div className="text-[11px] text-white/50 uppercase tracking-[0.04em] mt-0.5">
                  Prize Purse
                </div>
              </div>
              <div>
                <div className="text-xl font-extrabold text-blue">Sep 30</div>
                <div className="text-[11px] text-white/50 uppercase tracking-[0.04em] mt-0.5">
                  Nominations Closed
                </div>
              </div>
            </div>
            <div className="flex gap-3.5 mt-7 flex-wrap">
              <Button href="/prize/2026" variant="blue">
                Visit the 2026 Edition →
              </Button>
              <Button href="mailto:prize@witsprouts.org" variant="white">
                Questions? Email Us
              </Button>
            </div>
          </div>
          <div className="border border-white/15 p-7">
            <div className="text-[11px] tracking-[0.05em] uppercase text-white/50 mb-3.5">
              At a Glance
            </div>
            <ul>
              {atAGlance.map((item, i) => (
                <li
                  key={item.label}
                  className={`flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 sm:gap-4 text-sm py-2.5 ${
                    i < atAGlance.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="text-white/60">{item.label}</span>
                  <b className="font-semibold text-left sm:text-right">{item.value}</b>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
