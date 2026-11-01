import ContactStrip from "@/components/ContactStrip";

export const metadata = {
  title: "Contact | FOLANET SEC TECHNOLOGY ENTERPRISE",
};

const HELP_TOPICS = [
  "GPS tracker purchase",
  "GPS tracker installation",
  "Speed limiter purchase",
  "Speed limiter installation",
  "Fleet tracking",
  "Vehicle security solutions",
  "Product enquiries",
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1f6b] to-[#06164a] py-20 text-white">
        <div
          className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-orange-500/30 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full bg-orange-500/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300">
            Contact Us
          </span>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Get in Touch With FOLANET SEC TECHNOLOGY ENTERPRISE
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80">
            Have questions about vehicle tracking, speed limiters or
            installation? Our team is available to discuss your requirements
            and help you identify the appropriate solution.
          </p>
        </div>
      </section>

      <ContactStrip />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          {/* CONTACT INFO */}
          <div>
            <span className="section-eyebrow">Contact Information</span>
            <h2 className="mt-4 text-2xl font-bold text-[#0a1f6b] sm:text-3xl">
              FOLANET SEC TECHNOLOGY ENTERPRISE
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700">
              We're available to discuss your vehicle tracking and speed
              limiter needs. Reach us through any of the channels below.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href="tel:08109203740"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-300 hover:bg-orange-50"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.6 1 1 0 01-.25 1z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Call Us
                  </p>
                  <p className="text-base font-semibold text-[#0a1f6b]">
                    08109203740
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/2349059103090"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-300 hover:bg-orange-50"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M20.5 3.5A11.5 11.5 0 003.6 17.3L2 22l4.8-1.5a11.5 11.5 0 0013.7-17zm-8.5 18a9.4 9.4 0 01-4.8-1.3l-.3-.2-2.9.9.9-2.8-.2-.3a9.4 9.4 0 1117.4-5 9.4 9.4 0 01-10.1 8.7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    WhatsApp Us
                  </p>
                  <p className="text-base font-semibold text-[#0a1f6b]">
                    09059103090
                  </p>
                </div>
              </a>

              <a
                href="mailto:folanetsectechnology@gmail.com"
                className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:border-orange-300 hover:bg-orange-50"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.4l8 5 8-5V6H4z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-500">
                    Email Us
                  </p>
                  <p className="text-base font-semibold text-[#0a1f6b]">
                    folanetsectechnology@gmail.com
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
              <h3 className="text-base font-semibold text-[#0a1f6b]">
                Social
              </h3>
              <div className="mt-3 space-y-2 text-sm">
                <p>
                  <span className="font-medium text-slate-700">Instagram:</span>{" "}
                  <a
                    href="https://instagram.com/folanetsectech_enterprise"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    @folanetsectech_enterprise
                  </a>
                </p>
                <p>
                  <span className="font-medium text-slate-700">Facebook:</span>{" "}
                  <a
                    href="https://facebook.com/folanetsectechnology"
                    target="_blank"
                    rel="noreferrer"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    FOLANETSECTECHNOLOGY
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <div>
            <span className="section-eyebrow">Send an Enquiry</span>
            <h2 className="mt-4 text-2xl font-bold text-[#0a1f6b] sm:text-3xl">
              What Can We Help You With?
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700 sm:grid-cols-2">
              {HELP_TOPICS.map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500"
                    fill="currentColor"
                  >
                    <path d="M16.7 5.3a1 1 0 010 1.4l-8 8a1 1 0 01-1.4 0l-4-4a1 1 0 011.4-1.4L8 12.58l7.3-7.3a1 1 0 011.4 0z" />
                  </svg>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <form className="mt-6 space-y-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                    placeholder="080..."
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Vehicle Type
                </label>
                <select className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200">
                  <option>Select vehicle type</option>
                  <option>Car</option>
                  <option>Truck</option>
                  <option>Bus</option>
                  <option>Van</option>
                  <option>Motorcycle</option>
                  <option>Tricycle</option>
                  <option>Fleet (multiple vehicles)</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-200"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
              >
                Send Us an Enquiry
              </button>
              <p className="text-center text-xs text-slate-500">
                Or contact us directly at{" "}
                <a
                  href="tel:08109203740"
                  className="font-semibold text-orange-600"
                >
                  08109203740
                </a>{" "}
                /{" "}
                <a
                  href="mailto:folanetsectechnology@gmail.com"
                  className="font-semibold text-orange-600"
                >
                  folanetsectechnology@gmail.com
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}