import Image from "next/image";
import Link from "next/link";
import AdsConversionLink from "./AdsConversionLink";
import AdsLeadForm from "./AdsLeadForm";
import styles from "./AdsLandingPage.module.css";

export type AdsLandingConfig = {
  service: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  offer: string;
  heroImage: string;
  heroAlt: string;
  heroBullets: string[];
  issueLabel: string;
  issueOptions: string[];
  formHeading: string;
  submitLabel: string;
  proofItems: Array<{ value: string; label: string }>;
  serviceHeading: string;
  serviceIntro: string;
  serviceCards: Array<{ title: string; text: string }>;
  processHeading: string;
  process: Array<{ title: string; text: string }>;
  projectImage: string;
  projectAlt: string;
  projectCaption: string;
  review: { quote: string; name: string };
  costHeading: string;
  costIntro: string;
  costItems: Array<{ title: string; value: string; note: string }>;
  faqs: Array<{ question: string; answer: string }>;
};

export default function AdsLandingPage({ config }: { config: AdsLandingConfig }) {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Delta Construction home">
          <Image src="/assets/logo.png" width={118} height={118} alt="" priority />
          <span>
            Delta Construction
            <small>Hounslow &amp; West London</small>
          </span>
        </Link>
        <div className={styles.headerContact}>
          <span>Speak directly to a director</span>
          <AdsConversionLink
            href="tel:+447479389996"
            service={config.service}
            placement="header"
            className={styles.headerPhone}
          >
            07479 389 996
          </AdsConversionLink>
        </div>
      </header>

      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{config.eyebrow}</p>
          <h1>{config.headline}</h1>
          <p className={styles.subheadline}>{config.subheadline}</p>

          <ul className={styles.heroBullets}>
            {config.heroBullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className={styles.heroActions}>
            <a className={styles.primaryButton} href="#request-quote">
              {config.offer} <span aria-hidden="true">→</span>
            </a>
            <AdsConversionLink
              href="tel:+447479389996"
              service={config.service}
              placement="hero"
              className={styles.secondaryButton}
            >
              Call 07479 389 996
            </AdsConversionLink>
          </div>

          <p className={styles.responseNote}>
            Hounslow-based · No obligation · A director replies within one working day
          </p>

          <div className={styles.heroImage}>
            <Image
              src={config.heroImage}
              alt={config.heroAlt}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 55vw"
            />
            <span>Photograph of Delta Construction&apos;s own work</span>
          </div>
        </div>

        <div className={styles.formColumn} id="request-quote">
          <AdsLeadForm
            service={config.service}
            heading={config.formHeading}
            issueLabel={config.issueLabel}
            issueOptions={config.issueOptions}
            submitLabel={config.submitLabel}
          />
        </div>
      </section>

      <section className={styles.proofBar} aria-label="Business credentials">
        {config.proofItems.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Clear scope before commitment</p>
          <h2>{config.serviceHeading}</h2>
          <p>{config.serviceIntro}</p>
        </div>
        <div className={styles.cardGrid}>
          {config.serviceCards.map((card) => (
            <article key={card.title} className={styles.serviceCard}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.projectSection}>
        <div className={styles.projectImage}>
          <Image
            src={config.projectImage}
            alt={config.projectAlt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        </div>
        <div className={styles.projectCopy}>
          <p className={styles.eyebrow}>How the work is handled</p>
          <h2>{config.processHeading}</h2>
          <ol className={styles.processList}>
            {config.process.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={styles.caption}>{config.projectCaption}</p>
        </div>
      </section>

      <section className={styles.reviewSection}>
        <div>
          <span className={styles.stars} aria-label="5 out of 5 stars">
            ★★★★★
          </span>
          <p>18 verified Google reviews · 5.0 average</p>
        </div>
        <blockquote>
          “{config.review.quote}”
          <footer>
            <strong>{config.review.name}</strong>
            <span>Verified Google review</span>
          </footer>
        </blockquote>
        <Link href="/reviews">Read every customer review →</Link>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Budget expectations</p>
          <h2>{config.costHeading}</h2>
          <p>{config.costIntro}</p>
        </div>
        <div className={styles.costGrid}>
          {config.costItems.map((item) => (
            <article key={item.title}>
              <span>{item.title}</span>
              <strong>{item.value}</strong>
              <p>{item.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Before you request a quote</p>
          <h2>Questions homeowners ask first</h2>
        </div>
        <div className={styles.faqList}>
          {config.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta}>
        <p className={styles.eyebrow}>A useful first conversation, not a sales pitch</p>
        <h2>{config.offer}</h2>
        <p>
          Send the postcode and a short description. Delta will confirm whether the
          job is a fit and arrange the appropriate next step.
        </p>
        <div>
          <a className={styles.primaryButton} href="#request-quote">
            Start the request <span aria-hidden="true">→</span>
          </a>
          <AdsConversionLink
            href="https://wa.me/447479389996"
            service={config.service}
            placement="final_cta"
            className={styles.secondaryButton}
            target="_blank"
          >
            Message on WhatsApp
          </AdsConversionLink>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Delta Construction Ltd UK</strong>
          <span>7 Southland Way, Hounslow TW3 2RH</span>
          <span>Company No. 12023312</span>
        </div>
        <nav aria-label="Legal">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/reviews">Reviews</Link>
        </nav>
      </footer>

      <div className={styles.mobileBar}>
        <AdsConversionLink
          href="tel:+447479389996"
          service={config.service}
          placement="mobile_bar"
        >
          Call now
        </AdsConversionLink>
        <a href="#request-quote">Request quote</a>
      </div>
    </main>
  );
}
