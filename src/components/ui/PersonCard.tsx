import Image from "next/image";
import { Person } from "@/lib/content/home";

export function PersonCard({ person }: { person: Person }) {
  return (
    <div className="border border-line rounded-sm overflow-hidden transition-shadow duration-200 hover:shadow-[0_18px_40px_-20px_rgba(10,10,10,0.25)]">
      <div className="aspect-square bg-mist-2 flex items-center justify-center overflow-hidden">
        {person.photoUrl ? (
          <Image
            src={person.photoUrl}
            alt={person.name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center font-display font-bold text-4xl text-ink/22"
            style={{
              background:
                "repeating-linear-gradient(135deg, var(--mist-2), var(--mist-2) 10px, #E9ECF2 10px, #E9ECF2 20px)",
            }}
          >
            {person.initials}
          </div>
        )}
      </div>
      <div className="px-[18px] pt-[18px] pb-[22px]">
        <div className="font-mono text-[10px] tracking-[0.08em] uppercase font-semibold text-blue">
          {person.tag}
        </div>
        <div className="font-display text-lg font-semibold mt-2">{person.name}</div>
        <div className="text-[13px] text-ink-soft mt-0.5">{person.role}</div>
      </div>
    </div>
  );
}
