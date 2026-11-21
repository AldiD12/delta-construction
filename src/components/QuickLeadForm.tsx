"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import styles from "./QuickQuotePage.module.css";

type QuickLeadFormProps = {
  service: string;
  heading: string;
  problems: string[];
  submitLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  callbackPromise: string | null;
  formspreeId?: string;
};

// No cookies or third-party tags. Events go to window.dataLayer only, which
// does nothing unless a tag manager is added later.
function pushDataLayer(event: string, data: Record<string, string>) {
  const trackingWindow = window as Window & { dataLayer?: unknown[] };
  trackingWindow.dataLayer = trackingWindow.dataLayer ?? [];
  trackingWindow.dataLayer.push({ event, ...data });
}

export default function QuickLeadForm({
  service,
  heading,
  problems,
  submitLabel,
  phoneDisplay,
  phoneHref,
  callbackPromise,
  formspreeId = "xgoqbrbk",
}: QuickLeadFormProps) {
  const [problem, setProblem] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const started = useRef(false);

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    pushDataLayer("ads_lead_form_start", { service });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const params = new URLSearchParams(window.location.search);
    const payload: Record<string, string> = {
      service,
      requestType: problem,
      postcode,
      name,
      phone,
      landingPage: window.location.pathname,
      utmSource: params.get("utm_source") || "Not supplied",
      utmMedium: params.get("utm_medium") || "Not supplied",
      utmCampaign: params.get("utm_campaign") || "Not supplied",
      utmTerm: params.get("utm_term") || "Not supplied",
      gclid: params.get("gclid") || "Not supplied",
    };

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Lead endpoint rejected the request");

      pushDataLayer("generate_lead", { service, lead_type: "quote_form" });
      setSubmitted(true);
    } catch {
      setError(`Sorry, that didn't send. Please try again or call ${phoneDisplay}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <h2>Thanks{name ? `, ${name.split(" ")[0]}` : ""}. We have your request.</h2>
        <p>
          We&apos;ll call you on {phone} to arrange your free roof assessment
          {callbackPromise ? ` ${callbackPromise}` : ""}.
        </p>
        <a
          className={styles.callButton}
          href={phoneHref}
          onClick={() => pushDataLayer("ads_phone_click", { service, placement: "form_success" })}
        >
          Need us sooner? Call {phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{heading}</h2>

      <fieldset className={styles.problems}>
        <legend>What&apos;s the problem?</legend>
        <div className={styles.chips}>
          {problems.map((option) => (
            <label key={option} className={styles.chip}>
              <input
                type="radio"
                name="problem"
                value={option}
                required
                checked={problem === option}
                onChange={() => {
                  markStarted();
                  setProblem(option);
                }}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className={styles.field}>
        <span>Your name</span>
        <input
          required
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={(event) => {
            markStarted();
            setName(event.target.value);
          }}
        />
      </label>

      <label className={styles.field}>
        <span>Phone number</span>
        <input
          required
          type="tel"
          name="phone"
          autoComplete="tel"
          inputMode="tel"
          minLength={10}
          value={phone}
          onChange={(event) => {
            markStarted();
            setPhone(event.target.value);
          }}
        />
      </label>

      <label className={styles.field}>
        <span>Postcode</span>
        <input
          required
          type="text"
          name="postcode"
          autoComplete="postal-code"
          autoCapitalize="characters"
          spellCheck={false}
          value={postcode}
          onChange={(event) => {
            markStarted();
            setPostcode(event.target.value);
          }}
        />
      </label>

      {error ? (
        <p className={styles.error} role="alert">
          {error}
        </p>
      ) : null}

      <button className={styles.submitButton} type="submit" disabled={submitting}>
        {submitting ? "Sending…" : submitLabel}
      </button>

      <p className={styles.formNote}>
        Free and no obligation. You get a written price before any work starts.
        {callbackPromise ? ` We call back ${callbackPromise}.` : ""}
      </p>
      <p className={styles.privacy}>
        By sending this form you agree that Delta Construction may contact you
        about this request.{" "}
        <Link href="/privacy">Privacy policy</Link>
      </p>
    </form>
  );
}
