"use client";

import { useEffect, useState } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";
import MultiStepForm from "@/components/MultiStepForm";

export default function ContactClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ── Scroll state ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ── Close menu on Escape ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  /* ── Lock body scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ── Reveal animations ── */
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <SharedNav
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        closeMenu={closeMenu}
      />

      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="container">
          <Breadcrumbs items={[{ name: "Contact", href: "/contact" }]} />

          <h1
            className="display reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              lineHeight: 1.12,
              marginTop: "32px",
            }}
          >
            Get in touch
          </h1>

          <p
            className="reveal d1"
            style={{
              fontFamily: "var(--sans)",
              fontSize: "17px",
              lineHeight: 1.6,
              color: "var(--mute)",
              maxWidth: "54ch",
              marginTop: "20px",
            }}
          >
            Whether you have plans ready to go or just an idea on a napkin, we
            are happy to talk it through. Fill in the form or reach us directly
            — a director replies within one working day.
          </p>
        </div>
      </section>

      {/* ── Contact grid ── */}
      <section style={{ paddingBottom: "80px" }}>
        <div
          className="container contact-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Left — Form */}
          <div className="reveal">
            <MultiStepForm formspreeId="xyzgopqw" />
          </div>

          {/* Right — Details card */}
          <div
            className="reveal d1"
            style={{
              border: "1px solid var(--rule)",
              padding: "32px",
              borderRadius: "2px",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "22px",
                marginBottom: "28px",
                color: "var(--ink)",
              }}
            >
              Contact details
            </h2>

            {/* Phone */}
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mute)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Phone
              </span>
              <a
                href="tel:+447479389996"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "16px",
                  color: "var(--ink)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                +44 (0) 7479 389 996
              </a>
            </div>

            {/* Email */}
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mute)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Email
              </span>
              <a
                href="mailto:info@deltaconstructionltd.co.uk"
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "16px",
                  color: "var(--ink)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
              >
                info@deltaconstructionltd.co.uk
              </a>
            </div>

            {/* Address */}
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mute)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Address
              </span>
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "16px",
                  color: "var(--ink)",
                  lineHeight: 1.5,
                }}
              >
                7 Southland Way, Hounslow TW3 2RH
              </span>
            </div>

            {/* Opening hours */}
            <div style={{ marginBottom: "28px" }}>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--mute)",
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                Opening hours
              </span>
              <span
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "16px",
                  color: "var(--ink)",
                  display: "block",
                  lineHeight: 1.6,
                }}
              >
                Mon&ndash;Fri &nbsp;7:30 am &ndash; 6 pm
                <br />
                Sat &nbsp;8 am &ndash; 1 pm
              </span>
            </div>

            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.5!2d-0.3654!3d51.4685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDI4JzA2LjYiTiAwwrAyMSc1NS40Ilc!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height={280}
              style={{ border: 0, borderRadius: "2px", display: "block" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Delta Construction location on Google Maps"
            />
          </div>
        </div>
      </section>

      <SharedFooter />

      {/* ── Responsive overrides ── */}
      <style jsx global>{`
        .contact-hero {
          padding: 120px 0 48px;
        }
        @media (max-width: 768px) {
          .contact-hero {
            padding: 100px 0 32px;
          }
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </>
  );
}
