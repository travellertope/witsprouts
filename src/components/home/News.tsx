import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { news } from "@/lib/content/home";

export function News() {
  return (
    <section className="py-[104px]">
      <Container>
        <div className="flex justify-between items-end flex-wrap gap-6 mb-12">
          <div>
            <Eyebrow className="text-blue">News & Updates</Eyebrow>
            <h2 className="font-display font-bold text-[clamp(30px,3.6vw,46px)] leading-[1.08] tracking-tight mt-3.5">
              All The Latest From Across Witsprouts
            </h2>
          </div>
          <Button href="#" variant="outline">
            See All →
          </Button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item) => (
            <Link key={item.title} href={item.href} className="border-t-2 border-ink pt-5 block">
              <div className="aspect-[4/3] bg-mist-2 rounded-sm overflow-hidden mb-[18px] relative">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="font-display text-base font-semibold leading-snug">
                {item.title}
              </div>
              <div className="font-mono text-[11px] text-ink-soft mt-3 tracking-[0.03em]">
                {item.date}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
