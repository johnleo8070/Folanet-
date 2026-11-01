import Link from "next/link";
import ContactStrip from "@/components/ContactStrip";
import CTASection from "@/components/CTASection";

const SERVICES = [
  {
    no: "01",
    title: "GPS Vehicle Tracking",
    description:
      "Monitor your vehicle's location remotely through the appropriate tracking platform or mobile application.",
    points: [
      "Real-time location tracking",
      "Route history and playback",
      "Geofencing",
      "Ignition alerts",
      "Mileage reports",
      "Engine immobilisation",
    ],
    href: "/services#tracking",
  },
  {
    no: "02",
    title: "Tracking Device Installation",
    description:
      "Professional installation of vehicle tracking devices to ensure proper connection, configuration and functionality.",
    points: [
      "Cars, trucks, buses, vans",
      "Motorcycles & tricycles",
      "Proper configuration",
      "Tested before delivery",
    ],
    href: "/services#installation",
    cta: "Book an Installation",
  },
  {
    no: "03",
    title: "Vehicle Speed Limiter Installation",
    description:
      "Help vehicle owners and fleet operators control the maximum speed of their vehicles.",
    points: [
      "Promote safer driving",
      "Reduce excessive speeding",
      "Improve driver compliance",
      "Support fleet management",
    ],
    href: "/services#speed-limiter",
  },
  {
    no: "04",
    title: "Tracking Device Sales",
    description:
      "We supply tracking devices suitable for different vehicle owners and operational requirements.",
    points: [
      "Basic tracking solutions",
      "Advanced monitoring devices",
      "Engine cut-off capable",
      "Voice monitoring options",
    ],
    href: "/products",
  },
  {
    no: "05",
    title: "Speed Limiter Sales",
    description:
      "Supply of vehicle speed-limiting devices designed to help control vehicle speed and promote safer operation.",
    points: [
      "Reliable speed limiting",
      "Safer vehicle operation",
      "Suitable for fleets",
    ],
    href: "/products#speed-limiter",
  },
  {
    no: "06",
    title: "Fleet Tracking Solutions",
    description:
      "Greater visibility over your movable assets with our fleet tracking solutions.",
    points: [
      "Route replay",
      "Geofencing",
      "Mileage reporting",
      "Fleet accountability",
    ],
    href: "/services#fleet",
  },
];

const WHY_US = [
  {
    title: "Over 15 Years of Experience",
    text: "More than 15 years in the industry, with practical experience in vehicle tracking, security and speed-control solutions.",
  },
  {
    title: "Professional Installation",
    text: "We don't just sell tracking and speed-limiting devices. We provide professional installation for proper fitting and configuration.",
  },
  {
    title: "Reliable Vehicle Monitoring",
    text: "Our tracking solutions provide real-time visibility of your vehicle, helping you stay informed about its location and movement.",
  },
  {
    title: "Solutions for Different Vehicles",
    text: "Suitable for cars, trucks, buses, vans, motorcycles and tricycles.",
  },
  {
    title: "Vehicle Security",
    text: "Features such as location tracking, ignition alerts, geofencing and engine immobilisation on supported devices.",
  },
  {
    title: "Fleet Management",
    text: "Monitor vehicle movement, review routes and improve fleet accountability.",
  },
  {
    title: "After-Sales Support",
    text: "We remain available to assist customers after installation, helping them get the best use from their tracking solutions.",
  },
];

const TRACKING_FEATURES = [
  {
    title: "Real-Time Tracking",
    text: "Monitor your vehicle's location in real time.",
  },
  {
    title: "Route History",
    text: "Review previous vehicle routes and movements.",
  },
  {
    title: "Geofencing",
    text: "Set geographical boundaries and receive alerts when a vehicle enters or leaves a designated area.",
  },
  {
    title: "Ignition Alerts",
    text: "Receive notifications relating to vehicle ignition activity.",
  },
  {
    title: "Engine Immobilisation",
    text: "Selected devices offer remote engine immobilisation functionality.",
  },
  {
    title: "Mobile Access",
    text: "Monitor your vehicle using the appropriate mobile tracking application.",
  },
];

