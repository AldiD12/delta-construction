
"use client";
import { useEffect, useState } from "react";

const allMedia = [
  // Uploads — project photos
  { src: "/uploads/project-01.jpg", type: "image" as const, label: "N° 01", loc: "London · 2026" },
  { src: "/uploads/project-02.jpg", type: "image" as const, label: "N° 02", loc: "London · 2026" },
  { src: "/uploads/project-03.jpg", type: "image" as const, label: "N° 03", loc: "London · 2026" },
  { src: "/uploads/project-04.jpg", type: "image" as const, label: "N° 04", loc: "London · 2026" },
  { src: "/uploads/project-05.jpg", type: "image" as const, label: "N° 05", loc: "London · 2026" },
  { src: "/uploads/project-06.jpg", type: "image" as const, label: "N° 06", loc: "London · 2026" },
  { src: "/uploads/project-07.jpg", type: "image" as const, label: "N° 07", loc: "London · 2026" },
  { src: "/uploads/project-08.jpg", type: "image" as const, label: "N° 08", loc: "London · 2026" },
  { src: "/uploads/project-09.jpg", type: "image" as const, label: "N° 09", loc: "London · 2026" },
  { src: "/uploads/project-10.jpg", type: "image" as const, label: "N° 10", loc: "London · 2026" },
  { src: "/uploads/project-11.jpg", type: "image" as const, label: "N° 11", loc: "London · 2026" },
  { src: "/uploads/project-12.jpg", type: "image" as const, label: "N° 12", loc: "London · 2025" },
  { src: "/uploads/project-13.jpg", type: "image" as const, label: "N° 13", loc: "London · 2025" },
  { src: "/uploads/project-14.jpg", type: "image" as const, label: "N° 14", loc: "London · 2025" },
  { src: "/uploads/project-15.jpg", type: "image" as const, label: "N° 15", loc: "London · 2025" },
  { src: "/uploads/project-16.jpg", type: "image" as const, label: "N° 16", loc: "London · 2024" },
  { src: "/uploads/project-17.jpg", type: "image" as const, label: "N° 17", loc: "London · 2024" },
  // Uploads — site videos
  { src: "/uploads/site-video-01.mp4", type: "video" as const, label: "Site reel 01", loc: "London" },
  { src: "/uploads/site-video-02.mp4", type: "video" as const, label: "Site reel 02", loc: "London" },
  { src: "/uploads/site-video-03.mp4", type: "video" as const, label: "Site reel 03", loc: "London" },
  // Assets — detailed project photos
  { src: "/assets/01-kitchen-navy.jpg", type: "image" as const, label: "Navy kitchen", loc: "Bespoke joinery" },
  { src: "/assets/02-roofing-slate.jpg", type: "image" as const, label: "Slate roofing", loc: "Natural Welsh slate" },
  { src: "/assets/03-underfloor.jpg", type: "image" as const, label: "Underfloor heating", loc: "Wet UFH install" },
  { src: "/assets/04-bathroom-sage.jpg", type: "image" as const, label: "Sage bathroom", loc: "Full fit-out" },
  { src: "/assets/05-kitchen-shaker.jpg", type: "image" as const, label: "Shaker kitchen", loc: "Handmade cabinetry" },
  { src: "/assets/06-feature-wall.jpg", type: "image" as const, label: "Feature wall", loc: "Interior detail" },
  { src: "/assets/building-foundation-work.jpg", type: "image" as const, label: "Foundation work", loc: "Structural" },
  { src: "/assets/concrete-framework-construction.jpg", type: "image" as const, label: "Framework", loc: "Concrete & steel" },
  { src: "/assets/construction-detail-work.jpg", type: "image" as const, label: "Detail work", loc: "On-site finish" },
  { src: "/assets/interior-renovation-progress.jpg", type: "image" as const, label: "Interior reno", loc: "Mid-build" },
  { src: "/assets/modern-extension-exterior.png", type: "image" as const, label: "Modern extension", loc: "Exterior" },
  { src: "/assets/modern-kitchen-installation.jpg", type: "image" as const, label: "Kitchen install", loc: "Second fix" },
  { src: "/assets/residential-extension-project.jpg", type: "image" as const, label: "Extension", loc: "Residential" },
  { src: "/assets/structural-extension-work.jpg", type: "image" as const, label: "Structural work", loc: "Extension" },
  { src: "/assets/2021-03-17.jpg", type: "image" as const, label: "Archive", loc: "2021" },
  { src: "/assets/unnamed.jpg", type: "image" as const, label: "On site", loc: "London" },
  { src: "/assets/unnamed (1).jpg", type: "image" as const, label: "On site", loc: "London" },
  // Assets — videos
  { src: "/assets/building-progress-timelapse.mp4", type: "video" as const, label: "Build timelapse", loc: "Progress" },
  { src: "/assets/construction-site-walkthrough.mp4", type: "video" as const, label: "Site walkthrough", loc: "Progress" },
];

type Filter = "all" | "photos" | "videos";

