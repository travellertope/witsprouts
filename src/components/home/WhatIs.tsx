import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function WhatIs() {
  return (
    <section className="py-32 lg:py-48 bg-paper" id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

          {/* Image */}
          <div className="order-2 lg:order-1 relative h-[60vh] lg:h-[80vh] w-full">
            <div className="relative w-full h-full">
              <Image
                src="/images/home/what-community.jpg"
                alt="Community arts gathering"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-ochre -z-10 hidden md:block" />
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-teal mb-10 leading-tight">
              What is The<br />Witsprouts Project?
            </h2>
            <div className="space-y-6 text-lg text-ink/75 leading-relaxed font-light">
              <p>
                We are an independent cultural organisation redefining the
                creative ecosystem. By empowering African storytellers, artists,
                and visionaries, we build the bridges that connect heritage to
                the future.
              </p>
              <p>
                Starting as a grassroots initiative, we have evolved into a
                multifaceted platform that identifies, nurtures, and amplifies
                the talent that drives our cultural identity forward.
              </p>
            </div>
            <div className="mt-12">
              <Link
                href="/about"
                className="group inline-flex items-center gap-4 text-teal font-semibold tracking-wide uppercase text-sm border-b-2 border-teal pb-1 hover:text-ochre hover:border-ochre transition-all duration-300"
              >
                Read Our Story
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
