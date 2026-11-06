export function Mission() {
  return (
    <section className="py-20 lg:py-28 px-6 md:px-12 bg-teal text-paper flex items-center justify-center text-center" id="mission">
      <div className="max-w-[1400px] mx-auto relative">
        <span className="absolute -top-16 md:-top-32 left-1/2 -translate-x-1/2 text-[120px] md:text-[200px] text-ochre/20 font-serif leading-none select-none">
          &ldquo;
        </span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] relative z-10">
          Culture knows no borders,{" "}
          <br className="hidden lg:block" />
          and neither does our{" "}
          <br className="hidden lg:block" />
          commitment to{" "}
          <span className="text-ochre">those who make it.</span>
        </h2>
      </div>
    </section>
  );
}
