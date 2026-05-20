
"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [activeSvc, setActiveSvc] = useState('extensions');

  const [carouselProgress, setCarouselProgress] = useState(0);
  const [reviewProgress, setReviewProgress] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [filter]); // re-run if filter changes and reveals new items

  const closeMenu = () => setMenuOpen(false);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Carousel scroll progress tracking
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        setCarouselProgress(el.scrollLeft / maxScroll);
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Review carousel scroll progress tracking
  useEffect(() => {
    const el = reviewRef.current;
    if (!el) return;
    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        setReviewProgress(el.scrollLeft / maxScroll);
      }
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  // Dynamic values for services
  const svcMeta: Record<string, {label: string, desc: string, lead: string}> = {
    extensions: {label:'Extensions · 01', desc:'Single and double-storey rears, side-returns and wrap-arounds. Steel design coordinated with the structural engineer, party-wall awards handled in-house, glazing schedule managed end-to-end. Wet UFH and full kitchen fit-out delivered under the same contract.', lead:'18–28 wks'},
    lofts:      {label:'Loft conversions · 02', desc:'Mansard, dormer, hip-to-gable, L-shape. Planning & permitted-development applications handled. Steel-frame design, sprinkler systems, building-regs sign-off, full second-fix joinery included.', lead:'14–20 wks'},
    roofing:    {label:'Roof repairs & reroofs · 03', desc:'From a slipped tile to a full strip-and-reroof. Natural Welsh slate, clay tile, single-ply membrane, GRP flat. Code 5 leadwork by our own roofers — flashings, valleys, parapets, chimney rebuilds.', lead:'1–4 wks'},
    brick:      {label:'Brickwork · 04', desc:'Structural openings, full repointing in lime or sand-cement, garden walls, restoration of period façades. London-stock and reclaimed yellow stock matched on conservation-area builds.', lead:'1–6 wks'},
    landscape:  {label:'Landscaping · 05', desc:'Hard landscaping done to the same standard as the build it sits next to. Porcelain, stone and clay paving, resin-bound and block-paved driveways, retaining walls, planters, pergolas and outdoor lighting.', lead:'2–6 wks'}
  };
  
  const m = svcMeta[activeSvc];

  return (
    <>
      {/* LocalBusiness Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": ["LocalBusiness", "GeneralContractor"],
        "name": "Delta Construction Ltd UK",
        "image": "https://deltaconstructionltd.co.uk/assets/logo.png",
        "url": "https://deltaconstructionltd.co.uk",
        "telephone": "+447479389996",
        "email": "info@deltaconstructionltd.co.uk",
        "address": { "@type": "PostalAddress", "streetAddress": "7 Southland Way", "addressLocality": "Hounslow", "postalCode": "TW3 2RH", "addressRegion": "London", "addressCountry": "GB" },
        "geo": { "@type": "GeoCoordinates", "latitude": 51.4685, "longitude": -0.3654 },
        "areaServed": [{ "@type": "City", "name": "London" }, { "@type": "Country", "name": "United Kingdom" }],
        "priceRange": "££-££££",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "16", "bestRating": "5" },
        "foundingDate": "2019",
        "description": "Premium residential and commercial construction across London. Extensions, loft conversions, roofing, brickwork and landscaping. Director-led, fixed-price, guaranteed.",
        "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Construction Services", "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "House Extensions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Loft Conversions" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roofing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brickwork" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landscaping" } }
        ]}
      }) }} />


<header className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
  <div className="container nav-inner">
    <a className="brand" href="#top" aria-label="Delta Construction">
      <span className="brand-mark" aria-hidden="true">
        <img src="/assets/logo.png" alt="Delta Construction Logo" style={{ width: "22px", height: "22px", objectFit: "contain" }} />
      </span>
      <span className="brand-name">Delta<span>&nbsp;Construction</span></span>
    </a>
    <nav className="nav-links" aria-label="Primary">
      <a href="/services" onClick={closeMenu}>Services</a>
      <a href="/gallery" className="dot" onClick={closeMenu}>Projects</a>
      <a href="/areas" onClick={closeMenu}>Areas</a>
      <a href="/about" onClick={closeMenu}>About</a>
      <a href="/contact" onClick={closeMenu}>Contact</a>
    </nav>
    <div className="nav-right">
      <span className="phone">+44 (0) 7479 389 996</span>
      <a className="btn ghost" href="/contact">Request a quote <span className="arr"></span></a>
      <button
        className={`mobile-menu-btn ${menuOpen ? 'is-open' : ''}`}
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </div>

  <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
    <nav>
      <a href="/services" onClick={closeMenu}>Services</a>
      <a href="/gallery" onClick={closeMenu}>Projects</a>
      <a href="/areas" onClick={closeMenu}>Areas</a>
      <a href="/about" onClick={closeMenu}>About</a>
      <a href="/reviews" onClick={closeMenu}>Reviews</a>
      <a href="/faq" onClick={closeMenu}>FAQ</a>
      <a href="/contact" className="btn" onClick={closeMenu}>Request a quote <span className="arr"></span></a>
    </nav>
    <div className="mobile-menu-footer">
      <a href="tel:+447479389996">+44 (0) 7479 389 996</a>
      <a href="mailto:info@deltaconstructionltd.co.uk">info@deltaconstructionltd.co.uk</a>
      <span>7 Southland Way · Hounslow TW3 2RH</span>
    </div>
  </div>
</header>


<section className="hero" id="top">
  <div className="hero-grid">
    <div className="hero-left">
      <div className="hero-top-meta">
        <span className="eyebrow">Est. 2019 — London &amp; UK-wide</span>
        <div className="crumbs">
          <span>W11</span>
          <span>·</span>
          <span>W6</span>
          <span>·</span>
          <span>N10</span>
          <span>·</span>
          <span>EN1</span>
        </div>
      </div>

      <div className="hero-title reveal in">
        <h1 className="display">Built quietly,<br /><em>to last loudly.</em></h1>
      </div>

      <div className="hero-sub">
        <p>Delta Construction Ltd UK is a full-service construction company — residential and commercial — founded in 2019 by an experienced project manager and a building specialist with over ten years combined experience across the UK and Europe.</p>
        <div className="hero-cta">
          <a className="btn" href="/contact">Start a project <span className="arr"></span></a>
          <a className="btn ghost" href="#projects">View portfolio <span className="arr"></span></a>
          <span className="since">Based in London · working UK-wide</span>
        </div>
      </div>
    </div>

    <div className="hero-right">
      <video autoPlay muted loop playsInline>
        <source src="/assets/building-progress-timelapse.mp4" type="video/mp4" />
        <img src="/assets/building-foundation-work.jpg" alt="Construction project in progress" />
      </video>
      <div className="hero-card">
        <div>
          <span className="label">Featured · Project N° 217</span>
          <div className="title">The <em>Belsize Park</em> Kitchen — bespoke joinery in night-blue with brushed copper.</div>
        </div>
        <div className="meta-row">
          <div><span className="k">Borough</span><span className="v">Camden</span></div>
          <div><span className="k">Year</span><span className="v">2025</span></div>
        </div>
      </div>
    </div>
  </div>

  <div className="hero-marquee" aria-hidden="true">
    <div className="hero-marquee-track">
      <span>Side-return extensions</span><span>Loft conversions</span><span>Whole-house refurbishments</span><span>Listed buildings</span><span>Heritage joinery</span><span>Underfloor heating</span><span>Bespoke kitchens</span><span>Roofing &amp; leadwork</span>
      <span>Side-return extensions</span><span>Loft conversions</span><span>Whole-house refurbishments</span><span>Listed buildings</span><span>Heritage joinery</span><span>Underfloor heating</span><span>Bespoke kitchens</span><span>Roofing &amp; leadwork</span>
    </div>
  </div>
</section>


<section className="trust">
  <div className="trust-inner">
    <span className="trust-label">Accredited · £10m insurance certificate held · Warranty on every job</span>
    <div className="trust-logos">
      <span className="tl"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#c89372" stroke-width="1.2"/><path d="M8 12l3 3 5-6" stroke="#ece7dd" stroke-width="1.4"/></svg> NHBC <small>Reg.</small></span>
      <span className="tl"><svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" stroke="#c89372" stroke-width="1.2"/><path d="M7 12h10M12 7v10" stroke="#ece7dd" stroke-width="1.2"/></svg> FMB <small>Master Builder</small></span>
      <span className="tl"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2l9 5v6c0 5-4 8-9 9-5-1-9-4-9-9V7l9-5z" stroke="#c89372" stroke-width="1.2"/></svg> CHAS</span>
      <span className="tl"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#c89372" stroke-width="1.2"/><circle cx="12" cy="12" r="3" fill="#ece7dd"/></svg> TrustMark</span>
      <span className="tl"><svg viewBox="0 0 24 24" fill="none"><path d="M3 20h18M5 20V8l7-5 7 5v12" stroke="#c89372" stroke-width="1.2"/><path d="M10 20v-6h4v6" stroke="#ece7dd" stroke-width="1.2"/></svg> Build UK</span>
      <span className="tl"><svg viewBox="0 0 24 24" fill="none"><path d="M4 12l5 5L20 6" stroke="#c89372" stroke-width="1.4"/></svg> ISO <small>9001 : 2015</small></span>
    </div>
  </div>
</section>


<section className="section" id="projects">
  <div className="section-head">
    <div className="num reveal">
      <span>§ 01 — Selected Works</span>
      <span className="big">Portfolio</span>
    </div>
    <div className="right reveal d1">
      <h2 className="section-title">A close, considered record of <em>recent London builds.</em></h2>
      <p style={{ marginTop: "24px", maxWidth: "54ch", fontSize: "16px", lineHeight: "1.55" }}>Every project listed here was delivered by our directly-employed team — no white-labelled trades, no surprises in the snag list. A small selection from the last twenty-four months.</p>
    </div>
  </div>

  <div className="projects" id="projects-grid" ref={carouselRef}>

    {/* Row 1: wide + single */}
    <article className="project feat-wide carousel-card reveal">
      <div className="img">
        <img src="/uploads/project-01.jpg" alt="Rear extension and kitchen fit-out completed by Delta Construction in West London" loading="lazy" />
        <span className="index">N° 01</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    <article className="project carousel-card reveal d1">
      <div className="img">
        <img src="/uploads/project-02.jpg" alt="Loft conversion with dormer window installed in North London" loading="lazy" />
        <span className="index">N° 02</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    {/* Row 2: three equal */}
    <article className="project carousel-card reveal">
      <div className="img">
        <img src="/uploads/project-03.jpg" alt="Full house refurbishment — structural work and interior remodel in Hounslow" loading="lazy" />
        <span className="index">N° 03</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    <article className="project carousel-card reveal d1">
      <div className="img">
        <img src="/uploads/project-04.jpg" alt="Open-plan kitchen extension with bifold doors and underfloor heating" loading="lazy" />
        <span className="index">N° 04</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    <article className="project carousel-card reveal d2">
      <div className="img">
        <img src="/uploads/project-05.jpg" alt="Brickwork and repointing on a Victorian terrace in Richmond" loading="lazy" />
        <span className="index">N° 05</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    {/* Row 3: single + wide */}
    <article className="project carousel-card reveal">
      <div className="img">
        <img src="/uploads/project-06.jpg" alt="Slate roof replacement and chimney rebuild in South West London" loading="lazy" />
        <span className="index">N° 06</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    <article className="project feat-wide carousel-card reveal d1">
      <div className="img">
        <img src="/uploads/project-07.jpg" alt="Double-storey rear extension with structural steelwork in Ealing" loading="lazy" />
        <span className="index">N° 07</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    {/* Row 4: three equal */}
    <article className="project carousel-card reveal">
      <div className="img">
        <img src="/uploads/project-08.jpg" alt="Modern bathroom renovation with walk-in shower and heated towel rail" loading="lazy" />
        <span className="index">N° 08</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    <article className="project carousel-card reveal d1">
      <div className="img">
        <img src="/uploads/project-09.jpg" alt="Hard landscaping with porcelain paving and cedar pergola in Twickenham" loading="lazy" />
        <span className="index">N° 09</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

    <article className="project carousel-card reveal d2">
      <div className="img">
        <img src="/uploads/project-10.jpg" alt="Whole-house refurbishment — plastering and second-fix joinery in progress" loading="lazy" />
        <span className="index">N° 10</span>
      </div>
      <div className="info"><div><span className="meta">London · 2026</span></div></div>
    </article>

  </div>

  {/* Carousel progress bar — mobile only */}
  <div className="carousel-progress">
    <div className="carousel-track-bg">
      <div className="carousel-track-fill" style={{ transform: `scaleX(${carouselProgress})` }} />
    </div>
    <span className="carousel-hint">Swipe to explore</span>
  </div>

  <div className="projects-cta reveal">
    <a className="btn" href="/gallery">View all projects <span className="arr"></span></a>
  </div>
</section>


<section className="section invert" id="services" style={{ paddingTop: "clamp(72px, 8vw, 128px)", paddingBottom: "0", borderBottom: "0" }}>
  <div className="section-head">
    <div className="num reveal">
      <span>§ 02 — Services</span>
      <span className="big">What we do</span>
    </div>
    <div className="right reveal d1">
      <h2 className="section-title">A full-stack contractor — <em>one team, one accountable name</em> on the contract.</h2>
    </div>
  </div>

  <div className="services" id="services-block">
    <div className="services-list">
      <div className={`svc ${activeSvc === 'extensions' ? 'active' : ''}`} onClick={() => setActiveSvc('extensions')}>
        <span className="n">01 /</span>
        <span className="name">Extensions <em>— rear, side-return, wrap-around, double-storey</em></span>
        <span className="arrow">→</span>
      </div>
      <div className={`svc ${activeSvc === 'lofts' ? 'active' : ''}`} onClick={() => setActiveSvc('lofts')}>
        <span className="n">02 /</span>
        <span className="name">Loft conversions <em>— mansards, dormers, hip-to-gable, L-shape</em></span>
        <span className="arrow">→</span>
      </div>
      <div className={`svc ${activeSvc === 'roofing' ? 'active' : ''}`} onClick={() => setActiveSvc('roofing')}>
        <span className="n">03 /</span>
        <span className="name">Roof repairs &amp; reroofs <em>— slate, tile, flat, leadwork</em></span>
        <span className="arrow">→</span>
      </div>
      <div className={`svc ${activeSvc === 'brick' ? 'active' : ''}`} onClick={() => setActiveSvc('brick')}>
        <span className="n">04 /</span>
        <span className="name">Brickwork <em>— repointing, structural, garden walls, restoration</em></span>
        <span className="arrow">→</span>
      </div>
      <div className={`svc ${activeSvc === 'landscape' ? 'active' : ''}`} onClick={() => setActiveSvc('landscape')}>
        <span className="n">05 /</span>
        <span className="name">Landscaping <em>— patios, driveways, paving, garden builds</em></span>
        <span className="arrow">→</span>
      </div>
    </div>

    <div className="services-media">
      <div className={`pane ${activeSvc === 'extensions' ? 'show' : ''}`}>
        <video autoPlay muted loop playsInline>
          <source src="/uploads/site-video-02.mp4" type="video/mp4" />
          <img src="/assets/residential-extension-project.jpg" alt="Residential extension project" />
        </video>
      </div>
      <div className={`pane ${activeSvc === 'lofts' ? 'show' : ''}`}>
        <video autoPlay muted loop playsInline>
          <source src="/assets/construction-site-walkthrough.mp4" type="video/mp4" />
          <img src="/assets/structural-extension-work.jpg" alt="Structural extension work" />
        </video>
      </div>
      <div className={`pane ${activeSvc === 'roofing' ? 'show' : ''}`}><img src="/assets/02-roofing-slate.jpg" alt="Slate roofing work" /></div>
      <div className={`pane ${activeSvc === 'brick' ? 'show' : ''}`}><img src="/assets/concrete-framework-construction.jpg" alt="Brickwork and structural construction" /></div>
      <div className={`pane ${activeSvc === 'landscape' ? 'show' : ''}`}><img src="/assets/modern-extension-exterior.png" alt="Modern extension with landscaping" /></div>

      <div className="services-caption">
        <div className="body">
          <span className="lbl">{m?.label}</span>
          <p>{m?.desc}</p>
        </div>
        <div className="ks">
          <div><span className="k">Typical timeline</span><span className="v">{m?.lead}</span></div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section" id="approach" style={{ paddingTop: "0", paddingBottom: "0", borderBottom: "0" }}>
  <div className="why">
    <div className="why-left">
      <span className="eyebrow reveal">§ 03 — About us</span>
      <h2 className="section-title reveal d1" style={{ marginTop: "24px" }}>A full-service builder — <em>and peace of mind</em> on the way through.</h2>
      <p className="reveal d2" style={{ marginTop: "28px", maxWidth: "50ch", fontSize: "16.5px", lineHeight: "1.55" }}>Delta Construction Ltd UK is dedicated to building and improving residential and commercial properties to the client's brief. Our expertise goes beyond building — with our partners we cover planning, interior design and complete construction, so you have one team to speak to from first sketch to handover keys.</p>

      <div className="why-pillars">
        <div className="pillar reveal">
          <span className="pn">→ 01</span>
          <h4>Founded by builders</h4>
          <p>Run by a project manager and a building specialist — hands-on, on every site, not behind a desk in a sales office.</p>
        </div>
        <div className="pillar reveal d1">
          <span className="pn">→ 02</span>
          <h4>Planning to handover</h4>
          <p>We and our partners cover planning, interior design and complete construction. One point of contact, one number to call.</p>
        </div>
        <div className="pillar reveal d2">
          <span className="pn">→ 03</span>
          <h4>Residential &amp; commercial</h4>
          <p>From single bathrooms and roof repairs to full refurbishments, extensions and commercial fit-outs across London &amp; the UK.</p>
        </div>
        <div className="pillar reveal d3">
          <span className="pn">→ 04</span>
          <h4>Warranty &amp; insurance</h4>
          <p>Insurance-backed warranty on every job. Length matched to the work, start date is the invoice date. £10m public liability certificate on file.</p>
        </div>
      </div>
    </div>
    <div className="why-right">
      <img src="/assets/03-underfloor.jpg" alt="Underfloor heating installation on site" />
      <div className="why-quote">
        <div className="q">“Whatever your needs are with regards to construction, our expertise goes <em>beyond building.</em>”</div>
        <div className="att">Delta Construction Ltd UK — since 2019</div>
      </div>
    </div>
  </div>
</section>


<section className="section" id="process">
  <div className="section-head">
    <div className="num reveal">
      <span>§ 04 — How we work</span>
      <span className="big">Process</span>
    </div>
    <div className="right reveal d1">
      <h2 className="section-title">Six clear stages, <em>from first walk-through to handover keys.</em></h2>
    </div>
  </div>

  <div className="process">
    <div className="process-rows">
      <div className="prow reveal">
        <div className="pn">01<span className="small">Discovery</span></div>
        <div className="ptitle">Site visit &amp; <em>scope brief</em></div>
        <div className="pdesc">A director walks the property with you and the architect. We agree what is being built, what is being kept, and what the non-negotiables are — within seven days you receive a written scope.</div>
        <div className="ptime"><span className="dur">~ 1 week</span><span>No charge</span></div>
      </div>
      <div className="prow reveal">
        <div className="pn">02<span className="small">Tender</span></div>
        <div className="ptitle">Fixed-price <em>quotation</em></div>
        <div className="pdesc">Itemised pricing against the drawings and spec, broken down by trade and stage. Provisional sums clearly flagged. Quotation valid for 60 days.</div>
        <div className="ptime"><span className="dur">2–3 weeks</span><span>From £950</span></div>
      </div>
      <div className="prow reveal">
        <div className="pn">03<span className="small">Pre-start</span></div>
        <div className="ptitle">Contract, <em>programme &amp; payment plan</em></div>
        <div className="pdesc">JCT signed, party-wall and CDM regs handled. Construction programme issued with critical-path milestones. Monthly valuation schedule agreed.</div>
        <div className="ptime"><span className="dur">2 weeks</span><span>Pre-construction</span></div>
      </div>
      <div className="prow reveal">
        <div className="pn">04<span className="small">Strip-out</span></div>
        <div className="ptitle">Demolition, <em>structure &amp; first fix</em></div>
        <div className="pdesc">Steels, foundations, drainage, framing, first-fix electrics &amp; plumbing. Weekly site report with photos. Building Control inspections booked in advance.</div>
        <div className="ptime"><span className="dur">8–14 weeks</span><span>50–60% of value</span></div>
      </div>
      <div className="prow reveal">
        <div className="pn">05<span className="small">Finishes</span></div>
        <div className="ptitle">Second fix, <em>joinery &amp; decoration</em></div>
        <div className="pdesc">Plastering, screeding, joinery install, decoration, stone, tiling, sanitaryware, lighting. Weekly client walk-through.</div>
        <div className="ptime"><span className="dur">6–10 weeks</span><span>30–40% of value</span></div>
      </div>
      <div className="prow reveal">
        <div className="pn">06<span className="small">Handover</span></div>
        <div className="ptitle">Snagging &amp; <em>10-year warranty</em></div>
        <div className="pdesc">Joint inspection with the client and architect. All defects rectified before handover, O&amp;M manual and warranties issued. 12-month defects period begins.</div>
        <div className="ptime"><span className="dur">2 weeks</span><span>Final 5%</span></div>
      </div>
    </div>
  </div>
</section>


<section className="section invert" style={{ padding: "clamp(48px,5vw,80px) 0" }}>
  <div className="stats">
    <div className="stat reveal">
      <span className="sv">2019<span className="unit"></span></span>
      <span className="sl">Founded</span>
      <span className="sd">Started in London by an experienced project manager and a building specialist with deep on-site backgrounds.</span>
    </div>
    <div className="stat reveal d1">
      <span className="sv">10<span className="unit">yrs+</span></span>
      <span className="sl">Combined experience</span>
      <span className="sd">Across the UK and Europe — residential refurbishments, extensions, roofing, listed buildings and commercial fit-outs.</span>
    </div>
    <div className="stat reveal d2">
      <span className="sv">£10<span className="unit">m</span></span>
      <span className="sl">Insurance certificate</span>
      <span className="sd">Public liability certificate held and available on request. Warranty issued on every completed job.</span>
    </div>
    <div className="stat reveal d3">
      <span className="sv">UK<span className="unit">-wide</span></span>
      <span className="sl">Based in London</span>
      <span className="sd">Concentrated in West and North London, but not limited by location — we travel for the right project anywhere in the United Kingdom.</span>
    </div>
  </div>
</section>


<section className="section" id="areas" style={{ paddingTop: "clamp(80px,8vw,128px)", paddingBottom: "clamp(80px,8vw,128px)" }}>
  <div className="section-head">
    <div className="num reveal">
      <span>§ 05 — Areas we cover</span>
      <span className="big">Where we build</span>
    </div>
    <div className="right reveal d1">
      <h2 className="section-title">London-wide. <em>Concentrated west and north.</em></h2>
      <p style={{ marginTop: "24px", maxWidth: "54ch", fontSize: "16px", lineHeight: "1.55" }}>We are based in Hounslow, work across London and travel throughout the United Kingdom. We are not limited by location — our directors will assist you wherever you reside in the UK.</p>
    </div>
  </div>

  <div className="areas-wrap container">
    <div className="areas-col">
      <div className="areas-head">
        <span className="areas-tag">West London</span>
        <span className="areas-meta">62% of current workload</span>
      </div>
      <ul className="areas-list">
        <li><span className="aname">Notting Hill</span><span className="apost">W11</span></li>
        <li><span className="aname">Fulham</span><span className="apost">SW6</span></li>
        <li><span className="aname">Hammersmith</span><span className="apost">W6</span></li>
        <li><span className="aname">Hounslow</span><span className="apost">TW3</span></li>
        <li><span className="aname">Richmond</span><span className="apost">TW9</span></li>
        <li><span className="aname">Twickenham</span><span className="apost">TW1</span></li>
      </ul>
    </div>

    <div className="areas-col">
      <div className="areas-head">
        <span className="areas-tag">North London</span>
        <span className="areas-meta">38% of current workload</span>
      </div>
      <ul className="areas-list">
        <li><span className="aname">Muswell Hill</span><span className="apost">N10</span></li>
        <li><span className="aname">Barnet</span><span className="apost">EN5</span></li>
        <li><span className="aname">Finchley</span><span className="apost">N3</span></li>
        <li><span className="aname">Enfield</span><span className="apost">EN1</span></li>
        <li><span className="aname">Highgate</span><span className="apost">N6</span></li>
        <li><span className="aname">Camden</span><span className="apost">NW1</span></li>
      </ul>
    </div>

    <aside className="areas-side">
      <span className="eyebrow">Outside this list?</span>
      <p style={{ marginTop: "18px", fontSize: "15.5px", lineHeight: "1.55", maxWidth: "34ch" }}>We will still travel for the right project — particularly for full refurbishments, listed buildings and architect-led new-builds. Send the brief and we will tell you straight whether we are the right firm for it.</p>
      <a className="btn ghost" style={{ marginTop: "24px" }} href="/contact">Check your postcode <span className="arr"></span></a>

      <div className="areas-radius">
        <svg viewBox="0 0 200 200" aria-hidden="true" className="areas-radius-svg">
          
          <circle cx="100" cy="100" r="92" fill="none" stroke="#27241e" stroke-width="1"/>
          <circle cx="100" cy="100" r="62" fill="none" stroke="#27241e" stroke-width="1" stroke-dasharray="2 4"/>
          <circle cx="100" cy="100" r="32" fill="none" stroke="#c89372" stroke-width="1"/>
          <circle cx="100" cy="100" r="2.5" fill="#c89372"/>
          <text x="100" y="14" text-anchor="middle" fill="#8a847a" font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.4">N</text>
          <text x="100" y="195" text-anchor="middle" fill="#8a847a" font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.4">S</text>
          <text x="8" y="103" text-anchor="start" fill="#8a847a" font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.4">W</text>
          <text x="192" y="103" text-anchor="end" fill="#8a847a" font-family="JetBrains Mono, monospace" font-size="9" letter-spacing="1.4">E</text>
          
          <circle cx="100" cy="100" r="5" fill="none" stroke="#c89372" stroke-width="1.2"/>
        </svg>
        <div className="areas-radius-meta">
          <div><span className="k">Office</span><span className="v">Hounslow · TW3</span></div>
          <div><span className="k">Primary cover</span><span className="v">West &amp; North London</span></div>
          <div><span className="k">Travelled to</span><span className="v">UK-wide</span></div>
        </div>
      </div>
    </aside>
  </div>
</section>
<section className="section" id="testimonials" style={{ paddingTop: "clamp(48px,5vw,96px)" }}>
  <div className="section-head">
    <div className="num reveal">
      <span>§ 06 — Client letters</span>
      <span className="big">In their words</span>
    </div>
    <div className="right reveal d1">
      <h2 className="section-title">The reason most of our work comes from <em>recommendation.</em></h2>
      <p style={{ marginTop: "24px", maxWidth: "54ch", fontSize: "16px", lineHeight: "1.55" }}>16 verified Google reviews · <strong>5.0 ★</strong> average. A selection below — every reviewer can be verified on our Google Business profile.</p>
    </div>
  </div>

  <div className="testimonials">
    <div className="t-grid review-carousel" ref={reviewRef}>
      <div className="t-card review-card reveal">
        <div className="stars" aria-label="5 out of 5"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <blockquote>"I want to thank Delta Construction for its great job. Tani and his team did a brilliant job with high quality finishing in a very short time we had to move to our new house. I strongly recommend them!!!"</blockquote>
        <div className="who">
          <span className="av">S</span>
          <div>
            <div className="name">saeid modhej</div>
            <div className="role">Verified Google review</div>
          </div>
        </div>
      </div>
      <div className="t-card review-card reveal d1">
        <div className="stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <blockquote>"My family and I would like to extend our utmost appreciation to Tani and his team at Delta Construction. Their professionalism is second to none. Tani himself provided valuable input regarding the interior layout and space saving units to maximise space..."</blockquote>
        <div className="who">
          <span className="av">D</span>
          <div>
            <div className="name">DMC</div>
            <div className="role">Verified Google review</div>
          </div>
        </div>
      </div>
      <div className="t-card review-card reveal d2">
        <div className="stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <blockquote>"Delta did a fantastic job removing a big bay tree from our front garden, and re-building the brick wall that had been damaged by its roots. The work was done quickly but carefully, and the price was great."</blockquote>
        <div className="who">
          <span className="av">J</span>
          <div>
            <div className="name">J Paterson</div>
            <div className="role">Verified Google review</div>
          </div>
        </div>
      </div>
      <div className="t-card review-card reveal">
        <div className="stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <blockquote>"So happy with the work they did on our garden. Everything went as planned and was done to really high level and also completed quickly - so happy with the results! Definitely recommend!"</blockquote>
        <div className="who">
          <span className="av">K</span>
          <div>
            <div className="name">Keira D</div>
            <div className="role">Verified Google review</div>
          </div>
        </div>
      </div>
      <div className="t-card review-card reveal d1">
        <div className="stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <blockquote>"We were very skeptical to using someone we didn't know even though recommended. Our usual builder unfortunately couldn't assist. I am extremely happy that we decided to go ahead. Full house renovation and we also extended the ground floor."</blockquote>
        <div className="who">
          <span className="av">E</span>
          <div>
            <div className="name">Elena Tsela</div>
            <div className="role">Verified Google review</div>
          </div>
        </div>
      </div>
      <div className="t-card review-card reveal d2">
        <div className="stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
        <blockquote>"Thank you very much guys. I am elderly and I needed help with my garden, a few things done to my extension and the whole brick facade clean and repointed. Tani & team were so helpful. They prioritized me and did an amazing job in no time."</blockquote>
        <div className="who">
          <span className="av">S</span>
          <div>
            <div className="name">Semiha Hoxha</div>
            <div className="role">Verified Google review</div>
          </div>
        </div>
      </div>
    </div>
    <div className="review-progress carousel-progress" style={{ display: "none" }}>
      <div className="carousel-track-bg">
        <div className="carousel-track-fill" style={{ transform: `scaleX(${0.17 + reviewProgress * 0.83})` }}></div>
      </div>
    </div>
  </div>
</section>


<section className="cta invert" id="contact">
  <div className="cta-bg" aria-hidden="true">
    <img src="/assets/interior-renovation-progress.jpg" alt="Interior renovation in progress by Delta Construction" />
  </div>
  <div className="cta-inner">
    <span className="eyebrow reveal">§ 07 — Begin</span>
    <h2 className="reveal d1">Let&apos;s build something that <em>outlasts us.</em></h2>
    <p className="reveal d2" style={{ fontSize: "17px", maxWidth: "50ch", textAlign: "center", color: "#cfc8bb" }}>Send the drawings, the address, and a rough budget — a director will reply within one working day with availability and a sensible next step.</p>

    <div className="reveal d3" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginTop: "32px" }}>
      <a className="btn" href="/contact">Request a free quote <span className="arr"></span></a>
      <a className="btn ghost" href="tel:+447479389996">Call +44 7479 389 996 <span className="arr"></span></a>
    </div>

    <div className="quick-contact reveal d4">
      <a href="mailto:info@deltaconstructionltd.co.uk">info@deltaconstructionltd.co.uk</a>
      <span>7 Southland Way · Hounslow TW3 2RH</span>
    </div>
  </div>
