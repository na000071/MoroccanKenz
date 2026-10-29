import Link from "next/link";

import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = [
  { label: "Hammam Essentials", href: "/shop/hammam-essentials" },
  { label: "Natural Clays", href: "/shop/natural-clays" },
  { label: "Body Oils", href: "/shop/body-oils" },
];

export default function ShopPage() {
  const availableProducts = products.filter((product) => product.available);

  return (
    <main className="min-h-screen bg-[#f5efe4] px-6 py-8 text-[#40352b] sm:px-10 sm:py-12 lg:px-24">
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-6xl text-xs uppercase tracking-[0.2em] text-[#75685a]"
      >
        <Link className="transition-colors hover:text-[#b49a6a]" href="/">
          Home
        </Link>
        <span aria-hidden="true" className="mx-3 text-[#b49a6a]">
          /
        </span>
        <span aria-current="page">Shop All</span>
      </nav>

      <section className="mx-auto max-w-6xl py-16 sm:py-24">
        <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#a75d43]">
          The collection
        </p>
        <h1 className="max-w-3xl font-serif text-5xl font-normal leading-tight tracking-[-0.04em] sm:text-7xl">
          Shop All
        </h1>
        <p className="mt-7 max-w-2xl text-base leading-8 text-[#75685a] sm:text-lg">
          Explore Moroccan bath and body care inspired by the timeless rhythm
          of the hammam, with considered essentials for every part of your
          ritual.
        </p>

        <nav
          aria-label="Shop categories"
          className="mt-10 flex flex-wrap gap-x-7 gap-y-4 border-y border-[#e4daca] py-5"
        >
          {categories.map((category) => (
            <Link
              key={category.href}
              className="border-b border-[#b49a6a] pb-1 text-xs uppercase tracking-[0.16em] transition-colors hover:text-[#b49a6a]"
              href={category.href}
            >
              {category.label}
            </Link>
          ))}
        </nav>
      </section>

      <section
        aria-labelledby="shop-products-heading"
        className="mx-auto max-w-6xl pb-20 sm:pb-28"
      >
        <h2
          id="shop-products-heading"
          className="mb-8 font-serif text-3xl font-normal sm:text-4xl"
        >
          Our offerings
        </h2>

        {availableProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {availableProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="border border-[#b49a6a]/50 px-8 py-16 text-center sm:px-14 sm:py-24">
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-[#a75d43]">
              Coming soon
            </p>
            <h3 className="font-serif text-3xl font-normal sm:text-4xl">
              Your ritual is being prepared.
            </h3>
            <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-[#75685a]">
              We are carefully preparing the collection. Please return soon to
              discover our Moroccan bath and body essentials.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
