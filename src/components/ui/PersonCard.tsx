import Image from "next/image";
import { Person } from "@/lib/content/home";

export function PersonCard({ person }: { person: Person }) {
  return (
    <div className="border border-line overflow-hidden">
      <div className="aspect-square bg-mist flex items-center justify-center overflow-hidden">
        {person.photoUrl ? (
          <Image
            src={person.photoUrl}
            alt={person.name}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center font-bold text-4xl text-ink/18">
            {person.initials}
          </div>
        )}
      </div>
      <div className="px-[18px] pt-4 pb-5">
        <div className="text-[11px] tracking-[0.05em] uppercase font-bold text-ochre">
          {person.tag}
        </div>
        <div className="text-[17px] font-bold mt-2">{person.name}</div>
        <div className="text-[13px] text-ink-soft mt-0.5">{person.role}</div>
      </div>
    </div>
  );
}
