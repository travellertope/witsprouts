import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";

function Item({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 text-sm leading-relaxed mb-3 before:content-['—'] before:text-blue before:flex-none">
      <span>
        <b className="font-semibold text-ink">{label}:</b> {children}
      </span>
    </li>
  );
}

export function WhatsNew() {
  return (
    <section className="bg-mist py-24" id="whats-new">
      <Container narrow>
        <SectionHead
          eyebrow="No Theme, Wider Scope"
          title="What's New In The 2nd Edition"
          align="center"
          description="With this second edition, The Witsprouts Project is expanding its scope — honouring storytellers in all forms of oral and multimedia storytelling. There's no set theme this year. We're simply seeking storytellers doing the work of making stories matter."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-[1.5px] border-line rounded-md p-8">
            <div className="font-mono text-[11px] tracking-[0.08em] uppercase font-semibold text-ink-soft">
              2025 · 1st Edition
            </div>
            <h3 className="font-display text-xl mt-2.5 mb-5">
              Rebooting Legends and Memories
            </h3>
            <ul className="text-ink-soft">
              <Item label="Format">5–10 min theatrical video only</Item>
              <Item label="Eligibility">Nigerian storytellers, home or diaspora</Item>
              <Item label="Entry model">self-submission via Instagram</Item>
            </ul>
          </div>
          <div className="border-[1.5px] border-blue rounded-md p-8 bg-blue/4">
            <div className="font-mono text-[11px] tracking-[0.08em] uppercase font-semibold text-blue">
              2026 · 2nd Edition
            </div>
            <h3 className="font-display text-xl mt-2.5 mb-5">
              Open Scope, No Theme
            </h3>
            <ul>
              <Item label="Format">
                podcasts, spoken word, animation, audio drama, video, and more
              </Item>
              <Item label="Eligibility">
                storytellers anywhere across Africa or the diaspora
              </Item>
              <Item label="Entry model">nomination — by yourself or someone else</Item>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
