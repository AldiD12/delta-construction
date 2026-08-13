"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function RoofingClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <SharedNav scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <Breadcrumbs items={[{ name: "Roofing", href: "/roofing" }]} />

      <article className="blog-article">
        <header className="blog-article-hero roof-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Hounslow roofers</span>
              <span className="blog-tag">West London</span>
            </div>
            <h1 className="display reveal in">Roofers in Hounslow &amp; West London</h1>
            <p className="blog-article-subtitle reveal in d1">Roof repairs, full reroofs, flat roofing, slate and tile, leadwork and chimney work from a Hounslow-based team. We assess the roof first, explain whether a repair or replacement makes sense, and provide clearly scoped options.</p>
            <div className="roof-hero-actions reveal in d2">
              <Link className="btn" href="/contact">Request a free roof assessment <span className="arr" aria-hidden="true"></span></Link>
              <a className="btn ghost" href="tel:+447479389996">Call 07479 389 996</a>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <Image
            src="/uploads/project-03.jpg"
            alt="Slate roof installation in progress with breathable membrane, battens and leadwork by Delta Construction"
            width={1200}
            height={1600}
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
          />
          <p className="roof-photo-caption">Slate roof installation in progress by Delta Construction.</p>
        </div>

        <div className="container blog-article-body">
          <section className="roof-proof-strip reveal" aria-label="Roofing service highlights">
            <div><strong>Hounslow</strong><span>Based in TW3</span></div>
            <div><strong>Free</strong><span>Roof assessment</span></div>
            <div><strong>Clear</strong><span>Written quotation</span></div>
            <div><strong>£2M</strong><span>Public liability cover</span></div>
          </section>

          <section className="reveal roof-local-card">
            <p className="roof-eyebrow">Local roofing company</p>
            <h2>A Hounslow roofer for repairs, reroofs and flat roofs</h2>
            <p>Delta Construction is based at 7 Southland Way, Hounslow. We cover Hounslow and nearby West London areas including Isleworth, Brentford, Feltham, Heston, Cranford, Chiswick and Ealing. The local mix of 1930s semis, terraces, extensions and older properties means the right answer can range from a targeted repair to a complete strip and reroof.</p>
            <p>We look at the covering, underlay, battens, flashings, chimney details and visible structure before recommending the scope. If a sound roof only needs a repair, that is what we quote. See more about our work as <Link href="/areas/hounslow">builders in Hounslow</Link>.</p>
          </section>

          <section className="reveal">
            <h2>Roofing services in Hounslow and West London</h2>
            <div className="roof-service-grid">
              <div className="roof-service-card"><h3>Roof repairs</h3><p>Leaks, slipped or broken tiles, storm damage, ridges, valleys and failed flashings.</p></div>
              <div className="roof-service-card"><h3>Full reroofing</h3><p>Strip and reroof with new underlay, battens, ventilation, covering and finishing details.</p></div>
              <div className="roof-service-card"><h3>Flat roofing</h3><p>EPDM rubber, felt and GRP systems for extensions, dormers, garages and smaller roof areas.</p></div>
              <div className="roof-service-card"><h3>Slate &amp; tile roofing</h3><p>Natural slate, clay tiles and concrete interlocking tiles selected for the building and budget.</p></div>
              <div className="roof-service-card"><h3>Leadwork &amp; chimneys</h3><p>Flashings, valleys, soakers, chimney repointing, repairs, capping and rebuilds.</p></div>
              <div className="roof-service-card"><h3>Gutters, fascias &amp; soffits</h3><p>Repair and replacement of roofline components that carry water safely away from the property.</p></div>
            </div>
          </section>

          <section className="reveal">
            <h2>Repair or replace? Straight advice first</h2>
            <p>A few slipped tiles on an otherwise sound roof normally point to a repair, not a complete replacement. A reroof becomes more sensible when the covering and underlay are near the end of their life, leaks keep returning in different places, or widespread defects make repeated patching poor value.</p>
            <p>Our assessment separates the immediate cause of the problem from the wider condition of the roof. You receive a written scope, so you can see what is included before deciding.</p>

            <h3>Signs your roof needs attention</h3>
            <ul>
              <li>Water stains on upstairs ceilings or in the loft after rain</li>
              <li>Slipped, cracked or missing tiles visible from the ground</li>
              <li>Daylight through the roof when you&apos;re in the loft</li>
              <li>Sagging in the roofline, or granules from tiles collecting in gutters</li>
              <li>Damp or crumbling mortar around the chimney</li>
            </ul>
            <p>Any of these is worth a look before it turns into a bigger — and more expensive — problem. Left alone, a small leak rots timbers and ruins insulation and plaster below.</p>
          </section>

          <section className="reveal roof-process-section">
            <p className="roof-eyebrow">From enquiry to completion</p>
            <h2>What happens after you contact us</h2>
            <div className="roof-process">
              <div className="roof-process-step"><span>01</span><h3>Tell us the problem</h3><p>Share the address, what you have noticed and photos if you have them.</p></div>
              <div className="roof-process-step"><span>02</span><h3>Roof assessment</h3><p>We inspect the relevant roof areas and establish the likely cause and condition.</p></div>
              <div className="roof-process-step"><span>03</span><h3>Written options</h3><p>You receive a clearly scoped quotation for the appropriate repair or replacement work.</p></div>
              <div className="roof-process-step"><span>04</span><h3>Scheduled work</h3><p>Once approved, we agree access and timing, protect the property and complete the work.</p></div>
            </div>
          </section>

          <section className="reveal">
            <h2>What a reroof costs, and how long it takes</h2>
            <p>A typical reroof on a London semi or terrace ranges from around <strong>£6,000–£15,000</strong> depending on size, pitch, access and the covering you choose — concrete interlocking tiles at the value end, natural slate at the premium end. A standard reroof takes <strong>5–8 working days</strong>, weather permitting: scaffold up, strip the old covering, replace felt and battens, lay the new tiles or slate, finish the leadwork and ridge. Repairs are far quicker and cheaper. Every job gets a fixed-price quote after we&apos;ve actually looked at the roof.</p>
          </section>

          <section className="reveal">
            <h2>Roofing work customers mention</h2>
            <div className="roof-review-grid">
              <blockquote className="roof-review">
                <div className="roof-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>“I have used Delta twice now for rental properties. Both times got a good roof repair carried out at short notice. Very pleasant to deal with, would use again.”</p>
                <footer><strong>Annmarie Flynn</strong><span>Verified Google review</span></footer>
              </blockquote>
              <blockquote className="roof-review">
                <div className="roof-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>“You didn&apos;t just spot the problem, but you sorted everything out perfectly — from the roof and gutters to the pointing. The attention to detail and quality of the work really stood out.”</p>
                <footer><strong>Power Academy UK (Panny)</strong><span>Verified Google review</span></footer>
              </blockquote>
            </div>
            <p className="roof-review-link"><Link href="/reviews">Read all customer reviews</Link></p>
          </section>

          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>
            <details><summary>Should I repair or replace my roof?</summary><p>A few slipped tiles on a sound roof is a repair. If it&apos;s 60+ years old, the felt has perished, or leaks keep returning, a reroof is usually more cost-effective. We advise honestly after a free assessment.</p></details>
            <details><summary>How much does a new roof cost?</summary><p>Around £6,000–£15,000 for a typical London semi or terrace, depending on size, pitch, access and material. Repairs cost far less. Fixed-price quote after inspection.</p></details>
            <details><summary>How long does a reroof take?</summary><p>Usually 5–8 working days for a standard semi or terrace, weather permitting.</p></details>
            <details><summary>Do you do flat roofs?</summary><p>Yes — EPDM rubber, felt and fibreglass (GRP) for extensions, dormers and garages, with proper falls and detailing.</p></details>
            <details><summary>Is the work guaranteed?</summary><p>Yes — workmanship guarantee plus manufacturer material warranties (15–30 years), and £2M public liability insurance.</p></details>
            <details><summary>Which areas do your roofers cover?</summary><p>We are based in Hounslow and cover nearby West London, including Isleworth, Brentford, Feltham, Heston, Cranford, Chiswick and Ealing.</p></details>
          </section>

          <section className="reveal">
            <h2>Related</h2>
            <ul>
              <li><Link href="/loft-conversions">Loft conversions</Link> · <Link href="/extensions">House extensions</Link></li>
              <li><Link href="/areas/hounslow">Roofers in Hounslow</Link> · <Link href="/areas/chiswick">Builders in Chiswick</Link> · <Link href="/areas/ealing">Builders in Ealing</Link></li>
            </ul>
          </section>

          <section className="reveal blog-cta-inline">
            <h2>Get a free roof assessment</h2>
            <p>Tell us the address and what you&apos;re seeing — a leak, missing tiles, or a roof that&apos;s just looking tired. We&apos;ll take a proper look and give you honest, fixed-price options. No obligation.</p>
            <div className="roof-final-actions">
              <Link className="btn" href="/contact">Request a free assessment <span className="arr" aria-hidden="true"></span></Link>
              <a className="btn ghost" href="tel:+447479389996">Call 07479 389 996</a>
            </div>
          </section>
        </div>
      </article>

      <SharedFooter />
    </>
  );
}
