import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#0a1f6b] text-white">
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(249,115,22,0.45), transparent 50%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.45), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-400">
            Take Action Today
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Ready to Secure and Monitor Your Vehicle?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Don't wait until your vehicle is lost before taking vehicle security
            seriously. Whether you need a GPS tracking device, professional
            tracker installation, a speed limiter or a complete fleet tracking
            solution, FOLANET SEC TECHNOLOGY ENTERPRISE can help.
          </p>
          <p className="mt-3 text-sm text-white/70">
            Over 15 years of experience. Professional installation. Smart
            vehicle security solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:08109203740"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.6 1 1 0 01-.25 1z" />
              </svg>
              Call Us Now
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              Request a Tracker
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:bg-orange-500 hover:text-white"
            >
              Book an Installation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}