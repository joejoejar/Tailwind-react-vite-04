import { useEffect, useState } from "react"

const slides = [
  {
    title: "Launch Faster",
    description: "Build, ship, and iterate with confidence.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Designed for Teams",
    description: "Collaborate with clarity and momentum.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Insights that Matter",
    description: "Track progress and make better decisions.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
]

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)

  const goPrev = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  // Autoplay carousel
  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 4500)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="app-shell">
      {/* Header */}
      <header className="header-shell">
        {/* Primary navigation */}
        <nav className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4 lg:px-12">
          {/* Brand */}
          <a href="/" className="flex items-center gap-3">
            <img
              src="https://www.svgrepo.com/show/499831/target.svg"
              alt="Target Logo"
              width="32"
              height="32"
            />
            <span className="text-base font-semibold tracking-tight md:text-lg">Target</span>
          </a>

          {/* Desktop links */}
          <div className="hidden flex-1 items-center justify-center gap-8 md:flex">
            <a className="nav-link" href="#">
              Pricing
            </a>
            <a className="nav-link" href="#">
              Blog
            </a>
            <a className="nav-link" href="#">
              Docs
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 md:flex">
            <a className="nav-link" href="#">
              Sign in
            </a>
            <a className="nav-cta" href="#">
              Sign up
            </a>
          </div>

          {/* Mobile nav toggle */}
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>

        {/* Mobile navigation drawer */}
        {isOpen ? (
          <div className="mobile-menu">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
              <a className="mobile-link" href="#">
                Pricing
              </a>
              <a className="mobile-link" href="#">
                Blog
              </a>
              <a className="mobile-link" href="#">
                Docs
              </a>
              <div className="mt-2 flex flex-col gap-2 border-t border-slate-800 pt-3">
                <a className="mobile-link" href="#">
                  Sign in
                </a>
                <a className="mobile-cta" href="#">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <main className="mx-auto flex max-w-6xl flex-1 flex-col items-start gap-8 px-6 py-10 lg:px-12">
        {/* Carousel */}
        <section className="w-full">
          <div className="carousel-card carousel-shadow">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
                  Featured
                </p>
                <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-100 md:text-4xl">
                  {slides[activeSlide].title}
                </h1>
                <p className="mt-3 max-w-lg text-xs text-slate-300 md:text-base">
                  {slides[activeSlide].description}
                </p>
              </div>
              <div className="w-full md:w-[400px]">
                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-800/70">
                  <img
                    src={slides[activeSlide].image}
                    alt={`${slides[activeSlide].title} preview`}
                    className="h-60 w-full object-cover md:h-72"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                </div>
                <div className="mt-4 flex w-full flex-col gap-3 md:flex-row md:items-center">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="carousel-pill w-full md:w-1/2"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="carousel-primary w-full md:w-1/2"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    activeSlide === index ? "bg-sky-300" : "bg-slate-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Embossed feature cards */}
        <section className="grid w-full gap-6 md:grid-cols-3">
          {["Strategy", "Automation", "Growth"].map((item) => (
            <div
              key={item}
              className="emboss-card"
            >
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="mt-2 text-sm text-slate-400">
                Clean, embossed panels that add depth without clutter.
              </p>
            </div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="w-full">
          <div className="flex flex-col items-start gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Testimonials</p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
              Built for modern teams
            </h2>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              Trusted by teams who want speed, clarity, and beautiful interfaces that scale.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                quote: "The workflow finally feels effortless. We ship updates weekly now.",
                name: "Avery Cole",
                role: "Product Lead",
              },
              {
                quote: "Clean, fast, and reliable. The UI looks premium without extra effort.",
                name: "Jamie Patel",
                role: "Design Director",
              },
              {
                quote: "Our team alignment improved immediately after the first rollout.",
                name: "Morgan Lee",
                role: "Operations",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200 sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),_transparent_60%)]" />
                <div className="relative flex h-full flex-col gap-4">
                  <p className="text-sm leading-relaxed text-slate-200">“{item.quote}”</p>
                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-slate-100">{item.name}</p>
                    <p className="text-xs text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project references */}
        <section className="w-full">
          <div className="flex flex-col items-start gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">Project References</p>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 md:text-3xl">
              Recent work highlights
            </h2>
            <p className="max-w-2xl text-sm text-slate-400 md:text-base">
              A few projects that showcase modern UI, fast delivery, and measurable impact.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Atlas Commerce",
                tag: "E-commerce",
                detail: "Increased conversion by 22% with a streamlined checkout flow.",
              },
              {
                title: "Nimbus Analytics",
                tag: "Data Platform",
                detail: "Unified dashboards for 12 teams with real-time KPI tracking.",
              },
              {
                title: "Pulse Health",
                tag: "Healthcare",
                detail: "Improved patient onboarding time by 35% across clinics.",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-slate-200 transition hover:border-sky-400/60 hover:bg-slate-900 sm:p-6"
              >
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-300">
                    {project.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{project.detail}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-sky-200"
                >
                  View case study
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer-shell">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 lg:px-12 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://www.svgrepo.com/show/499831/target.svg"
              alt="Footer Logo"
              width="24"
              height="24"
            />
            <span className="font-medium text-slate-200">Footer</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a className="footer-link" href="#">About</a>
            <a className="footer-link" href="#">Services</a>
            <a className="footer-link" href="#">Careers</a>
            <a className="footer-link" href="#">Contact</a>
          </div>

          <p className="text-xs text-slate-500">© 2026 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
