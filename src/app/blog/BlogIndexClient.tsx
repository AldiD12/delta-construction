"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const posts = [
  {
    slug: "house-extension-cost-london",
    title: "How Much Does a House Extension Cost in London? (2026 Guide)",
    excerpt:
      "Real prices from real London projects — single-storey, double-storey, side-return and kitchen extensions broken down by type, size and specification.",
    date: "27 May 2026",
    readTime: "12 min read",
    image: "/uploads/extension-kitchen-glass-roof.jpeg",
    tags: ["Extensions", "Costs"],
  },
  {
    slug: "permitted-development-london",
    title:
      "Permitted Development Rules for Extensions in London (2026 Guide)",
    excerpt:
      "What you can build without planning permission, how far you can extend, and when you need to apply. A practical guide for London homeowners.",
    date: "27 May 2026",
    readTime: "10 min read",
    image: "/assets/modern-extension-exterior.png",
    tags: ["Planning", "Extensions"],
  },
];

export default function BlogIndexClient() {
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
      <SharedNav
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />

      <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />

      <section className="blog-hero">
        <div className="container">
          <span className="eyebrow reveal in">&sect; Blog</span>
          <h1 className="display reveal in" style={{ marginTop: "24px" }}>
            Guides &amp; insights<br />
            <em>from the site.</em>
          </h1>
          <p
            className="reveal in d1"
            style={{
              marginTop: "24px",
              maxWidth: "54ch",
              fontSize: "16px",
              lineHeight: "1.55",
              color: "var(--ink-2)",
            }}
          >
            Practical advice on costs, planning, regulations and construction — written by the team that actually builds the projects.
          </p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="container">
          <div className="blog-grid">
            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="blog-card reveal"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="blog-card-img">
                  <img src={post.image} alt={post.title} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-card-tags">
                    {post.tags.map((t) => (
                      <span key={t} className="blog-tag">{t}</span>
                    ))}
                  </div>
                  <h2 className="blog-card-title">{post.title}</h2>
                  <p className="blog-card-excerpt">{post.excerpt}</p>
                  <div className="blog-card-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        className="cta invert"
        style={{ borderTop: "1px solid var(--rule)" }}
      >
        <div className="cta-bg" aria-hidden="true">
          <img src="/assets/interior-renovation-progress.jpg" alt="" />
        </div>
        <div className="cta-inner">
          <span className="eyebrow reveal">Ready to start?</span>
          <h2 className="reveal d1">
            Let&apos;s build something that <em>outlasts us.</em>
          </h2>
          <p
            className="reveal d2"
            style={{
              fontSize: "17px",
              maxWidth: "50ch",
              textAlign: "center",
              color: "#cfc8bb",
            }}
          >
            Send the drawings, the address, and a rough budget — a director will
            reply within one working day.
          </p>
          <div
            className="reveal d3"
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link className="btn" href="/contact">
              Request a quote <span className="arr"></span>
            </Link>
          </div>
        </div>
      </section>

      <SharedFooter />
    </>
  );
}
