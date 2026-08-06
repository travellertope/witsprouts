import { Container } from "@/components/ui/Container";
import { SectionHead } from "@/components/ui/SectionHead";
import { Button } from "@/components/ui/Button";
import { PersonCard } from "@/components/ui/PersonCard";
import { storytellers } from "@/lib/content/home";

export function Storytellers() {
  return (
    <section className="py-24" id="storytellers">
      <Container>
        <SectionHead
          eyebrow="The Storytelling Prize"
          title="Meet Some Of Our Storytellers"
          description="Through the Witsprouts Storytelling Prize, we're building a growing community of storytellers, mentors, and judges working across Africa and the diaspora."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[22px]">
          {storytellers.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/prize/2026" variant="outline">
            Learn About The Storytelling Prize →
          </Button>
        </div>
      </Container>
    </section>
  );
}
