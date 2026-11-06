export function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden bg-hero-bg">
      <div className="max-w-5xl mx-auto text-center z-10">
        <h1 className="text-[clamp(52px,8vw,110px)] leading-[0.9] font-bold tracking-tighter text-teal">
          Where Culture
          <br />
          Becomes <span className="text-ochre">Power.</span>
        </h1>
        <p className="mt-10 text-lg md:text-2xl text-ink/75 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight">
          An independent cultural organisation dedicated to amplifying voices,
          bridging gaps, and redefining the creative landscape.
        </p>
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#about"
            className="w-full sm:w-auto px-10 py-4 bg-teal text-paper text-sm font-semibold tracking-widest uppercase hover:bg-teal transition-colors duration-300 text-center"
          >
            Explore The Vision
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-teal">Scroll</span>
        <div className="w-[1px] h-14 bg-teal/30 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full bg-teal animate-[slideDown_2s_ease-in-out_infinite]" style={{ height: "100%" }} />
        </div>
      </div>
    </header>
  );
}
