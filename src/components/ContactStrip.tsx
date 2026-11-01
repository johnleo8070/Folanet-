export default function ContactStrip() {
  return (
    <section className="bg-[#0a1f6b] text-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 lg:grid-cols-3 lg:px-8">
        <a
          href="tel:08109203740"
          className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-500 hover:bg-white/10"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.57 1 1 0 011 1V20a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.6 1 1 0 01-.25 1z" />
            </svg>
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-orange-400">
              Contact Us On
            </p>
            <p className="text-lg font-semibold">08109203740</p>
          </div>
        </a>
        <a
          href="https://wa.me/2349059103090"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-500 hover:bg-white/10"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M20.5 3.5A11.5 11.5 0 003.6 17.3L2 22l4.8-1.5a11.5 11.5 0 0013.7-17zm-8.5 18a9.4 9.4 0 01-4.8-1.3l-.3-.2-2.9.9.9-2.8-.2-.3a9.4 9.4 0 1117.4-5 9.4 9.4 0 01-10.1 8.7zm5.3-7c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-.9 1.2-.3.2-.5.1a7.7 7.7 0 01-2.3-1.4 8.4 8.4 0 01-1.6-2c-.2-.3 0-.5.1-.6l.5-.6.3-.5a.5.5 0 000-.5l-.7-1.7c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5 5 0 001 2.6 11.4 11.4 0 004.4 3.9c.6.3 1.1.4 1.5.5a3.6 3.6 0 001.7.1 2.8 2.8 0 001.8-1.3 2.3 2.3 0 00.2-1.3c-.1-.1-.3-.2-.5-.3z" />
            </svg>
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-orange-400">
              WhatsApp Us On
            </p>
            <p className="text-lg font-semibold">09059103090</p>
          </div>
        </a>
        <a
          href="mailto:folanetsectechnology@gmail.com"
          className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-orange-500 hover:bg-white/10"
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.4l8 5 8-5V6H4zm16 2.6l-8 5-8-5V18h16V8.6z" />
            </svg>
          </span>
          <div>
            <p className="text-xs uppercase tracking-wider text-orange-400">
              Email Us On
            </p>
            <p className="text-lg font-semibold break-all">
              folanetsectechnology@gmail.com
            </p>
          </div>
        </a>
      </div>
    </section>
  );
}