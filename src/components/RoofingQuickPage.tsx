import Image from "next/image";
import Link from "next/link";
import AdsConversionLink from "./AdsConversionLink";
import QuickLeadForm from "./QuickLeadForm";
import { CalendarIcon, GoogleG, PinIcon, SealIcon, ShieldIcon } from "./TrustIcons";
import styles from "./QuickQuotePage.module.css";

// ---------------------------------------------------------------------------
// Owner-confirmed facts only. Leave a value as null until the owner confirms
// it; the page hides anything that is null.
// ---------------------------------------------------------------------------
const SERVICE = "roofing";
const PHONE_DISPLAY = "07479 389 996";
const PHONE_HREF = "tel:+447479389996";
const HOURS = "Mon–Sat, 8am–6pm"; // from Delta's Google Business Profile
const CALLBACK_PROMISE: string | null = null; // e.g. "within 1 hour, Mon–Sat 8am–6pm"
const REVIEW_COUNT = 18; // Google Business Profile, 21 Nov 2026 — re-check before launch
const LEGAL_NAME = "Delta Construction Limited UK Ltd"; // as registered at Companies House
const COMPANY_NO = "12023312";
// Main Google listing (the one with the reviews), not the duplicate profile.
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=17900909372564541516";
const COMPANIES_HOUSE_URL = `https://find-and-update.company-information.service.gov.uk/company/${COMPANY_NO}`;

const problems = [
  "Leak / water coming in",
  "Slipped or missing tiles",
  "Flat roof",
  "Chimney or leadwork",
  "Gutters or fascias",
  "Not sure",
];

const trustTiles = [
  { Icon: ShieldIcon, value: "£2m", label: "public liability insurance" },
  { Icon: SealIcon, value: "1-year", label: "workmanship guarantee" },
  { Icon: PinIcon, value: "Hounslow", label: "based, local team" },
  { Icon: CalendarIcon, value: "Est. 2019", label: "Company No. 12023312" },
];

const reviews = [
  {
    name: "Annmarie Flynn",
    text: "I have used Delta twice now for rental properties. Both times got a good roof repair carried out at short notice. Very pleasant to deal with, would use again.",
  },
  {
    name: "Jimmy Michael",
    text: "Tani and his team where brilliant and completed the work in a timely manner. Always professional and delivered a high standard of work. Changed all of the gutters and fascia boards, rendering of two chimney stacks…",
  },
  {
    name: "Semiha Hoxha",
    text: "…the whole brick facade clean and repointed. Tani & team were so helpful. They prioritized me (I was in a hurry as I need to sell my house) and did an amazing job in no time.",
  },
];

// Delta's own job photos (confirmed by Aldi, 21 Nov 2026). Captions say job type only - no areas confirmed.
const roofJobs = [
  {
    src: "/uploads/roof-delta-banner.jpg",
    width: 700,
    height: 525,
    alt: "Delta Construction banner on the scaffolding of a loft and roofing job",
    caption: "Our banner on a loft and roof job",
    wide: true,
  },
  {
    src: "/uploads/roof-flat-extension.jpg",
    width: 1200,
    height: 675,
    alt: "New flat roof on a single-storey extension built by Delta Construction",
    caption: "New flat roof on an extension",
  },
  {
    src: "/uploads/project-03.jpg",
    width: 1200,
    height: 1600,
    alt: "New slates on a pitched roof by Delta Construction in West London",
    caption: "Pitched roof, new slates",
  },
  {
    src: "/uploads/roof-structure-scaffold.jpg",
    width: 1200,
    height: 675,
    alt: "Roof structure with membrane and battens on a scaffolded Delta Construction job",
    caption: "Roof structure going on",
    wide: true,
  },
];

const fixes = [
  "Leaks and water coming in",
  "Slipped, cracked or missing tiles and slates",
  "Flat roof repairs and replacement",
  "Chimneys, flashing and leadwork",
  "Gutters, fascias and soffits",
  "Full reroofs when a repair isn't worth it",
];

const steps = [
  "Call us or send the form.",
  "We inspect the roof and find the cause, not just the stain.",
  "You get a written price before any work starts.",
];

function Stars({ large = false }: { large?: boolean }) {
  return (
    <span className={large ? styles.starsLarge : styles.stars} aria-hidden="true">
      ★★★★★
    </span>
  );
}

function GoogleBadge() {
  return (
    <div className={styles.googleBadge} role="img" aria-label={`Rated 5.0 out of 5 from ${REVIEW_COUNT} Google reviews`}>
      <GoogleG className={styles.googleG} />
      <span className={styles.badgeScore}>5.0</span>
      <span className={styles.badgeDetail}>
        <Stars large />
        <span>{REVIEW_COUNT} Google reviews</span>
      </span>
    </div>
  );
}

function TrustTiles() {
  return (
    <ul className={styles.trustTiles}>
      {trustTiles.map(({ Icon, value, label }) => (
        <li key={value}>
          <span className={styles.tileIcon}>
            <Icon />
          </span>
          <span>
            <strong>{value}</strong>
            <small>{label}</small>
          </span>
        </li>
      ))}
    </ul>
  );
}

const avatarColours = ["#d46b36", "#10221b", "#2f6f57"];

