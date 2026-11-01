import Link from "next/link";
import Logo from "./Logo";

export default function SiteFooter() {
  return (
    <footer className="bg-[#06164a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Reliable vehicle tracking, fleet monitoring and speed-control
            solutions for over 15 years. Professional installation you can
            trust.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://instagram.com/folanetsectech_enterprise"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2zm0 1.62c-3.15 0-3.5.01-4.74.07-.99.05-1.53.21-1.89.35-.47.18-.81.4-1.17.75-.36.36-.57.7-.75 1.17-.14.36-.3.9-.35 1.89-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05.99.21 1.53.35 1.89.18.47.4.81.75 1.17.36.36.7.57 1.17.75.36.14.9.3 1.89.35 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c.99-.05 1.53-.21 1.89-.35.47-.18.81-.4 1.17-.75.36-.36.57-.7.75-1.17.14-.36.3-.9.35-1.89.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-.99-.21-1.53-.35-1.89-.18-.47-.4-.81-.75-1.17-.36-.36-.7-.57-1.17-.75-.36-.14-.9-.3-1.89-.35C15.5 3.83 15.15 3.82 12 3.82zm0 2.76a5.42 5.42 0 110 10.84 5.42 5.42 0 010-10.84zm0 1.62a3.8 3.8 0 100 7.6 3.8 3.8 0 000-7.6zm5.6-2.85a1.27 1.27 0 110 2.54 1.27 1.27 0 010-2.54z" />
              </svg>
            </a>
            <a
              href="https://facebook.com/folanetsectechnology"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="https://wa.me/2349059103090"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-orange-500"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M20.5 3.5A11.5 11.5 0 003.6 17.3L2 22l4.8-1.5a11.5 11.5 0 0013.7-17zm-8.5 18a9.4 9.4 0 01-4.8-1.3l-.3-.2-2.9.9.9-2.8-.2-.3a9.4 9.4 0 1117.4-5 9.4 9.4 0 01-10.1 8.7zm5.3-7c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.5.1a7.7 7.7 0 01-2.3-1.4 8.4 8.4 0 01-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.5.5 0 000-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5 5 0 001 2.6 11.4 11.4 0 004.4 3.9c.6.3 1.1.4 1.5.5a3.6 3.6 0 001.7.1 2.8 2.8 0 001.8-1.3 2.3 2.3 0 00.2-1.3c-.1-.1-.3-.2-.5-.3z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <Link href="/about" className="hover:text-orange-400">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-400">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-orange-400">
                Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-orange-400">●</span>
              <a href="tel:08109203740" className="hover:text-orange-400">
                08109203740
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-orange-400">●</span>
              <a href="https://wa.me/2349059103090" className="hover:text-orange-400">
                WhatsApp: 09059103090
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 text-orange-400">●</span>
              <a
                href="mailto:folanetsectechnology@gmail.com"
                className="break-all hover:text-orange-400"
              >
                folanetsectechnology@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-orange-400">
            Vehicles We Cover
          </h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Cars", "Trucks", "Buses", "Vans", "Motorcycles", "Tricycles"].map(
              (v) => (
                <span
                  key={v}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/80"
                >
                  {v}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-white/60 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} FOLANET SEC TECHNOLOGY ENTERPRISE. All
            rights reserved.
          </p>
          <p>Smarter Vehicle Security. Better Control.</p>
        </div>
      </div>
    </footer>
  );
}