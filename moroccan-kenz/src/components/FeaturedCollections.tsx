import Image from "next/image";
import Link from "next/link";

const collections = [
  {
    title: "Hammam Essentials",
    image: "/images/moroccan-hero.png",
    alt: "Moroccan hammam bath and body ritual",
    placeholder: false,
  },
  {
    title: "Natural Clays & Powders",
    image: null,
    alt: "",
    placeholder: true,
  },
  {
    title: "Body Oils & Moisturisers",
    image: null,
    alt: "",
    placeholder: true,
  },
];

export default function FeaturedCollections() {
  return (
    <section
      className="featured-collections"
      aria-labelledby="featured-collections-title"
    >
      <div className="featured-collections-intro">
        <p className="eyebrow">THE MOROCCAN KENZ EDIT</p>
        <h2 id="featured-collections-title">Discover Your Ritual</h2>
        <p>
          Explore thoughtfully chosen essentials inspired by the timeless
          Moroccan hammam.
        </p>
      </div>

      <div className="featured-collections-grid">
        {collections.map((collection) => (
          <article className="collection-card" key={collection.title}>
            <div className="collection-card-image">
              {collection.image ? (
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 42vw, 30vw"
                />
              ) : (
                <div
                  className={`collection-placeholder ${
                    collection.title === "Body Oils & Moisturisers"
                      ? "collection-placeholder-oils"
                      : ""
                  }`}
                  role="img"
                  aria-label={`${collection.title} image coming soon`}
                />
              )}
            </div>
            <div className="collection-card-content">
              <h3>{collection.title}</h3>
              <Link href="/shop" className="collection-card-link">
                Explore Collection <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
