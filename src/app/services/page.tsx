import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Services | FOLANET SEC TECHNOLOGY ENTERPRISE",
};

const SERVICES = [
  {
    id: "tracking",
    no: "01",
    title: "GPS Vehicle Tracking",
    summary:
      "Know where your vehicle is, wherever it goes.",
    description:
      "Our GPS tracking solutions allow you to monitor your vehicle's location remotely through the appropriate tracking platform or mobile application.",
    features: [
      "Real-time location tracking",
      "Route history and playback",
      "Geofencing",
      "Ignition alerts",
      "Mileage reports",
      "Vehicle movement monitoring",
      "Fleet management",
      "Engine immobilisation",
    ],
  },
  {
    id: "installation",
    no: "02",
    title: "Tracking Device Installation",
    summary:
      "A tracking device is only as effective as its installation.",
    description:
      "Our technicians provide professional installation of vehicle tracking devices to ensure proper connection, configuration and functionality. We install tracking solutions for different types of vehicles, including cars, trucks, buses, vans, motorcycles and tricycles.",
    features: [
      "Cars, trucks, buses, vans",
      "Motorcycles & tricycles",
      "Proper configuration",
      "Tested before delivery",
    ],
    cta: "Book an Installation",
  },
  {
    id: "speed-limiter",
    no: "03",
    title: "Vehicle Speed Limiter Installation",
    summary: "Control vehicle speed and promote safer driving.",
    description:
      "Our speed-limiting devices are designed to help vehicle owners and fleet operators control the maximum speed of their vehicles.",
    features: [
      "Promote safer driving",
      "Reduce excessive speeding",
      "Improve driver compliance",
      "Potentially improve fuel efficiency",
      "Reduce speed-related risks",
      "Support better fleet management",
    ],
  },
  {
    id: "fleet",
    no: "04",
    title: "Fleet Tracking Solutions",
    summary: "Managing several vehicles can be difficult without accurate information.",
    description:
      "Our fleet tracking solutions provide businesses with greater visibility over their movable assets.",
    features: [
      "Vehicle location monitoring",
      "Route management",
      "Route replay",
      "Geofencing",
      "Mileage reporting",
      "Vehicle activity monitoring",
      "Fleet accountability",
    ],
  },
  {
    id: "security",
    no: "05",
    title: "Vehicle Security",
    summary: "Protect your vehicle with advanced security features.",
    description:
      "Depending on the device selected, our solutions can provide features such as location tracking, ignition alerts, geofencing and engine immobilisation.",
    features: [
      "Location tracking",
      "Ignition alerts",
      "Geofencing",
      "Engine immobilisation",
    ],
  },
  {
    id: "sales",
    no: "06",
    title: "Sales of Tracking & Speed Limiter Devices",
    summary: "Reliable devices for your vehicle technology needs.",
    description:
      "We supply tracking devices and speed-limiting devices suitable for different vehicle owners and operational requirements.",
    features: [
      "Basic tracking solutions",
      "Advanced monitoring devices",
      "Speed-limiting devices",
      "Suitable for different vehicle types",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f6b] to-[#06164a] py-20 text-white">
        <div
          className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-orange-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
            Our Services
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80">
            Professional supply and installation of vehicle tracking devices and
            speed-limiting devices — for individuals, businesses and fleet
            operators.
          </p>
        </div>
      </section>

      <ContactStrip />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-6">
            {SERVICES.map((s) => (
              <article
                id={s.id}
                key={s.id}
                className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-orange-300 hover:shadow-xl"
              >
                <div className="grid gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl font-bold text-orange-500">
                        {s.no}
                      </span>
                      <div className="h-12 w-px bg-orange-200" />
                    </div>
                    <h2 className="mt-4 text-2xl font-bold text-[#0a1f6b]">
                      {s.title}
                    </h2>
                    <p className="mt-2 text-sm font-medium text-orange-600">
                      {s.summary}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-base leading-relaxed text-slate-700">
                      {s.description}
                    </p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {s.features.map((f) => (
                        <div
                          key={f}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500"
                            fill="currentColor"
                          >
                            <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.58l7.3-7.3a1 1 0 011.4 0z" />
                          </svg>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                    {s.cta && (
                      <Link
                        href="/contact"
                        className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                      >
                        {s.cta}
                        <svg
                          viewBox="0 0 20 20"
                          className="h-4 w-4"
                          fill="currentColor"
                        >
                          <path d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}