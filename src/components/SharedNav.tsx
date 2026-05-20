"use client";

import Link from "next/link";

export default function SharedNav({
  scrolled,
  menuOpen,
  setMenuOpen,
  closeMenu,
}: {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  closeMenu: () => void;
}) {
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="Delta Construction">
          <span className="brand-mark" aria-hidden="true">
            <img
              src="/assets/logo.png"
              alt="Delta Construction Logo"
            />
          </span>
          <span className="brand-name">
            Delta<span>&nbsp;Construction</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/gallery" className="dot" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="/areas" onClick={closeMenu}>
            Areas
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
        <div className="nav-right">
          <span className="phone">+44 (0) 7479 389 996</span>
          <Link className="btn ghost" href="/contact">
            Request a quote <span className="arr"></span>
          </Link>
          <button
            className={`mobile-menu-btn ${menuOpen ? "is-open" : ""}`}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} id="mobile-menu">
        <nav>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/gallery" onClick={closeMenu}>
            Projects
          </Link>
          <Link href="/areas" onClick={closeMenu}>
            Areas
          </Link>
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/reviews" onClick={closeMenu}>
            Reviews
          </Link>
          <Link href="/faq" onClick={closeMenu}>
            FAQ
          </Link>
          <Link href="/contact" className="btn" onClick={closeMenu}>
            Request a quote <span className="arr"></span>
          </Link>
        </nav>
        <div className="mobile-menu-footer">
          <a href="tel:+447479389996">+44 (0) 7479 389 996</a>
          <a href="mailto:info@deltaconstructionltd.co.uk">
            info@deltaconstructionltd.co.uk
          </a>
          <span>7 Southland Way · Hounslow TW3 2RH</span>
        </div>
      </div>
    </header>
  );
}