function ReviewCard({
  review,
  index,
  className = "",
}: {
  review: { name: string; text: string };
  index: number;
  className?: string;
}) {
  return (
    <figure className={`${styles.reviewCard} ${className}`}>
      <figcaption className={styles.reviewHead}>
        <span className={styles.avatar} style={{ background: avatarColours[index % avatarColours.length] }} aria-hidden="true">
          {review.name.charAt(0).toUpperCase()}
        </span>
        <span className={styles.reviewWho}>
          <strong>{review.name}</strong>
          <span>
            <Stars /> on Google
          </span>
        </span>
        <GoogleG className={styles.reviewG} />
      </figcaption>
      <blockquote>
        <p>&ldquo;{review.text}&rdquo;</p>
      </blockquote>
    </figure>
  );
}

export default function RoofingQuickPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Delta Construction home">
          <Image src="/assets/logo.png" width={44} height={44} alt="" loading="eager" />
          <span>Delta Construction</span>
        </Link>
        <AdsConversionLink
          href={PHONE_HREF}
          service={SERVICE}
          placement="header"
          className={styles.headerCall}
        >
          Call {PHONE_DISPLAY}
        </AdsConversionLink>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.kicker}>Roofers in Hounslow &amp; West London</p>
          <h1>Roof leaking or damaged? Local roofers in Hounslow.</h1>
          <p className={styles.lead}>
            Free roof assessment. We find the cause and give you a written price
            before any work starts.
          </p>

          <GoogleBadge />
          <TrustTiles />

          <div className={styles.ctas}>
            <AdsConversionLink
              href={PHONE_HREF}
              service={SERVICE}
              placement="hero"
              className={styles.callButton}
            >
              Call now · {PHONE_DISPLAY}
            </AdsConversionLink>
            <a href="#quote" className={styles.outlineButton}>
              Get a free roof assessment
            </a>
          </div>
          <p className={styles.hours}>
            Lines open {HOURS}
            {CALLBACK_PROMISE ? ` · we call back ${CALLBACK_PROMISE}` : ""}
          </p>

          <ReviewCard review={reviews[0]} index={0} className={styles.heroReview} />
        </div>

        <div id="quote" className={styles.formCard}>
          <QuickLeadForm
            service={SERVICE}
            heading="Free roof assessment"
            problems={problems}
            submitLabel="Request my free assessment"
            phoneDisplay={PHONE_DISPLAY}
            phoneHref={PHONE_HREF}
            callbackPromise={CALLBACK_PROMISE}
          />
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryHead}>
          <h2>Recent roof jobs</h2>
          <span className={styles.photoTag}>Our own photos, not stock</span>
        </div>
        <div className={styles.gallery}>
          {roofJobs.map((job) => (
            <figure key={job.src} className={job.wide ? styles.galleryWide : undefined}>
              <Image
                src={job.src}
                width={job.width}
                height={job.height}
                sizes="(max-width: 860px) 50vw, 280px"
                alt={job.alt}
              />
              <figcaption>{job.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.proof}>
        <figure className={styles.tani}>
          <Image
            src="/uploads/tani-on-site.jpg"
            width={360}
            height={420}
            sizes="(max-width: 860px) 40vw, 200px"
            alt="Tani from Delta Construction on site in hi-vis"
          />
          <figcaption>
            <strong>Meet Tani</strong>
            <span>Customers name Tani and his team in our Google reviews.</span>
            <q>Tani &amp; team were so helpful.</q>
            <small>Semiha Hoxha, Google review</small>
          </figcaption>
        </figure>

        <div className={styles.reviews}>
          <h2>What customers say</h2>
          <GoogleBadge />
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
          <div className={styles.verify}>
            <p>Check us yourself:</p>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Read all {REVIEW_COUNT} reviews on Google ↗
            </a>
            <a href={COMPANIES_HOUSE_URL} target="_blank" rel="noopener noreferrer">
              Registered company No. {COMPANY_NO}, active since 2019. View on Companies House ↗
            </a>
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <div>
          <h2>What we fix</h2>
          <ul className={styles.fixes}>
            {fixes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>How it works</h2>
          <ol className={styles.steps}>
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.final}>
        <h2>Tell us what&apos;s wrong with your roof</h2>
        <p>Free assessment, no obligation. Lines open {HOURS}.</p>
        <div className={styles.ctas}>
          <AdsConversionLink
            href={PHONE_HREF}
            service={SERVICE}
            placement="final"
            className={styles.callButton}
          >
            Call now · {PHONE_DISPLAY}
          </AdsConversionLink>
          <a href="#quote" className={styles.outlineButtonLight}>
            Send the form
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>{LEGAL_NAME} · 7 Southland Way, Hounslow TW3 2RH</span>
        <a href={COMPANIES_HOUSE_URL} target="_blank" rel="noopener noreferrer">
          Company No. {COMPANY_NO}
        </a>
        <Link href="/privacy">Privacy</Link>
      </footer>

      <nav className={styles.mobileBar} aria-label="Quick contact">
        <AdsConversionLink href={PHONE_HREF} service={SERVICE} placement="mobile_bar">
          Call now
        </AdsConversionLink>
        <a href="#quote">Free assessment</a>
      </nav>
    </main>
  );
}
