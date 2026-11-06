import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { news } from "@/lib/content/home";

export function News() {
  return (
    <section className="py-32 lg:py-48 bg-paper">
      <Container>
        <div className="flex justify-between items-end mb-16 border-b-2 border-teal pb-6">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-teal">
            All The Latest
          </h2>
          <a href="#" className="hidden md:block text-sm font-semibold tracking-widest uppercase text-ink/50 hover:text-ochre transition-colors">
            Read Journal
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {news.slice(0, 3).map((item, i) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col h-full"
            >
              <div className="overflow-hidden mb-6 aspect-video bg-mist relative">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex-grow">
                <p className="text-xs font-bold text-ochre uppercase tracking-widest mb-3">
                  {i === 0 ? "Announcement" : i === 1 ? "News" : "Feature"}
                </p>
                <h3 className="text-xl font-bold tracking-tight text-teal mb-4 leading-snug group-hover:text-ochre transition-colors">
                  {item.title}
                </h3>
              </div>
              <div className="mt-6 pt-6 border-t border-line">
                <span className="text-sm font-semibold text-ink/50">{item.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