const SPEED_BENEFITS = [
  {
    title: "Enhanced Safety",
    text: "Helps reduce risks associated with excessive speed.",
  },
  {
    title: "Better Driver Compliance",
    text: "Encourages drivers to operate within approved speed limits.",
  },
  {
    title: "Reduced Penalties",
    text: "Can help reduce the likelihood of speeding violations.",
  },
  {
    title: "Fuel Efficiency",
    text: "Consistent and moderate driving speeds may improve fuel consumption.",
  },
  {
    title: "Better Fleet Control",
    text: "An additional tool for managing driver behaviour.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f6b] via-[#0a2576] to-[#06164a] text-white">
        <div className="hero-grid-pattern absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-orange-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Vehicle Security & Technology
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Smarter{" "}
              <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
                Vehicle Security
              </span>
              .<br />
              Better Control. Greater Peace of Mind.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              Reliable Vehicle Tracking and Speed Limiting Solutions for
              Individuals, Businesses and Fleet Operators.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              With over 15 years of experience, we specialise in the sales and
              installation of GPS tracking devices and vehicle speed-limiting
              devices for cars, trucks, buses, vans, motorcycles and
              tricycles.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:08109203740"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/40 transition hover:bg-orange-600"
              >
                Contact Us
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-orange-400 hover:bg-orange-500"
              >
                Our Services
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
                  <path d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                </svg>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-6">
              <div>
                <p className="text-3xl font-bold text-orange-400">15+</p>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Years Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">6+</p>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Vehicle Types
                </p>
              </div>
              <div>
                <p className="text-3xl font-bold text-orange-400">100%</p>
                <p className="text-xs uppercase tracking-wider text-white/60">
                  Professional Install
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="aspect-square w-full rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-6 ring-1 ring-white/10">
                <svg
                  viewBox="0 0 400 400"
                  className="h-full w-full"
                  aria-hidden="true"
                >
                  <defs>
                    <radialGradient id="earth" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#1e4dc4" />
                      <stop offset="100%" stopColor="#06164a" />
                    </radialGradient>
                    <linearGradient id="route" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="150" fill="url(#earth)" />
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="110"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="70"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                  />
                  <path
                    d="M70 220 Q 130 130 200 180 T 340 160"
                    stroke="url(#route)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="6 6"
                  />
                  <circle cx="70" cy="220" r="6" fill="#fbbf24" />
                  <circle cx="200" cy="180" r="6" fill="#fb923c" />
                  <circle cx="340" cy="160" r="10" fill="#f97316">
                    <animate
                      attributeName="r"
                      values="10;16;10"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="340"
                    cy="160"
                    r="16"
                    fill="none"
                    stroke="#f97316"
                    strokeWidth="2"
                    opacity="0.6"
                  >
                    <animate
                      attributeName="r"
                      values="10;28;10"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.6;0;0.6"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-xs uppercase tracking-wider text-orange-300">
                    Status
                  </p>
                  <p className="mt-1 text-sm font-semibold">Live Tracking</p>
                </div>
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="text-xs uppercase tracking-wider text-orange-300">
                    Coverage
                  </p>
                  <p className="mt-1 text-sm font-semibold">24/7 Real-Time</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-xl sm:block">
              GPS + Speed Limiter
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />

      {/* ABOUT THE COMPANY */}
      <section id="about" className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="section-eyebrow">About the Company</span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a1f6b] sm:text-4xl">
              Who We Are
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              <p>
                <strong className="text-[#0a1f6b]">
                  FOLANET SEC TECHNOLOGY ENTERPRISE
                </strong>{" "}
                is a vehicle security and technology company providing reliable
                solutions for vehicle tracking, fleet monitoring and speed
                control.
              </p>
              <p>
                For over 15 years, we have been helping vehicle owners and
                businesses improve the security, visibility and management of
                their vehicles through technology.
              </p>
              <p>
                Our services cover both the supply and professional installation
                of vehicle tracking devices and speed-limiting devices.
              </p>
              <p>
                We understand that your vehicle is more than just a means of
                transportation. It is an important investment and, for many
                businesses, an essential part of daily operations. That is why
                we provide solutions designed to give you greater control and
                visibility over your vehicles.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-md border border-[#0a1f6b] px-5 py-2.5 text-sm font-semibold text-[#0a1f6b] transition hover:bg-[#0a1f6b] hover:text-white"
              >
                Learn More About Us
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4"
                  fill="currentColor"
                >
                  <path d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                t: "Vehicle Security",
                d: "Track and protect your vehicles with reliable technology.",
              },
              {
                t: "Fleet Monitoring",
                d: "Real-time visibility of your commercial vehicle operations.",
              },
              {
                t: "Speed Control",
                d: "Set and enforce safe vehicle speed limits.",
              },
              {
                t: "Professional Install",
                d: "Properly fitted and configured devices for your vehicle.",
              },
            ].map((c) => (
              <div
                key={c.t}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-orange-300 hover:bg-orange-50"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0a1f6b]">
                  {c.t}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a1f6b] sm:text-4xl">
              Why Choose FOLANET SEC TECHNOLOGY ENTERPRISE?
            </h2>
            <p className="mt-4 text-base text-slate-600">
              Experience, expertise and dependable after-sales support — built
              for individuals, businesses and fleet operators.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w) => (
              <div
                key={w.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0a1f6b] to-[#1e4dc4] text-white">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0a1f6b]">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {w.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section id="services" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Our Services</span>
            <h2 className="mt-4 text-3xl font-bold text-[#0a1f6b] sm:text-4xl">
              Comprehensive Vehicle Technology Services
            </h2>
            <p className="mt-4 text-base text-slate-600">
              From supply and installation of GPS trackers to speed limiters and
              fleet solutions — we deliver the complete package.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <div
                key={s.no}
                className="service-card rounded-2xl border border-slate-200 bg-white p-7"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl font-bold text-orange-500">
                    {s.no}
                  </span>
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="currentColor"
                    >
                      <path d="M9 16.2l-3.5-3.5L4 14.2l5 5 11-11-1.5-1.5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#0a1f6b]">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {s.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500"
                        fill="currentColor"
                      >
                        <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.58l7.3-7.3a1 1 0 011.4 0z" />
                      </svg>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                {s.cta && (
                  <Link
                    href={s.href}
                    className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-orange-600 hover:text-orange-700"
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
            ))}
          </div>
        </div>
      </section>

      {/* TRACKING DEVICE SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f6b] to-[#06164a] py-20 text-white">
        <div
          className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-block rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
                GPS Vehicle Tracking
              </span>
              <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                Keep Your Vehicle Within Reach, Even When You're Not There
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/80">
                Your vehicle can be miles away from you, but that doesn't mean
                you have to lose visibility of it. Our GPS tracking solutions
                allow you to monitor your vehicle's location remotely and stay
                informed about its movement.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Whether you own a personal vehicle, operate commercial vehicles
                or manage a large fleet, our tracking solutions give you access
                to information that can help you make better decisions.
              </p>
              <Link
                href="/products"
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                Explore Tracking Devices
              </Link>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-orange-300">
                Key Features
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {TRACKING_FEATURES.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-orange-400/50 hover:bg-white/10"
                  >
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/20 text-orange-300">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M12 2a8 8 0 00-8 8c0 5.4 7 11.5 7.3 11.7a1 1 0 001.4 0C13 21.5 20 15.4 20 10a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" />
                      </svg>
                    </div>
                    <h4 className="mt-3 text-base font-semibold">{f.title}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {f.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPEED LIMITER SECTION */}
      <section className="bg-orange-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="grid gap-4 sm:grid-cols-2">
                {SPEED_BENEFITS.map((b, i) => (
                  <div
                    key={b.title}
                    className="rounded-2xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="text-3xl font-bold text-orange-500">
                      0{i + 1}
                    </span>
                    <h4 className="mt-2 text-base font-semibold text-[#0a1f6b]">
                      {b.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {b.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="section-eyebrow">Speed Limiting Solutions</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0a1f6b] sm:text-4xl">
                Promote Safer Driving With Vehicle Speed Limiting
              </h2>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                Excessive speed can increase the risk and severity of road
                accidents. Our vehicle speed-limiting solutions are designed to
                help vehicle owners and fleet operators maintain controlled
                speeds.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                By setting an appropriate maximum speed, organisations can
                introduce an additional level of control over how their vehicles
                are operated.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/products#speed-limiter"
                  className="inline-flex items-center gap-2 rounded-md bg-[#0a1f6b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#06164a]"
                >
                  View Speed Limiters
                </Link>
                <a
                  href="tel:08109203740"
                  className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  Speak to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLEET MANAGEMENT ARTICLE */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <span className="section-eyebrow">Fleet Management</span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#0a1f6b] sm:text-4xl">
              Take Control of Your Fleet With GPS Tracking
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-700">
              Managing a fleet without visibility can lead to unnecessary costs,
              poor accountability and difficulty monitoring vehicle operations.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              With GPS fleet tracking, businesses can monitor vehicle locations,
              review routes and obtain useful information about vehicle
              movement.
            </p>
            <div className="mt-7">
              <Link
                href="/services#fleet"
                className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Learn About Fleet Solutions
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
              Our solutions can support:
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Real-Time Location Monitoring",
                  text: "Know where your vehicles are.",
                },
                {
                  title: "Route Replay",
                  text: "Review previous routes and vehicle movement.",
                },
                {
                  title: "Geofencing",
                  text: "Monitor when vehicles enter or leave designated areas.",
                },
                {
                  title: "Mileage Reports",
                  text: "Access mileage information for your movable assets.",
                },
                {
                  title: "Fleet Reports",
                  text: "Generate information that can assist with fleet management.",
                },
                {
                  title: "Vehicle Security",
                  text: "Alerts and immobilisation where supported.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h4 className="text-base font-semibold text-[#0a1f6b]">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}