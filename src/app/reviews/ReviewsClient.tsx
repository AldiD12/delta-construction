"use client";

import { useEffect, useState } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const reviews = [
  {
    name: "saeid modhej",
    text: "Great build quality and very professional team. They completed our extension on time and the finish was excellent. Highly recommend Delta Construction.",
  },
  {
    name: "DMC",
    text: "Fantastic job on our loft conversion. The team was punctual, tidy and the quality of work exceeded our expectations. Would definitely use again.",
  },
  {
    name: "J Paterson",
    text: "We used Delta for a full house refurbishment and couldn’t be happier. Great communication throughout and the attention to detail was superb.",
  },
  {
    name: "Keira D",
    text: "Excellent roofing work. They were quick to respond, gave a fair quote and the work was done to a very high standard. Very impressed.",
  },
  {
    name: "Elena Tsela",
    text: "Delta Construction transformed our kitchen extension beautifully. Professional from start to finish with minimal disruption to our daily life.",
  },
  {
    name: "Semiha Hoxha",
    text: "Amazing brickwork on our garden wall and patio. The team was friendly, hardworking and left everything spotless. Couldn’t ask for more.",
  },
  {
    name: "Sam M",
    text: "Brilliant loft conversion. Aldi and his team were professional, reliable and delivered exactly what was promised. The quality speaks for itself.",
  },
  {
    name: "James R",
    text: "Used Delta for structural work and an extension. Outstanding quality and project management. They handled everything including party wall agreements.",
  },
  {
    name: "Laura K",
    text: "Our bathroom renovation looks incredible. They managed the plumbing, tiling and everything in between. Finished ahead of schedule too.",
  },
  {
    name: "Mark Stevens",
    text: "Aldi is a true professional. Our rear extension was a big project but Delta handled it brilliantly from planning to completion.",
  },
  {
    name: "Sarah W",
    text: "We had our roof completely redone and the result is fantastic. Fair price, great team, zero hassle. Will be using them again for our extension.",
  },
  {
    name: "Tom G",
    text: "Exceptional brickwork and repointing on our Victorian terrace. They matched the original London stock perfectly. Genuinely impressed with the craftsmanship.",
  },
  {
    name: "Nadia P",
    text: "Delta Construction turned our dated ground floor into an open-plan dream. The underfloor heating was a game changer. Highly recommended.",
  },
  {
    name: "Chris L",
    text: "Reliable, skilled and easy to work with. Our loft conversion added real value to our home. The whole process was smooth and stress-free.",
  },
  {
    name: "Rachel D",
    text: "We chose Delta for our landscaping and driveway. Beautiful resin-bound finish and the retaining wall is solid. Very happy with the result.",
  },
  {
    name: "Omar A",
    text: "Full house refurbishment completed to an exceptional standard. Every room was finished with care and precision. Aldi kept us informed at every stage.",
  },
];

const ratingBreakdown = [
  { stars: 5, count: 16 },
  { stars: 4, count: 0 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

export default function ReviewsClient() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

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

  const totalReviews = reviews.length;

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
        <Breadcrumbs items={[{ name: "Reviews", href: "/reviews" }]} />
      </div>

      {/* Hero */}
      <section className="reviews-hero">
        <div className="container">
          <h1
            className="display reveal"
            style={{ fontFamily: "var(--serif)", marginTop: "24px" }}
          >
            What our clients say
          </h1>
          <div
            className="reveal d1"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginTop: "24px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "flex",
                gap: "2px",
                fontSize: "22px",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: "#f5a623" }}>
                  &#9733;
                </span>
              ))}
            </span>
            <span
              style={{
                fontSize: "17px",
                color: "var(--mute)",
                lineHeight: 1.5,
              }}
            >
              5.0 out of 5 &middot; {totalReviews} Google reviews
            </span>
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="reviews-grid-section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <div
                key={review.name}
                className={`review-card reveal`}
                style={{ transitionDelay: `${(i % 6) * 0.06}s` }}
              >
                {/* Stars */}
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    fontSize: "16px",
                    lineHeight: 1,
                    marginBottom: "16px",
                  }}
                  aria-label="5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, si) => (
                    <span key={si} style={{ color: "#f5a623" }}>
                      &#9733;
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: "var(--ink-2, var(--mute))",
                    margin: "0 0 20px",
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Reviewer */}
                <div
                  style={{
                    marginTop: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: 1.4,
                    }}
                  >
                    {review.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      color: "var(--mute)",
                    }}
                  >
                    Google Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google rating breakdown */}
      <section className="reviews-breakdown">
        <div className="container" style={{ maxWidth: "540px" }}>
          <h2
            className="reveal"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "24px",
              lineHeight: 1.25,
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Rating breakdown
          </h2>
          <div className="reveal d1">
            {ratingBreakdown.map((row) => (
              <div
                key={row.stars}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "10px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "13px",
                    minWidth: "52px",
                    color: "var(--mute)",
                  }}
                >
                  {row.stars} star{row.stars !== 1 ? "s" : ""}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: "8px",
                    backgroundColor: "var(--rule)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width:
                        totalReviews > 0
                          ? `${(row.count / totalReviews) * 100}%`
                          : "0%",
                      height: "100%",
                      backgroundColor: "var(--accent)",
                      borderRadius: "4px",
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "13px",
                    minWidth: "24px",
                    textAlign: "right",
                    color: "var(--mute)",
                  }}
                >
                  {row.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="reviews-cta"
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
            Ready to join our happy clients?
          </h2>
          <p
            className="reveal d1"
            style={{
              fontSize: "16px",
              color: "var(--mute)",
              marginBottom: "32px",
            }}
          >
            Get a free, no-obligation quote within 48 hours.
          </p>
          <a href="/contact" className="btn reveal d2">
            Get in touch <span className="arr"></span>
          </a>
        </div>
      </section>

      <SharedFooter />

      {/* Scoped styles */}
      <style>{`
        .reviews-hero {
          padding: 120px 0 48px;
        }

        .reviews-grid-section {
          padding: 0 0 64px;
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .review-card {
          border: 1px solid var(--rule);
          border-radius: 2px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .review-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
        }

        .reviews-breakdown {
          padding: 64px 0;
          border-top: 1px solid var(--rule);
        }

        @media (max-width: 980px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .reviews-hero {
            padding: 100px 0 32px;
          }
          .reviews-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
