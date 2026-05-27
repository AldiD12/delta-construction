import Link from "next/link";

export default function SharedFooter() {
  return (
    <footer className="invert">
      <div className="foot-inner">
        <div className="foot-brand">
          <Link href="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <img src="/assets/logo.png" alt="Delta Construction Logo" />
            </span>
            <span className="brand-name">
              Delta<span>&nbsp;Construction Ltd</span>
            </span>
          </Link>
          <p>
            London-based, working UK-wide. Founded 2019 by a project manager and
            a building specialist with 10+ years combined experience across UK
            &amp; Europe.
          </p>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/gallery">Projects</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/areas">Areas we cover</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/reviews">Reviews</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="tel:+447479389996">+44 (0) 7479 389 996</a>
            </li>
            <li>
              <a href="mailto:info@deltaconstructionltd.co.uk">
                info@deltaconstructionltd.co.uk
              </a>
            </li>
            <li>
              7 Southland Way
              <br />
              Hounslow TW3 2RH
            </li>
            <li>
              <Link href="/contact">Request a quote</Link>
            </li>
          </ul>
        </div>
        <div className="foot-col">
          <h5>Accreditations</h5>
          <ul>
            <li>Gas Safe Registered</li>
            <li>NICEIC Approved Contractor</li>
          </ul>
        </div>
      </div>
      <div className="foot-bottom">
        <span>© 2019–2026 Delta Construction Ltd UK · Company No. 00000000</span>
        <span>Photography of our own projects · All rights reserved</span>
        <span>
          <Link href="/privacy">Privacy</Link>
          {" · "}
          <Link href="/terms">Terms</Link>
          {" · "}
          <Link href="/cookies">Cookies</Link>
        </span>
      </div>
    </footer>
  );
}
