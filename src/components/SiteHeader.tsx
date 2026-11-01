"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about#who" },
      { label: "Our Mission", href: "/about#mission" },
      { label: "Our Vision", href: "/about#vision" },
      { label: "Why Choose Us", href: "/about#why" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Vehicle Tracking", href: "/services#tracking" },
      { label: "Tracker Installation", href: "/services#installation" },
      { label: "Speed Limiter Installation", href: "/services#speed-limiter" },
      { label: "Fleet Tracking", href: "/services#fleet" },
      { label: "Vehicle Security", href: "/services#security" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Basic Tracking Device", href: "/products#basic" },
      { label: "Advanced Tracking + Voice Monitoring", href: "/products#advanced" },
      { label: "Speed Limiting Devices", href: "/products#speed-limiter" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a1f6b]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a1f6b]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Folanet home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                  pathname === item.href
                    ? "text-orange-400"
                    : "text-white/90 hover:text-orange-400"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-[240px] origin-top translate-y-1 rounded-lg border border-white/10 bg-white p-2 opacity-0 shadow-2xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.label}
                      href={c.href}
                      className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-orange-50 hover:text-[#0a1f6b]"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-600"
          >
            Get a Quote
            <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
            </svg>
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#0a1f6b] lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {NAV.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-white/10"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-1.5 text-sm text-white/80 hover:text-orange-400"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-md bg-orange-500 px-4 py-2 text-center text-base font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}