export default function GalleryPage() {
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

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
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [filter]);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (lightbox !== null) {
        if (e.key === "ArrowRight") setLightbox((p) => (p !== null ? Math.min(p + 1, filtered.length - 1) : null));
        if (e.key === "ArrowLeft") setLightbox((p) => (p !== null ? Math.max(p - 1, 0) : null));
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  });

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const filtered = allMedia.filter((m) => {
    if (filter === "photos") return m.type === "image";
    if (filter === "videos") return m.type === "video";
    return true;
  });

  const photoCount = allMedia.filter((m) => m.type === "image").length;
  const videoCount = allMedia.filter((m) => m.type === "video").length;

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-inner">
          <a className="brand" href="/" aria-label="Delta Construction">
            <span className="brand-mark" aria-hidden="true">
              <img src="/assets/logo.png" alt="Delta Construction Logo" style={{ width: "22px", height: "22px", objectFit: "contain" }} />
            </span>
            <span className="brand-name">Delta<span>&nbsp;Construction</span></span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="/#projects" className="dot">Projects</a>
            <a href="/#services">Services</a>
            <a href="/#process">Process</a>
            <a href="/#areas">Areas</a>
            <a href="/#contact">Contact</a>
          </nav>
          <div className="nav-right">
            <span className="phone">+44 (0) 7479 389 996</span>
            <a className="btn ghost" href="/#contact">Request a quote <span className="arr"></span></a>
          </div>
        </div>
      </header>

      <section className="gallery-hero">
        <div className="container">
          <span className="eyebrow reveal in">§ Gallery — All works</span>
          <h1 className="display reveal in" style={{ marginTop: "24px" }}>
            Every project,<br /><em>every angle.</em>
          </h1>
          <p className="reveal in d1" style={{ marginTop: "24px", maxWidth: "52ch", fontSize: "16px", lineHeight: "1.55", color: "var(--ink-2)" }}>
            {photoCount} photographs and {videoCount} videos — the complete archive of our recent London builds, interiors, and site progress.
          </p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-filter">
            <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>All ({allMedia.length})</button>
            <button className={filter === "photos" ? "active" : ""} onClick={() => setFilter("photos")}>Photos ({photoCount})</button>
            <button className={filter === "videos" ? "active" : ""} onClick={() => setFilter("videos")}>Videos ({videoCount})</button>
          </div>

          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <div
                key={item.src}
                className="gallery-item reveal"
                style={{ transitionDelay: `${(i % 6) * 0.06}s` }}
                onClick={() => setLightbox(i)}
              >
                <div className="gallery-thumb">
                  {item.type === "video" ? (
                    <video muted loop playsInline preload="metadata">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  ) : (
                    <img src={item.src} alt={item.label} loading="lazy" />
                  )}
                  {item.type === "video" && <span className="gallery-play">▶</span>}
                </div>
                <div className="gallery-meta">
                  <span className="gallery-label">{item.label}</span>
                  <span className="gallery-loc">{item.loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" aria-label="Close">✕</button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {filtered[lightbox].type === "video" ? (
              <video autoPlay muted loop playsInline controls style={{ maxWidth: "90vw", maxHeight: "85vh" }}>
                <source src={filtered[lightbox].src} type="video/mp4" />
              </video>
            ) : (
              <img src={filtered[lightbox].src} alt={filtered[lightbox].label} style={{ maxWidth: "90vw", maxHeight: "85vh", objectFit: "contain" }} />
            )}
            <div className="lightbox-info">
              <span>{filtered[lightbox].label}</span>
              <span>{filtered[lightbox].loc}</span>
              <span>{lightbox + 1} / {filtered.length}</span>
            </div>
          </div>
          {lightbox > 0 && (
            <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }} aria-label="Previous">←</button>
          )}
          {lightbox < filtered.length - 1 && (
            <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }} aria-label="Next">→</button>
          )}
        </div>
      )}

      <section className="cta invert" style={{ borderTop: "1px solid var(--rule)" }}>
        <div className="cta-bg" aria-hidden="true">
          <img src="/assets/interior-renovation-progress.jpg" alt="" />
        </div>
        <div className="cta-inner">
          <span className="eyebrow reveal">Ready to start?</span>
          <h2 className="reveal d1">Let&apos;s build something that <em>outlasts us.</em></h2>
          <p className="reveal d2" style={{ fontSize: "17px", maxWidth: "50ch", textAlign: "center", color: "#cfc8bb" }}>Send the drawings, the address, and a rough budget — a director will reply within one working day.</p>
          <div className="reveal d3" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}>
            <a className="btn" href="/#contact">Request a quote <span className="arr"></span></a>
            <a className="btn ghost" href="/">Back to homepage <span className="arr"></span></a>
          </div>
        </div>
      </section>

      <footer className="invert">
        <div className="foot-bottom">
          <span>© 2019–2026 Delta Construction Ltd UK</span>
          <span>Photography of our own projects · All rights reserved</span>
          <span><a href="/">Home</a> · <a href="/#contact">Contact</a></span>
        </div>
      </footer>
    </>
  );
}
