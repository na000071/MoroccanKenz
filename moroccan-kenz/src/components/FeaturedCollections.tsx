import Link from "next/link";

const collections = [
  {
    title: "Hammam Essentials",
    href: "/shop/hammam-essentials",
  },
  {
    title: "Natural Clays & Powders",
    href: "/shop/natural-clays",
  },
  {
    title: "Body Oils & Moisturisers",
    href: "/shop/body-oils",
  },
];

export default function FeaturedCollections() {
  return (
    <section
      className="featured-collections-section"
      aria-labelledby="featured-collections-heading"
    >
      <div className="featured-collections-intro">
        <h2
          id="featured-collections-heading"
          className="featured-collections-heading"
        >
          Discover Your Ritual
        </h2>
        <p className="featured-collections-description">
          Explore thoughtfully chosen essentials inspired by the timeless
          Moroccan hammam.
        </p>
      </div>

      <div className="featured-collections-grid">
        {collections.map(({ title, href }) => (
          <article
            className="featured-collections-card"
            key={title}
          >
            <div
              className="featured-collections-placeholder"
              role="img"
              aria-label={`${title} placeholder`}
            >
              <span className="featured-collections-visually-hidden">
                {title} image placeholder
              </span>
            </div>
            <div className="featured-collections-card-content">
              <h3 className="featured-collections-card-title">
                {title}
              </h3>
              <Link
                href={href}
                className="featured-collections-link"
              >
                Explore Collection
              </Link>
            </div>
          </article>
        ))}
      </div>
      <style>{`
        .featured-collections-section {
          width: 100%;
          padding: 6rem clamp(1.5rem, 7vw, 6rem) 7.5rem;
          background: #f5efe4;
          color: #40352b;
        }

        .featured-collections-intro {
          max-width: 36rem;
          margin: 0 auto 3.5rem;
          text-align: center;
        }

        .featured-collections-heading {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.25rem, 4vw, 3.25rem);
          font-weight: 400;
          letter-spacing: -0.04em;
          line-height: 1.15;
        }

        .featured-collections-description {
          max-width: 29rem;
          margin: 1.25rem auto 0;
          color: #75685a;
          font-size: 0.95rem;
          line-height: 1.8;
        }

        .featured-collections-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.5rem;
          max-width: 75rem;
          margin: 0 auto;
        }

        .featured-collections-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid rgba(180, 154, 106, 0.45);
          background: #f5efe4;
        }

        .featured-collections-placeholder {
          position: relative;
          height: clamp(16rem, 28vw, 22.5rem);
          overflow: hidden;
          background:
            radial-gradient(
              circle at 22% 24%,
              rgba(255, 255, 255, 0.38) 0 0.18rem,
              transparent 0.22rem
            ),
            radial-gradient(
              circle at 76% 68%,
              rgba(64, 53, 43, 0.1) 0 0.24rem,
              transparent 0.3rem
            ),
            linear-gradient(135deg, #eee5d8 0%, #d8c8b1 52%, #c7af8c 100%);
          background-size: 4.5rem 4.5rem, 5.5rem 5.5rem, 100% 100%;
        }

        .featured-collections-placeholder::after {
          position: absolute;
          inset: 1rem;
          border: 1px solid rgba(245, 239, 228, 0.7);
          content: "";
        }

        .featured-collections-card:nth-child(2)
          .featured-collections-placeholder {
          background:
            radial-gradient(
              circle at 28% 70%,
              rgba(180, 154, 106, 0.24) 0 0.32rem,
              transparent 0.38rem
            ),
            linear-gradient(145deg, #eae1d4 0%, #cdbda6 52%, #bca486 100%);
          background-size: 5rem 5rem, 100% 100%;
        }

        .featured-collections-card:nth-child(3)
          .featured-collections-placeholder {
          background:
            radial-gradient(
              circle at 72% 28%,
              rgba(102, 118, 90, 0.2) 0 0.3rem,
              transparent 0.36rem
            ),
            linear-gradient(145deg, #eee7dc 0%, #d1d0b8 52%, #b6b99b 100%);
          background-size: 5.5rem 5.5rem, 100% 100%;
        }

        .featured-collections-card-content {
          display: flex;
          min-height: 9rem;
          flex: 1;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .featured-collections-card-title {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.35rem, 2vw, 1.65rem);
          font-weight: 400;
          line-height: 1.25;
        }

        .featured-collections-link {
          width: fit-content;
          color: #40352b;
          font-size: 0.65rem;
          letter-spacing: 0.14em;
          line-height: 1.5;
          text-decoration: underline;
          text-decoration-color: #b49a6a;
          text-underline-offset: 0.3rem;
          text-transform: uppercase;
          transition: color 180ms ease;
        }

        .featured-collections-link:hover {
          color: #b49a6a;
        }

        .featured-collections-visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        @media (max-width: 900px) {
          .featured-collections-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .featured-collections-section {
            padding: 4.5rem 1.5rem 5.5rem;
          }

          .featured-collections-grid {
            grid-template-columns: 1fr;
          }

          .featured-collections-placeholder {
            height: 18rem;
          }
        }
      `}</style>
    </section>
  );
}
