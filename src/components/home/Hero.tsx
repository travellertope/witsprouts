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
          To foster a deeper engagement in African arts and culture. We build
          platforms, opportunities, and communities for Africa&apos;s
          creative generation.
        </p>
        <div className="mt-14 flex items-center justify-center">
          <a
            href="#about"
            className="w-full sm:w-auto px-10 py-4 border-2 border-teal text-teal text-sm font-semibold tracking-widest uppercase hover:bg-teal hover:text-paper transition-colors duration-300 text-center"
          >
            See What We Do
          </a>
        </div>
      </div>

    </header>
  );
}
