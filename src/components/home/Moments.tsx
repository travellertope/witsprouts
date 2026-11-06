import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { moments } from "@/lib/content/home";

export function Moments() {
  return (
    <section className="py-32 lg:py-48 bg-paper">
      <Container>
        <div className="flex justify-between items-end mb-16 border-b-2 border-teal pb-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-teal">
            Witsprouts Moments
          </h2>
          <a href="#" className="hidden md:block text-sm font-semibold tracking-widest uppercase text-ink/50 hover:text-ochre transition-colors">
            View Archive
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {moments.map((moment) => (
            <div key={moment.title} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-mist">
                <Image
                  src={moment.thumbnail}
                  alt={moment.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-paper/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <h3 className="text-base font-bold tracking-tight text-teal mb-2 leading-snug">
                {moment.title}
              </h3>
              <p className="text-sm text-ink/50 uppercase tracking-wider font-semibold">
                {moment.meta}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
