"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function KitchensBathroomsClient() {
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
      <Breadcrumbs items={[{ name: "Kitchens & Bathrooms", href: "/kitchens-bathrooms" }]} />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Kitchens</span>
              <span className="blog-tag">Bathrooms</span>
              <span className="blog-tag">London</span>
            </div>
            <h1 className="display reveal in">Kitchens &amp; Bathrooms&nbsp;in&nbsp;London</h1>
            <p className="blog-article-subtitle reveal in d1">The two rooms that sell a home — and the two where fit and finish show most. We design, supply and install kitchens and bathrooms across London, and build the extensions that make them open-plan.</p>
            <div className="blog-article-meta reveal in d2">
              <span>Delta Construction</span>
              <span>Building London since 2019</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/uploads/project-15.jpg" alt="Finished open-plan kitchen with marble island and herringbone floor by Delta Construction" />
        </div>

        <div className="container blog-article-body">
          <section className="reveal">
            <h2>Kitchens</h2>
            <p>Most of the kitchens we build aren&apos;t just a new set of units — they&apos;re part of opening the ground floor up. A rear or side-return extension, the wall between kitchen and dining room removed, roof lights and doors to the garden, and a kitchen designed around how the family actually uses the space. Because we do the building work <em>and</em> the fit, the structural steel, the plastering, the electrics and the units all line up.</p>
            <ul>
              <li><strong>Kitchen extensions</strong> — open-plan kitchen-diners as part of a rear or side-return extension</li>
              <li><strong>Kitchen fitting</strong> — supply and install, or fit a kitchen you&apos;ve bought</li>
              <li><strong>Bespoke joinery</strong> — made-to-measure cabinetry, islands, larders and media units</li>
              <li><strong>Worktops &amp; splashbacks</strong> — quartz, granite and porcelain</li>
              <li><strong>Full first &amp; second fix</strong> — plumbing, electrics, tiling and flooring</li>
            </ul>
          </section>

          <section className="reveal">
            <h2>Bathrooms</h2>
            <p>Bathrooms are small rooms where the details are everything — level floors, tanked walls, tidy tiling and pipework that&apos;s been thought through. We install family bathrooms, en-suites and wet rooms, all properly waterproofed and finished.</p>
            <ul>
              <li><strong>Bathroom installation</strong> — full design, supply and fit</li>
              <li><strong>En-suites</strong> — for loft conversions, master bedrooms and guest rooms</li>
              <li><strong>Wet rooms</strong> — fully tanked and waterproofed, with proper falls</li>
              <li><strong>Tiling &amp; waterproofing</strong> — tanking, tiling and finishing to a high standard</li>
              <li><strong>Plumbing &amp; heating</strong> — including underfloor heating and towel rails</li>
            </ul>
          </section>

          <section className="reveal">
            <h2>How long it takes</h2>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead><tr><th>Project</th><th>Typical time</th></tr></thead>
                <tbody>
                  <tr><td>Bathroom refit</td><td>2–3 weeks</td></tr>
                  <tr><td>En-suite</td><td>1–2 weeks</td></tr>
                  <tr><td>Kitchen fit</td><td>2–4 weeks</td></tr>
                  <tr><td>Kitchen extension + fit</td><td>fitted in the final weeks of the build</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="reveal">
            <h2>How we deliver kitchens and bathrooms</h2>
            <p>Because the same team does the building work AND the fit — the structural steel, the plastering, the plumbing runs, the electrics and the units — everything lines up. There&apos;s no handover gap between builder and kitchen or bathroom fitter, no last-minute calibration on where the sockets or waste pipes need to be, and one director accountable from first survey to snagging. We can supply and install a complete kitchen or bathroom, or fit units and suites you&apos;ve bought elsewhere. Fixed-price, 1-year workmanship guarantee, £2M public liability insurance, and building-regulations sign-off where structural or notifiable electrical/plumbing work is involved.</p>
          </section>

          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>
            <details><summary>Do you supply the kitchen and bathroom, or just fit?</summary><p>Both — full design, supply and install, or fit-only for items you&apos;ve bought. Doing it under one roof keeps the building work and finishing aligned.</p></details>
            <details><summary>Can you build a kitchen extension at the same time?</summary><p>Yes — most of our kitchens are part of a rear or side-return extension, handled as one coordinated project.</p></details>
            <details><summary>How long does it take?</summary><p>A bathroom refit is 2–3 weeks, a kitchen fit 2–4 weeks; with an extension the kitchen is fitted in the final weeks of the build.</p></details>
            <details><summary>Do you do wet rooms and en-suites?</summary><p>Yes — fully tanked wet rooms and en-suites for lofts and master bedrooms, with all plumbing, tiling and waterproofing done to standard.</p></details>
            <details><summary>Is the work guaranteed?</summary><p>Yes — 1-year workmanship guarantee, £2M public liability insurance, and building-regs sign-off where required.</p></details>
          </section>

          <section className="reveal">
            <h2>Related</h2>
            <ul>
              <li><Link href="/extensions">House extensions</Link> · <Link href="/loft-conversions">Loft conversions</Link></li>
              <li><Link href="/blog/house-extension-cost-london">House extension cost guide</Link> · <Link href="/areas">Areas we cover</Link></li>
            </ul>
          </section>

          <section className="reveal blog-cta-inline">
            <h2>Get a fixed-price quote</h2>
            <p>Tell us what you&apos;re planning — a new kitchen, a bathroom refit, or an open-plan kitchen extension — and a director will reply within one working day with honest costs and a timeline.</p>
            <Link className="btn" href="/contact">Request a free quote <span className="arr"></span></Link>
          </section>
        </div>
      </article>

      <SharedFooter />
    </>
  );
}
