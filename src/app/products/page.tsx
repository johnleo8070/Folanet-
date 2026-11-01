import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Products | FOLANET SEC TECHNOLOGY ENTERPRISE",
};

const PRODUCTS = [
  {
    id: "basic",
    name: "Basic Vehicle Tracking Device",
    tag: "Essential",
    description:
      "Designed for customers who need reliable vehicle location monitoring and essential vehicle security features.",
    features: [
      "24/7 real-time location tracking",
      "Engine cut-off capability",
      "Vehicle monitoring",
    ],
  },
  {
    id: "advanced",
    name: "Advanced Tracking + Voice Monitoring Device",
    tag: "Advanced",
    description:
      "Designed for customers who require additional monitoring functionality alongside vehicle tracking.",
    features: [
      "24/7 real-time location tracking",
      "Engine cut-off capability",
      "Voice monitoring",
      "Call-SIM-to-listen functionality",
      "Additional external hardware",
    ],
  },
  {
    id: "speed-limiter",
    name: "Speed Limiting Devices",
    tag: "Safety",
    description:
      "Designed to help control vehicle speed and promote safer vehicle operation.",
    features: [
      "Configurable maximum speed",
      "Compatible with various vehicles",
      "Supports safer driving behaviour",
    ],
  },
];

const COMPARE = [
  { feature: "Real-Time Location", basic: "✓ 24/7", advanced: "✓ 24/7" },
  { feature: "Engine Cut-Off", basic: "✓", advanced: "✓" },
  { feature: "Voice Monitoring", basic: "✕", advanced: "✓" },
  { feature: "External Hardware", basic: "✕", advanced: "✓" },
  { feature: "Call-SIM-to-Listen", basic: "✕", advanced: "✓" },
  { feature: "Mobile App Access", basic: "✓", advanced: "✓" },
];

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f6b] to-[#06164a] py-20 text-white">
        <div
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
            Our Products
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Our Vehicle Technology Products
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80">
            Choose from reliable tracking devices and speed-limiting solutions
            designed to keep your vehicles secure and your operations safe.
          </p>
        </div>
      </section>

      <ContactStrip />

      {/* PRODUCTS */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p) => (
              <article
                id={p.id}
                key={p.id}
                className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-600">
                    {p.tag}
                  </span>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#0a1f6b] to-[#1e4dc4] text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                      fill="currentColor"
                    >
                      <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5 3 .8-1.3-4.3-2.6V7z" />
                    </svg>
                  </div>
                </div>
                <h2 className="mt-4 text-xl font-bold text-[#0a1f6b]">
                  {p.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>
                <div className="mt-5 rounded-xl bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-600">
                    Features
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <svg
                          viewBox="0 0 20 20"
                          className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500"
                          fill="currentColor"
                        >
                          <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.58l7.3-7.3a1 1 0 011.4 0z" />
                        </svg>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Request Installation
                </Link>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
                  <a
                    href="tel:08109203740"
                    className="rounded-md border border-slate-200 px-2 py-2 text-center hover:border-orange-300 hover:text-orange-600"
                  >
                    📞 08109203740
                  </a>
                  <a
                    href="mailto:folanetsectechnology@gmail.com"
                    className="rounded-md border border-slate-200 px-2 py-2 text-center hover:border-orange-300 hover:text-orange-600"
                  >
                    ✉ Email Us
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Comparison</span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a1f6b] sm:text-4xl">
              Choose the Tracking Solution That Fits Your Needs
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#0a1f6b] text-white">
                    <th className="px-6 py-4 text-sm font-semibold">Feature</th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Basic Tracking
                    </th>
                    <th className="px-6 py-4 text-sm font-semibold">
                      Advanced Tracking + Voice Monitoring
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARE.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={
                        i % 2 === 0 ? "bg-white" : "bg-slate-50"
                      }
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-800">
                        {row.feature}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        {row.basic}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-700">
                        {row.advanced}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-br from-orange-500 to-orange-600 p-8 text-white shadow-lg sm:p-10">
            <div className="grid items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold sm:text-3xl">
                  Need Help Choosing?
                </h3>
                <p className="mt-2 text-white/90">
                  Not sure which tracker is suitable for your vehicle? Speak
                  with our team and we will help you select a solution based on
                  your vehicle and monitoring requirements.
                </p>
              </div>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:08109203740"
                  className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2.5 hover:bg-white/20"
                >
                  📞 08109203740
                </a>
                <a
                  href="https://wa.me/2349059103090"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2.5 hover:bg-white/20"
                >
                  💬 WhatsApp: 09059103090
                </a>
                <a
                  href="mailto:folanetsectechnology@gmail.com"
                  className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-2.5 hover:bg-white/20"
                >
                  ✉ folanetsectechnology@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}