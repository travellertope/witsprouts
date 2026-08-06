import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { news } from "@/lib/content/home";

export function News() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex justify-between items-end flex-wrap gap-6 mb-11">
          <div>
            <Eyebrow>News & Updates</Eyebrow>
            <h2 className="font-extrabold text-[clamp(28px,3.4vw,42px)] leading-[1.12] tracking-tight mt-3">
              All The Latest From Across Witsprouts
            </h2>
          </div>
          <Button href="#" variant="outline">
            See All →
          </Button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Link key={item.title} href={item.href} className="border-t-2 border-ink pt-[18px] block">
              <div className="aspect-[4/3] bg-mist overflow-hidden mb-4 relative">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="text-[15.5px] font-bold leading-snug">{item.title}</div>
              <div className="text-xs text-ink-soft mt-3">{item.date}</div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
