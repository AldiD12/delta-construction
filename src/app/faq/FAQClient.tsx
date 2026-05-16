"use client";

import { useEffect, useState, useCallback } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

/* ─── FAQ data ─── */
interface FAQItem {
  q: string;
  a: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const categories: FAQCategory[] = [
  {
    title: "Getting started",
    items: [
      {
        q: "How do I get a quote?",
        a: "Call us on +44 7479 389 996, email info@deltaconstructionltd.co.uk, or fill in our online form. A director will arrange a free site survey and return a fixed-price, itemised quote within 48 hours.",
      },
      {
        q: "Do you charge for surveys?",
        a: "No. Your initial site survey and quote are completely free with no obligation.",
      },
      {
        q: "What areas do you cover?",
        a: "We are based in Hounslow and work across the whole of London and the Home Counties — West London, Twickenham, Richmond, North London, South West London and Central London.",
      },
    ],
  },
  {
    title: "During the project",
    items: [
      {
        q: "Will a director be on site?",
        a: "Yes. A founding director visits every site, every week. You also get a dedicated WhatsApp group for real-time updates and photo progress reports.",
      },
      {
        q: "How do you keep the site clean?",
        a: "Our team clears all rubbish daily, lays dust sheets on every surface, and all trades wear uniform. Your home stays liveable throughout the build.",
      },
      {
        q: "Do I need to move out during the work?",
        a: "In most cases, no. We plan the build in phases so you can continue living in your home. For whole-house refurbishments, we will discuss the best arrangement during the survey.",
      },
      {
        q: "How long will my project take?",
        a: "Timelines depend on scope. As a guide: extensions 18–28 weeks, loft conversions 14–20 weeks, roofing 1–4 weeks, brickwork 1–6 weeks, landscaping 2–6 weeks. We provide a strict timeline in your quote and stick to it.",
      },
    ],
  },
  {
    title: "Money & insurance",
    items: [
      {
        q: "Are your quotes fixed-price?",
        a: "Yes. The price we quote is the price you pay. No hidden extras, no last-minute add-ons. Any variations are agreed in writing before work begins.",
      },
      {
        q: "What payment terms do you offer?",
        a: "We typically work to a staged payment schedule linked to project milestones. The exact terms are set out in your contract before work starts.",
      },
      {
        q: "Are you fully insured?",
        a: "Yes, we carry £2 million public liability insurance. Certificates are available on request.",
      },
    ],
  },
  {
    title: "After the project",
    items: [
      {
        q: "Do you provide a guarantee?",
        a: "Every project comes with our 1-year workmanship guarantee as standard. If anything we built develops a fault within that period, we return and fix it at no cost.",
      },
      {
        q: "Do you handle building regulations sign-off?",
        a: "Yes. We manage the full building regulations process from application to final inspection and certification.",
      },
      {
        q: "Can I see examples of your work?",
        a: "Absolutely. Visit our gallery page or ask us for case studies relevant to your project type.",
      },
    ],
  },
];

/* ─── Component ─── */
export default function FAQClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSet, setOpenSet] = useState<Set<string>>(new Set());

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  /* Build a unique key for each question */
  const key = (catIdx: number, itemIdx: number) => `${catIdx}-${itemIdx}`;

  const toggle = (k: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k);
      else next.add(k);
      return next;
    });
  };

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close menu on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* Reveal-on-scroll observer */
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
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
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

      {/* Breadcrumbs */}
      <div className="container">
        <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
      </div>

      {/* Hero */}
      <section className="faq-hero">
        <div className="container">
          <h1
            className="display reveal"
            style={{ fontFamily: "var(--serif)", marginTop: "24px" }}
          >
            Frequently asked questions
          </h1>
          <p
            className="reveal d1"
            style={{
              marginTop: "24px",
              maxWidth: "56ch",
              fontSize: "17px",
              lineHeight: 1.6,
              color: "var(--mute)",
            }}
          >
            Everything you need to know before starting your project.
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section style={{ padding: "0 0 64px" }}>
        <div className="container" style={{ maxWidth: "760px" }}>
          {categories.map((cat, catIdx) => (
            <div key={cat.title} className="reveal">
              {/* Category heading */}
              <h2
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--mute)",
                  marginTop: "48px",
                  marginBottom: "8px",
                  fontWeight: 500,
                }}
              >
                {cat.title}
              </h2>

              {cat.items.map((item, itemIdx) => {
                const k = key(catIdx, itemIdx);
                const isOpen = openSet.has(k);

                return (
                  <div
                    key={k}
                    style={{
                      borderBottom: "1px solid var(--rule)",
                      padding: "20px 0",
                    }}
                  >
                    {/* Question / summary */}
                    <button
                      type="button"
                      onClick={() => toggle(k)}
                      aria-expanded={isOpen}
                      style={{
                        all: "unset",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        cursor: "pointer",
                        fontFamily: "var(--sans)",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "var(--ink)",
                        lineHeight: 1.4,
                        textAlign: "left",
                        boxSizing: "border-box",
                      }}
                    >
                      <span style={{ flex: 1, paddingRight: "16px" }}>
                        {item.q}
                      </span>
                      <span
                        className="faq-chevron"
                        style={{
                          flexShrink: 0,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "28px",
                          height: "28px",
                          fontSize: "18px",
                          fontWeight: 300,
                          color: "var(--accent)",
                          transition: "transform 0.25s ease",
                          transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        }}
                      >
                        +
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      style={{
                        overflow: "hidden",
                        maxHeight: isOpen ? "600px" : "0",
                        opacity: isOpen ? 1 : 0,
                        transition:
                          "max-height 0.35s ease, opacity 0.25s ease",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "15px",
                          color: "var(--mute)",
                          lineHeight: 1.65,
                          paddingTop: "12px",
                          maxWidth: "640px",
                          margin: 0,
                        }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </section>

      {/* Still have a question? CTA */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 0",
          borderTop: "1px solid var(--rule)",
        }}
      >
        <div className="container">
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "28px",
              lineHeight: 1.25,
              marginBottom: "16px",
            }}
          >
            Still have a question?
          </h2>
          <p
            className="reveal d1"
            style={{
              fontSize: "16px",
              color: "var(--mute)",
              marginBottom: "32px",
            }}
          >
            Get in touch&nbsp;&mdash; we reply within one working day.
          </p>
          <div
            className="reveal d2"
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a href="tel:+447479389996" className="btn btn--outline">
              +44 7479 389 996
            </a>
            <a href="/contact" className="btn">
              Get in touch <span className="arr"></span>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />

      {/* Responsive overrides */}
      <style>{`
        .faq-hero { padding: 120px 0 48px; }

        @media (max-width: 768px) {
          .faq-hero { padding: 100px 0 32px; }
        }
      `}</style>
    </>
  );
}
