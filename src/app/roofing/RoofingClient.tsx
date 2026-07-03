"use client";

import { useEffect, useState } from "react";
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
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Roofing</span>
              <span className="blog-tag">West London</span>
            </div>
            <h1 className="display reveal in">Roofing&nbsp;in&nbsp;London</h1>
            <p className="blog-article-subtitle reveal in d1">Repairs, full reroofs, slate and tile, flat roofs, leadwork and chimney work across West London. Honest advice on whether to repair or replace — and a roof that&apos;s finished properly, not patched.</p>
            <div className="blog-article-meta reveal in d2">
              <span>Delta Construction</span>
              <span>Hounslow-based</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/uploads/project-03.jpg" alt="New natural slate roof with leadwork and ridge detail by Delta Construction" />
        </div>

        <div className="container blog-article-body">
          <section className="reveal">
            <h2>Repair or replace? Straight advice first</h2>
            <p>The most important roofing decision is also the one some firms get wrong on purpose. A few slipped tiles on a sound roof is a repair — not a reason to sell you a whole new roof. But if your roof is 60+ years old, the felt underneath has perished, or you&apos;re getting the same leak back every winter, patching is throwing good money after bad and a reroof is the honest answer. We inspect, tell you which it is, and put it in writing.</p>
          </section>

          <section className="reveal">
            <h2>What we do</h2>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead><tr><th>Service</th><th>What it covers</th></tr></thead>
                <tbody>
                  <tr><td>Roof repairs</td><td>Slipped/broken tiles, leaks, storm damage, ridge and flashing repairs</td></tr>
                  <tr><td>Reroofing</td><td>Full strip and reroof — new felt, battens and covering</td></tr>
                  <tr><td>Slate &amp; tile</td><td>Natural slate, clay and concrete interlocking tiles</td></tr>
                  <tr><td>Flat roofing</td><td>EPDM rubber, felt and fibreglass (GRP) with proper falls</td></tr>
                  <tr><td>Leadwork</td><td>Flashings, valleys, chimney soakers and detailing</td></tr>
                  <tr><td>Chimney work</td><td>Repointing, rebuilds, flashing and capping</td></tr>
                  <tr><td>Gutters, fascias &amp; soffits</td><td>Supply and installation, and clearing/repairs</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="reveal">
            <h2>Signs your roof needs attention</h2>
            <ul>
              <li>Water stains on upstairs ceilings or in the loft after rain</li>
              <li>Slipped, cracked or missing tiles visible from the ground</li>
              <li>Daylight through the roof when you&apos;re in the loft</li>
              <li>Sagging in the roofline, or granules from tiles collecting in gutters</li>
              <li>Damp or crumbling mortar around the chimney</li>
            </ul>
            <p>Any of these is worth a look before it turns into a bigger — and more expensive — problem. Left alone, a small leak rots timbers and ruins insulation and plaster below.</p>
          </section>

          <section className="reveal">
            <h2>What a reroof costs, and how long it takes</h2>
            <p>A typical reroof on a London semi or terrace ranges from around <strong>£6,000–£15,000</strong> depending on size, pitch, access and the covering you choose — concrete interlocking tiles at the value end, natural slate at the premium end. A standard reroof takes <strong>5–8 working days</strong>, weather permitting: scaffold up, strip the old covering, replace felt and battens, lay the new tiles or slate, finish the leadwork and ridge. Repairs are far quicker and cheaper. Every job gets a fixed-price quote after we&apos;ve actually looked at the roof.</p>
          </section>

          <section className="reveal">
            <h2>Why build with Delta</h2>
            <ul>
              <li><strong>Honest repair-vs-replace advice</strong> — we won&apos;t sell you a roof you don&apos;t need.</li>
              <li><strong>Finished properly</strong> — correct felt, battens, ventilation and leadwork, not a quick patch.</li>
              <li><strong>Guaranteed</strong> — workmanship guarantee plus manufacturer material warranties (15–30 years), £2M public liability insurance.</li>
              <li><strong>Local &amp; responsive</strong> — our yard is in Hounslow, so for urgent leaks and storm damage we can often attend quickly. <Link href="/areas/hounslow">Serving Hounslow</Link> and across West London.</li>
            </ul>
          </section>

          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>
            <details><summary>Should I repair or replace my roof?</summary><p>A few slipped tiles on a sound roof is a repair. If it&apos;s 60+ years old, the felt has perished, or leaks keep returning, a reroof is usually more cost-effective. We advise honestly after a free assessment.</p></details>
            <details><summary>How much does a new roof cost?</summary><p>Around £6,000–£15,000 for a typical London semi or terrace, depending on size, pitch, access and material. Repairs cost far less. Fixed-price quote after inspection.</p></details>
            <details><summary>How long does a reroof take?</summary><p>Usually 5–8 working days for a standard semi or terrace, weather permitting.</p></details>
            <details><summary>Do you do flat roofs?</summary><p>Yes — EPDM rubber, felt and fibreglass (GRP) for extensions, dormers and garages, with proper falls and detailing.</p></details>
            <details><summary>Is the work guaranteed?</summary><p>Yes — workmanship guarantee plus manufacturer material warranties (15–30 years), and £2M public liability insurance.</p></details>
          </section>

          <section className="reveal">
            <h2>Related</h2>
            <ul>
              <li><Link href="/loft-conversions">Loft conversions</Link> · <Link href="/extensions">House extensions</Link></li>
              <li><Link href="/areas/hounslow">Builders in Hounslow</Link> · <Link href="/areas">All areas we cover</Link></li>
            </ul>
          </section>

          <section className="reveal blog-cta-inline">
            <h2>Get a free roof assessment</h2>
            <p>Tell us the address and what you&apos;re seeing — a leak, missing tiles, or a roof that&apos;s just looking tired. We&apos;ll take a proper look and give you honest, fixed-price options. No obligation.</p>
            <Link className="btn" href="/contact">Request a free assessment <span className="arr"></span></Link>
          </section>
        </div>
      </article>

      <SharedFooter />
    </>
  );
}
