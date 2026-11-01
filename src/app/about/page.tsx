import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import CTASection from "@/components/CTASection";

const AUDIENCES = [
  { title: "Individual Vehicle Owners", text: "Protect and monitor your personal vehicle." },
  { title: "Businesses", text: "Monitor company vehicles and improve accountability." },
  { title: "Transport Companies", text: "Improve visibility over commercial vehicles and drivers." },
  { title: "Logistics Companies", text: "Monitor vehicles involved in deliveries and transportation." },
  { title: "Fleet Operators", text: "Track multiple vehicles and gain better control over fleet operations." },
  { title: "Commercial Vehicle Owners", text: "Monitor cars, buses, trucks, vans, motorcycles and tricycles." },
];

const VALUES = [
  {
    title: "Reliability",
    text: "Dependable devices and installation you can count on.",
  },
  {
    title: "Professionalism",
    text: "Properly fitted, configured and tested equipment.",
  },
  {
    title: "Accountability",
    text: "We stand by our work and remain available after installation.",
  },
  {
    title: "Innovation",
    text: "Modern tracking and speed-control technology for your vehicles.",
  },
];

export const metadata = {
  title: "About Us | FOLANET SEC TECHNOLOGY ENTERPRISE",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f6b] to-[#06164a] py-20 text-white">
        <div
          className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
            About Us
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            About FOLANET SEC TECHNOLOGY ENTERPRISE
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80">
            For over 15 years, FOLANET SEC TECHNOLOGY ENTERPRISE has been
            providing vehicle technology and security solutions to customers who
            want greater control over their vehicles.
          </p>
        </div>
      </section>

      <ContactStrip />

      {/* OUR STORY */}
      <section id="who" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a1f6b] sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                Our core services focus on the sale and installation of vehicle
                tracking devices and speed-limiting devices.
              </p>
              <p>
                As vehicle theft, fleet-management challenges and road-safety
                concerns continue to affect vehicle owners and businesses, we
                believe technology should provide practical solutions.
              </p>
              <p>
                Our goal is simple: Help vehicle owners know where their vehicles
                are, improve control over vehicle operations and promote safer
                driving.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { v: "15+", t: "Years of Experience" },
              { v: "6+", t: "Vehicle Types Served" },
              { v: "100%", t: "Professional Installation" },
              { v: "24/7", t: "After-Sales Support" },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-7"
              >
                <p className="text-4xl font-extrabold text-orange-500">{s.v}</p>
                <p className="mt-2 text-sm font-medium text-slate-700">{s.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="bg-[#0a1f6b] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              Our Mission
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Our Mission</h2>
            <p className="mt-6 text-lg leading-relaxed text-white/85">
              To provide reliable, accessible and professionally installed
              vehicle technology solutions that improve vehicle security,
              monitoring, safety and fleet management.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Our Vision</span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a1f6b] sm:text-4xl">
              Our Vision
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-700">
              To be a trusted provider of vehicle tracking and speed-control
              solutions, helping individuals and businesses use technology to
              protect and manage their vehicles more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a1f6b] sm:text-4xl">
              What Sets Us Apart
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0a1f6b]">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Who We Serve</span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a1f6b] sm:text-4xl">
              Solutions for Different Vehicle Owners
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Our products and services are suitable for a wide range of
              customers.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((a) => (
              <div
                key={a.title}
                className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-orange-50/50 p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0a1f6b] to-[#1e4dc4] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0a1f6b]">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {a.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}