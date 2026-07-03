"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ExtensionsClient() {
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
      <Breadcrumbs items={[{ name: "Extensions", href: "/extensions" }]} />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Extensions</span>
              <span className="blog-tag">London</span>
            </div>
            <h1 className="display reveal in">House Extensions&nbsp;in&nbsp;London</h1>
            <p className="blog-article-subtitle reveal in d1">More space without the move. We design and build single-storey rear, side-return, wrap-around and double-storey extensions across London — director-led, fixed-price, and managed from the first survey to building-regs sign-off.</p>
            <div className="blog-article-meta reveal in d2">
              <span>Delta Construction</span>
              <span>Building London since 2019</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/uploads/project-17.jpg" alt="Completed modern brick rear extension with bifold doors by Delta Construction in London" />
        </div>

        <div className="container blog-article-body">
          <section className="reveal">
            <h2>The right extension for your home</h2>
            <p>The best extension isn&apos;t the biggest — it&apos;s the one that fits your house, your plot and how you actually live. London&apos;s housing stock rewards different approaches: a Victorian terrace wants a side-return, a 1930s semi suits a double-storey rear, a detached home can take a wrap-around. We start by reading the property, not by selling you a standard box.</p>
          </section>

          <section className="reveal">
            <h2>Types of extension we build</h2>
            <h3>Single-storey rear extension</h3>
            <p>The classic: extending into the garden to create an open-plan kitchen-diner with bifold or sliding doors and roof lights. Usually permitted development on a house, so often no full planning application. The most requested project we do.</p>

            <h3>Side-return extension</h3>
            <p>Filling the narrow alley alongside a Victorian or Edwardian terrace — typically 1–1.5m wide, but it transforms a cramped galley kitchen into a wide, light-filled space. Small footprint, huge impact, and usually permitted development.</p>

            <h3>Wrap-around extension</h3>
            <p>Combining a rear and a side-return into an L-shape for the maximum ground-floor space. Ideal where you want a genuinely large kitchen-living-dining room. More often needs planning permission because of the footprint.</p>

            <h3>Double-storey extension</h3>
            <p>Adding downstairs living space and an extra bedroom or bathroom above in one project. It&apos;s the best value per square metre — the expensive elements (foundations and roof) are shared across two floors, so you get roughly double the space for 50–65% more cost than a single-storey.</p>
          </section>

          <section className="reveal">
            <h2>What an extension costs</h2>
            <div className="blog-table-wrap">
              <table className="blog-table">
                <thead>
                  <tr><th>Type</th><th>Typical London cost</th><th>Build time</th></tr>
                </thead>
                <tbody>
                  <tr><td>Side-return</td><td>£55,000–£90,000</td><td>8–12 weeks</td></tr>
                  <tr><td>Single-storey rear (20–30 m²)</td><td>£45,000–£95,000</td><td>10–14 weeks</td></tr>
                  <tr><td>Wrap-around</td><td>£90,000–£150,000</td><td>14–18 weeks</td></tr>
                  <tr><td>Double-storey</td><td>£80,000–£170,000</td><td>14–20 weeks</td></tr>
                </tbody>
              </table>
            </div>
            <p>Ranges are for a completed, mid-specification project in London — a starting point, not a fixed quote. For the full breakdown by size, spec and cost-per-m², read our <Link href="/blog/house-extension-cost-london">house extension cost guide</Link>.</p>
          </section>

          <section className="reveal">
            <h2>How we run the project</h2>
            <p>A good extension is 90% preparation. Here&apos;s how we take it from idea to finished room:</p>
            <ol>
              <li><strong>Free survey &amp; brief</strong> — we visit, measure, and give an honest view on what&apos;s possible and what it&apos;ll cost.</li>
              <li><strong>Design &amp; drawings</strong> — architectural plans and a structural engineer&apos;s calculations for the steelwork.</li>
              <li><strong>Planning or permitted development</strong> — we submit the application or secure a Lawful Development Certificate.</li>
              <li><strong>Party wall</strong> — where you share walls, we coordinate the party-wall awards with neighbours.</li>
              <li><strong>Fixed-price build</strong> — groundwork, structure, roof, glazing, first and second fix, plastering and finishes.</li>
              <li><strong>Building control &amp; handover</strong> — final inspection, completion certificate, snagging and clean handover.</li>
            </ol>
          </section>

          <section className="reveal">
            <h2>Planning permission — do you need it?</h2>
            <p>Many single-storey rear and side-return extensions are <strong>permitted development</strong> and need no planning application, within size and height limits. But conservation areas, flats and maisonettes, and homes that have already been extended usually do need to apply. We check your exact address first — and always secure a Lawful Development Certificate even when permission isn&apos;t required, because your future buyer&apos;s solicitor will ask for it. Read our <Link href="/blog/permitted-development-london">guide to permitted development in London</Link> for the full rules.</p>
          </section>

          <section className="reveal">
            <h2>Why build with Delta</h2>
            <ul>
              <li><strong>Director-led</strong> — you deal with the person responsible for the job, not a call centre.</li>
              <li><strong>Fixed-price quotes</strong> — itemised and honest, so you know the number before we start.</li>
              <li><strong>Everything under one roof</strong> — design, planning, structure, party wall and build, all coordinated.</li>
              <li><strong>Guaranteed</strong> — 1-year workmanship guarantee, £2M public liability insurance, building-regs sign-off as standard.</li>
              <li><strong>Local</strong> — based in Hounslow, working across <Link href="/areas">West, South West, North, South East, East and Central London</Link>.</li>
            </ul>
          </section>

          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>
            <details><summary>How much does a house extension cost in London?</summary><p>A single-storey rear extension typically costs £45,000–£95,000, a side-return £55,000–£90,000, and a double-storey £80,000–£170,000 — roughly £2,200–£4,500 per m². We give a fixed-price quote after a free survey. See our <Link href="/blog/house-extension-cost-london">extension cost guide</Link>.</p></details>
            <details><summary>Do I need planning permission for an extension?</summary><p>Many single-storey rear and side-return extensions are permitted development and need no application, within size limits. Conservation areas, flats and previously-extended homes usually need to apply. We check and handle it either way.</p></details>
            <details><summary>How long does an extension take?</summary><p>Around 10–14 weeks on site for a single-storey rear, 8–12 for a side-return, 14–20 for a double-storey — plus 6–10 weeks beforehand for design and approvals.</p></details>
            <details><summary>Do you handle planning, structure and party wall?</summary><p>Yes — drawings, structural calculations, planning/permitted-development, party-wall awards and building-regs sign-off are all managed under one roof.</p></details>
            <details><summary>Are you insured and guaranteed?</summary><p>Yes — 1-year workmanship guarantee, £2M public liability insurance, and building-regulations completion sign-off as standard.</p></details>
          </section>

          <section className="reveal">
            <h2>Related</h2>
            <ul>
              <li><Link href="/blog/house-extension-cost-london">How much does a house extension cost in London? (2026 guide)</Link></li>
              <li><Link href="/loft-conversions">Loft conversions</Link> · <Link href="/kitchens-bathrooms">Kitchens &amp; bathrooms</Link></li>
              <li><Link href="/blog/permitted-development-london">Permitted development rules in London</Link></li>
            </ul>
          </section>

          <section className="reveal blog-cta-inline">
            <h2>Get a fixed-price quote for your extension</h2>
            <p>Send us your address and a rough idea of what you want — a director will reply within one working day with an honest view on cost, timeline and whether you&apos;ll need planning. No obligation.</p>
            <Link className="btn" href="/contact">Request a free quote <span className="arr"></span></Link>
          </section>
        </div>
      </article>

      <SharedFooter />
    </>
  );
}
