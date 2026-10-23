import Link from "next/link";

export default function NaturalClaysPage() {
  return (
    <main className="min-h-screen bg-[#f5efe4] px-6 py-8 text-[#40352b] sm:px-10 sm:py-12 lg:px-24">
      <nav aria-label="Breadcrumb" className="mx-auto max-w-5xl text-xs uppercase tracking-[0.2em] text-[#75685a]">
        <Link className="transition-colors hover:text-[#b49a6a]" href="/">
          Home
        </Link>
        <span aria-hidden="true" className="mx-3 text-[#b49a6a]">
          /
        </span>
        <span>Natural Clays &amp; Powders</span>
      </nav>

      <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center py-20">
        <div className="w-full border border-[#b49a6a]/50 bg-[#f5efe4] p-8 sm:p-14 lg:p-20">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#a75d43]">
            The shop
          </p>
          <h1 className="max-w-2xl font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-7xl">
            Natural Clays &amp; Powders
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-[#75685a] sm:text-lg">
            Discover a focused edit inspired by the earthy textures and simple
            preparation that make a traditional Moroccan body ritual feel
            personal.
          </p>
          <Link
            className="mt-10 inline-flex border-b border-[#b49a6a] pb-2 text-xs uppercase tracking-[0.2em] transition-colors hover:text-[#b49a6a]"
            href="/"
          >
            Return to home
          </Link>
        </div>
      </section>
    </main>
  );
}
