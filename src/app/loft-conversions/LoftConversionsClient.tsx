"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function LoftConversionsClient() {
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
      <Breadcrumbs items={[{ name: "Loft Conversions", href: "/loft-conversions" }]} />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Loft Conversions</span>
              <span className="blog-tag">Hounslow &amp; West London</span>
            </div>
            <h1 className="display reveal in">Loft Conversions in Hounslow &amp; West London</h1>
            <p className="blog-article-subtitle reveal in d1">The cheapest square metre you&apos;ll ever add — the structure&apos;s already there. We build dormer, hip-to-gable, L-shape and mansard conversions across Hounslow and West London, with structural design, planning and building regulations coordinated.</p>
            <div className="blog-article-meta reveal in d2">
              <span>Delta Construction</span>
              <span>Building London since 2019</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/assets/residential-extension-project.jpg" alt="Loft conversion structural frame with rooflights and steel beam by Delta Construction" />
        </div>

        <div className="container blog-article-body">
          <section className="reveal">
            <h2>Why the loft is the smartest space to gain</h2>
            <p>Unlike an extension, a loft conversion doesn&apos;t touch your garden and doesn&apos;t need new foundations — the walls, roof and footprint are already there. That&apos;s why it&apos;s consistently one of the highest-return improvements in London: a converted loft with a double bedroom and en-suite can add 15–25% to a property&apos;s value. The question is usually just <em>which type</em> your roof can take.</p>
          </section>

          <section className="reveal">
            <h2>The conversions we build</h2>
            <h3>Rooflight (Velux)</h3>
            <p>No change to the roof shape — windows fitted flush into the existing slope. The cheapest and least disruptive, where you already have the head height (around 2.4m at the ridge). Often the only type allowed in a conservation area.</p>
            <h3>Dormer</h3>
            <p>A box projecting from the rear roof, adding both headroom and floor area with proper vertical walls. Usually permitted development on a house, and the workhorse conversion for London&apos;s terraces.</p>
            <h3>Hip-to-gable</h3>
            <p>Converts a sloping (hipped) side into a vertical gable wall, reclaiming the wasted triangle of space. Best on 1930s semis and end-of-terrace homes, often combined with a rear dormer.</p>
            <h3>L-shape dormer</h3>
            <p>Two dormers joined over the main roof and the back-addition of a Victorian terrace — enough for a double bedroom <em>and</em> a separate bathroom. The family-maker.</p>
            <h3>Mansard</h3>
            <p>The rear roof rebuilt near-vertical for a whole new storey with full head height. The most space and the most build — usually needs planning, and the standard in Central London conservation areas.</p>
            <p>Not sure which fits? Our <Link href="/blog/loft-conversion-cost-london">loft conversion cost guide</Link> breaks down each type, what it costs and how to read your own roof.</p>
          </section>

          <section className="reveal">
            <h2>Planning &amp; building regulations — handled</h2>
            <p>Most loft conversions are <strong>permitted development</strong> within volume limits (40m³ for a terraced house, 50m³ for a semi or detached), but flats, maisonettes and conservation-area homes usually need a full planning application. Separately, <strong>every</strong> loft conversion must meet building regulations — the fire-escape and protected-stairway rules that come with adding a third storey, a properly engineered floor structure, and minimum head height over the stairs. We manage both, and building-control sign-off is included as standard — it&apos;s what makes your loft a legal, sellable bedroom.</p>
          </section>

          <section className="reveal">
            <h2>Living through it</h2>
            <p>Most of the work happens above you, accessed from external scaffold, so you can usually stay in the house throughout. The main disruption is a few days of staircase installation. We protect the home, keep the site tidy, and clean up daily.</p>
          </section>

          <section className="reveal">
            <h2>Why build with Delta</h2>
            <ul>
              <li><strong>Director-led</strong>, fixed-price quotes — you know the number before we start.</li>
              <li><strong>Structural design in-house</strong> — the steel and staircase drawn properly before you commit.</li>
              <li><strong>Guaranteed</strong> — 1-year workmanship guarantee, £2M public liability, building-regs sign-off included.</li>
              <li><strong>Local</strong> — Hounslow-based and serving <Link href="/areas/hounslow">Hounslow</Link>, <Link href="/areas/west-london">West London</Link>, <Link href="/areas/chiswick">Chiswick</Link> and <Link href="/areas/ealing">Ealing</Link>.</li>
            </ul>
          </section>

          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>
            <details><summary>How much does a loft conversion cost in London?</summary><p>Typically £30,000–£110,000 by type — rooflight from £30k, dormer £45–70k, hip-to-gable £55–80k, L-shape £60–95k, mansard £65–110k. See the <Link href="/blog/loft-conversion-cost-london">cost guide</Link>.</p></details>
            <details><summary>Which loft conversion suits my house?</summary><p>Depends on roof shape and head height — terraces suit dormers/L-shapes, 1930s semis suit hip-to-gable, conservation homes often need a mansard or rooflight. We assess at a free survey.</p></details>
            <details><summary>Do I need planning permission?</summary><p>Many are permitted development within volume limits, but flats and conservation-area homes usually need to apply. We check and handle it, and always secure a Lawful Development Certificate.</p></details>
            <details><summary>How long does it take?</summary><p>About 6–9 weeks on site for a dormer or hip-to-gable, 8–12 for a mansard, plus 6–10 weeks beforehand for design and approvals.</p></details>
            <details><summary>Can I stay in the house?</summary><p>Usually yes — most work is above you from external scaffold, with limited internal disruption during staircase installation.</p></details>
          </section>

          <section className="reveal">
            <h2>Related</h2>
            <ul>
              <li><Link href="/blog/loft-conversion-cost-london">Loft conversion cost in London (2026 guide)</Link></li>
              <li><Link href="/extensions">House extensions</Link> · <Link href="/kitchens-bathrooms">Kitchens &amp; bathrooms</Link></li>
              <li><Link href="/blog/permitted-development-london">Permitted development rules in London</Link></li>
            </ul>
          </section>

          <section className="reveal blog-cta-inline">
            <h2>Get a fixed-price quote for your loft</h2>
            <p>Send your address and what you want from the space — a director will reply within one working day with an honest view on which conversion your roof can take, the cost and the timeline.</p>
            <Link className="btn" href="/contact">Request a free quote <span className="arr"></span></Link>
          </section>
        </div>
      </article>

      <SharedFooter />
    </>
  );
}
