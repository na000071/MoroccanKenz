
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">ROOTED IN MOROCCAN TRADITION</p>

        <h1>
          Discover the
          <br />
          beauty of ritual.
        </h1>

        <p className="hero-description">
          Thoughtfully chosen bath and body essentials
          inspired by the timeless Moroccan hammam.
        </p>

        <Link href="/shop" className="hero-button">
          EXPLORE THE COLLECTION
        </Link>
      </div>

      <div className="hero-image">
        <Image
          src="/images/moroccan-hero.png"
          alt="Moroccan bath and body products arranged for a traditional hammam ritual"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 55vw"
        />
        <span className="image-caption">
          A MOMENT OF CARE. A TOUCH OF MOROCCO.
        </span>
      </div>
    </section>
  );
}
