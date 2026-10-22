import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-logo">
        <span className="brand-name">MOROCCAN KENZ</span>
        <span className="brand-tagline">THE ART OF BODY RITUALS</span>
      </Link>

      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/our-story">Our Story</Link>
      </nav>

      <Link href="/cart" className="cart-link">
        <span>Bag</span>
        <span aria-label="0 items in bag">0</span>
      </Link>
    </header>
  );
}
