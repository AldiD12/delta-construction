"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function CarpentryClient() {
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
      <Breadcrumbs items={[{ name: "Carpentry & Joinery", href: "/carpentry" }]} />

      <article className="blog-article">
        <header className="blog-article-hero">
          <div className="container">
            <div className="blog-article-tags">
              <span className="blog-tag">Carpentry</span>
              <span className="blog-tag">Joinery</span>
              <span className="blog-tag">London</span>
            </div>
            <h1 className="display reveal in">Carpentry &amp; Joinery&nbsp;in&nbsp;London</h1>
            <p className="blog-article-subtitle reveal in d1">The finishing craft. Bespoke fitted furniture, media walls, alcove storage, staircases and all the second-fix detail that turns a renovation from functional into finished.</p>
            <div className="blog-article-meta reveal in d2">
              <span>Delta Construction</span>
              <span>Building London since 2019</span>
            </div>
          </div>
        </header>

        <div className="blog-article-hero-img reveal in d2">
          <img src="/uploads/project-08.jpg" alt="Bespoke slatted timber feature wall with backlit oak shelving by Delta Construction" />
        </div>

        <div className="container blog-article-body">
          <section className="reveal">
            <h2>Made to measure, not off the shelf</h2>
            <p>Every home has awkward spaces that standard furniture never quite fits — the alcoves either side of a chimney breast, the slope of a loft, the run of wall crying out for a media unit. Bespoke joinery is built for <em>your</em> space, to the millimetre, so it looks designed-in rather than bought and squeezed. It&apos;s also where a renovation earns its finish: the detail people run their hand along without realising why it feels right.</p>
          </section>

          <section className="reveal">
            <h2>What we make and fit</h2>
            <ul>
              <li><strong>Fitted wardrobes</strong> — floor-to-ceiling storage, including tricky loft eaves</li>
              <li><strong>Alcove units &amp; shelving</strong> — cabinets and shelves built around chimney breasts</li>
              <li><strong>Media walls</strong> — TV units, panelling and feature walls with integrated lighting</li>
              <li><strong>Kitchen &amp; larder joinery</strong> — islands, larders and bespoke cabinetry</li>
              <li><strong>Window seats &amp; benches</strong> — storage seating that makes use of bays and reveals</li>
              <li><strong>Staircases</strong> — new stairs and balustrades, including for loft conversions</li>
              <li><strong>Doors, skirting &amp; architrave</strong> — hanging, second-fix and finishing carpentry</li>
            </ul>
          </section>

          <section className="reveal">
            <h2>The finishing touch to a bigger project</h2>
            <p>Most of our joinery is built into a larger job — eaves storage in a <Link href="/loft-conversions">loft conversion</Link>, an island and larder in a new <Link href="/kitchens-bathrooms">kitchen</Link>, or a media wall in a fresh <Link href="/extensions">extension</Link>. Because the same team does the building and the joinery, it fits perfectly and the timings line up. But we also take on standalone joinery — a set of fitted wardrobes or an alcove unit — as its own project.</p>
          </section>

          <section className="reveal">
            <h2>Materials &amp; finish</h2>
            <p>The right material depends on the look: painted MDF for crisp, contemporary units; real oak and hardwoods where you want grain and warmth; slatted timber for a feature wall; veneers for a rich finish at a sensible cost. We&apos;ll advise on what delivers the look you&apos;re after within your budget, and finish it properly — because bespoke joinery is only as good as its edges and its spray finish.</p>
          </section>

          <section className="reveal">
            <h2>Why bespoke, built by the builder</h2>
            <p>Because the same team doing the building work also makes and fits your joinery, everything joins up cleanly — the alcove unit sits flush to the plaster because we know how thick it is, the media wall&apos;s wiring is already there because we ran the first fix, the loft eaves storage matches the studwork behind it. There&apos;s no gap between builder and joiner, no measurement mismatch, no waiting for a separate trade to slot in weeks later. Made to your exact space, sprayed properly for a showroom finish, and every project carries our 1-year workmanship guarantee with £2M public liability insurance.</p>
          </section>

          <section className="reveal blog-faq">
            <h2>Frequently asked questions</h2>
            <details><summary>Do you make bespoke furniture, or just fit it?</summary><p>We make and fit to measure — wardrobes, alcove units, media walls, window seats and shelving designed for your space. We can also install supplied units.</p></details>
            <details><summary>Can you build fitted furniture into a loft or extension?</summary><p>Yes — eaves storage in a loft, an island in a new kitchen, a media wall in an extension. We build it in as part of the project.</p></details>
            <details><summary>Do you do doors, skirting and staircases?</summary><p>Yes — hanging doors, architrave, skirting, staircases and all the second-fix carpentry that makes a renovation feel finished.</p></details>
            <details><summary>What materials do you work in?</summary><p>Painted MDF, real oak and hardwoods, veneers and slatted timber — whatever suits the design and budget.</p></details>
            <details><summary>Is the work guaranteed?</summary><p>Yes — 1-year workmanship guarantee and £2M public liability insurance.</p></details>
          </section>

          <section className="reveal">
            <h2>Related</h2>
            <ul>
              <li><Link href="/kitchens-bathrooms">Kitchens &amp; bathrooms</Link> · <Link href="/loft-conversions">Loft conversions</Link> · <Link href="/extensions">House extensions</Link></li>
              <li><Link href="/gallery">See our work</Link> · <Link href="/areas">Areas we cover</Link></li>
            </ul>
          </section>

          <section className="reveal blog-cta-inline">
            <h2>Get a quote for bespoke joinery</h2>
            <p>Tell us what you&apos;re picturing — fitted wardrobes, a media wall, alcove storage or a staircase — and a director will reply within one working day with an honest view on design and cost.</p>
            <Link className="btn" href="/contact">Request a free quote <span className="arr"></span></Link>
          </section>
        </div>
      </article>

      <SharedFooter />
    </>
  );
}