</section>


<footer className="invert">
  <div className="foot-inner">
    <div className="foot-brand">
      <div className="brand">
        <span className="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M2 20 L12 4 L22 20 Z" stroke="#ece7dd" strokeWidth="1.4"/>
            <path d="M7.5 20 L12 12.5 L16.5 20" stroke="#c89372" strokeWidth="1.2"/>
          </svg>
        </span>
        <span className="brand-name">Delta<span>&nbsp;Construction Ltd</span></span>
      </div>
      <p>London-based, working UK-wide. Founded 2019 by a project manager and a building specialist with 10+ years combined experience across UK &amp; Europe.</p>
    </div>
    <div className="foot-col">
      <h5>Company</h5>
      <ul>
        <li><a href="/services">Services</a></li>
        <li><a href="/gallery">Projects</a></li>
        <li><a href="/about">About us</a></li>
        <li><a href="/areas">Areas we cover</a></li>
        <li><a href="/reviews">Reviews</a></li>
        <li><a href="/faq">FAQ</a></li>
      </ul>
    </div>
    <div className="foot-col">
      <h5>Contact</h5>
      <ul>
        <li><a href="tel:+447479389996">+44 (0) 7479 389 996</a></li>
        <li><a href="mailto:info@deltaconstructionltd.co.uk">info@deltaconstructionltd.co.uk</a></li>
        <li>7 Southland Way<br />Hounslow TW3 2RH</li>
        <li><a href="/contact">Request a quote</a></li>
      </ul>
    </div>
    <div className="foot-col">
      <h5>Accreditations</h5>
      <ul>
        <li>NHBC Registered Builder</li>
        <li>Federation of Master Builders</li>
        <li>CHAS · TrustMark · Build UK</li>
        <li>ISO 9001 : 2015</li>
      </ul>
    </div>
  </div>
  <div className="foot-bottom">
    <span>© 2019–2026 Delta Construction Ltd UK · Company No. 00000000</span>
    <span>Photography of our own projects · All rights reserved</span>
    <span><a href="/privacy">Privacy</a> · <a href="/terms">Terms</a> · <a href="/cookies">Cookies</a></span>
  </div>
</footer>





    </>
  );
}
