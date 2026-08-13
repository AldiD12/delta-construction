"use client";

import { useEffect, useState } from "react";
import SharedNav from "@/components/SharedNav";
import SharedFooter from "@/components/SharedFooter";
import Breadcrumbs from "@/components/Breadcrumbs";

const reviews = [
  {
    name: "Dylon Scott",
    text: "I had a great experience working with Delta Construction Limited from the beginning to the end of my project. The team was professional, knowledgeable, and always willing to answer my questions. They took the time to understand my requirements and provided practical suggestions that improved the final outcome.",
  },
  {
    name: "Michaela Virtos",
    text: "Absolute game-changers! ⭐⭐⭐⭐⭐ We just had our kitchen and bathroom completely transformed, and the results are stunning. From day one, the team brought a sleek, modern vision to life with flawless execution. They maximized our space, nailed the contemporary aesthetic, and kept the entire process stress-free. Every tile, fixture, and finish looks premium. If you want a top-tier home renovation with zero hassle, this is the company to hire. Highly recommended!",
  },
  {
    name: "saeid modhej",
    text: "I want to thank Delta Construction for its great job. Tani and his team did a brilliant job with high quality finishing in a very short time we had to move to our new house. I strongly recommend them!!!",
  },
  {
    name: "Power Academy UK (Panny)",
    text: "Hi Delta Construction, I just wanted to say a big thank you for the fantastic job your team did fixing the damp issue at my place. You guys were awesome from start to finish. You didn't just spot the problem, but you sorted everything out perfectly — from the roof and gutters to the pointing. The attention to detail and quality of the work really stood out. Thanks to your hard work, my home is now damp-free and I feel confident about the repairs. I'll definitely recommend Delta Construction to anyone who needs construction work done.",
  },
  {
    name: "DMC (David McKenzie-Cook)",
    text: "My family and I would like to extend our utmost appreciation to Tani and his team at Delta Construction. Their professionalism is second to none. Tani himself provided valuable input regarding the interior layout and space saving units to maximise space while still providing an air of spaciousness in smaller areas of access. Since successfully completing our refurbishment, Tani has remained in touch with our family and dealt with a number of smaller projects for us, very often pro bono which shows the passion he has for his work!!!",
  },
  {
    name: "J Paterson",
    text: "Delta did a fantastic job removing a big bay tree from our front garden, and re-building the brick wall that had been damaged by its roots. The work was done quickly but carefully, and the price was great. The guys were very friendly and I will be using Delta again for any future jobs. Very happy to recommend!",
  },
  {
    name: "Keira D",
    text: "So happy with the work they did on our garden. Everything went as planned and was done to really high level and also completed quickly - so happy with the results! Definitely recommend!",
  },
  {
    name: "Elena Tsela",
    text: "We were very skeptical to using someone we didn't know even though recommended. Our usual builder unfortunately couldn't assist. I am extremely happy that we decided to go ahead. Full house renovation and we also extended the ground floor. Everything was great and high quality work. So easy to talk to and they accommodated all our requests and amendments. Highly recommend.",
  },
  {
    name: "Semiha Hoxha",
    text: "Thank you very much guys. I am elderly and I needed help with my garden, a few things done to my extension and the whole brick facade clean and repointed. Tani & team were so helpful. They prioritized me (I was in a hurry as I need to sell my house) and did an amazing job in no time. Cannot thank you enough.",
  },
  {
    name: "zeinab alboghobeish",
    text: "We had oure house renovated with Delta company and they are amazing for price and quality of job. Highly recommend them.",
  },
  {
    name: "Jimmy Michael",
    text: "Tani and his team where brilliant and completed the work in a timely manner. Always professional and delivered a high standard of work. Changed all of the gutters and fascia boards, rendering of two chimney stacks and painting of whole exterior.",
  },
  {
    name: "Annmarie Flynn",
    text: "I have used Delta twice now for rental properties. Both times got a good roof repair carried out at short notice. Very pleasant to deal with, would use again.",
  },
  {
    name: "Michael Thomson",
    text: "Delta are Efficient, and a great quality service, for an affordable price. I would recommend them to anyone.",
  },
  {
    name: "Gary Cassidy",
    text: "Ken has given us quite a bit of work in the past and always keeps us in the loop on anything he thinks we can help with.",
  },
  {
    name: "Matilda Goad",
    text: "I was so pleased with the finished product, so tidy throughout and such nice person to have around thank you!",
  },
];

const GOOGLE_REVIEW_COUNT = 18;

const ratingBreakdown = [
  { stars: 5, count: GOOGLE_REVIEW_COUNT },
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
              5.0 out of 5 &middot; {GOOGLE_REVIEW_COUNT} Google reviews
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
                        GOOGLE_REVIEW_COUNT > 0
                          ? `${(row.count / GOOGLE_REVIEW_COUNT) * 100}%`
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
