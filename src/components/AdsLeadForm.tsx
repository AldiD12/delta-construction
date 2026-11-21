"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { track } from "@/lib/track";
import styles from "./AdsLandingPage.module.css";

type AdsLeadFormProps = {
  service: string;
  heading: string;
  issueLabel: string;
  issueOptions: string[];
  submitLabel: string;
  formspreeId?: string;
};

type FormState = {
  issue: string;
  postcode: string;
  name: string;
  phone: string;
  email: string;
  details: string;
};

const initialForm: FormState = {
  issue: "",
  postcode: "",
  name: "",
  phone: "",
  email: "",
  details: "",
};

// Sends the step to Clarity (cookieless) as well as window.dataLayer.
function pushDataLayer(event: string, data: Record<string, string>) {
  track(event, data);
}

export default function AdsLeadForm({
  service,
  heading,
  issueLabel,
  issueOptions,
  submitLabel,
  formspreeId = "xgoqbrbk",
}: AdsLeadFormProps) {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const started = useRef(false);

  const update = (field: keyof FormState, value: string) => {
    if (!started.current) {
      started.current = true;
      pushDataLayer("ads_lead_form_start", { service });
    }
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const params = new URLSearchParams(window.location.search);

    try {
      const payload: Record<string, string> = {
        service,
        requestType: form.issue,
        postcode: form.postcode,
        name: form.name,
        phone: form.phone,
        landingPage: window.location.pathname,
        utmSource: params.get("utm_source") || "Not supplied",
        utmMedium: params.get("utm_medium") || "Not supplied",
        utmCampaign: params.get("utm_campaign") || "Not supplied",
        utmTerm: params.get("utm_term") || "Not supplied",
        gclid: params.get("gclid") || "Not supplied",
      };

      if (form.email) payload.email = form.email;
      if (form.details) payload.details = form.details;

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Lead endpoint rejected the request");
      }

      pushDataLayer("generate_lead", {
        service,
        lead_type: "quote_form",
      });
      setSubmitted(true);
    } catch {
      setError(
        "We could not send your request. Please try again, or call 07479 389 996.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite" data-clarity-mask="true">
        <span className={styles.successMark} aria-hidden="true">
          ✓
        </span>
        <h2>Request received</h2>
        <p>
          A Delta Construction director will review the details and reply within
          one working day.
        </p>
        <a
          className={styles.secondaryButton}
          href="tel:+447479389996"
          onClick={() =>
            pushDataLayer("ads_phone_click", {
              service,
              placement: "form_success",
            })
          }
        >
          Need to speak now? Call 07479 389 996
        </a>
      </div>
    );
  }

  return (
    <form
      className={styles.leadForm}
      onSubmit={handleSubmit}
      noValidate={false}
      data-clarity-mask="true"
    >
      <div className={styles.formHeading}>
        <span>Free, no-obligation request</span>
        <h2>{heading}</h2>
        <p>Four required answers. A director replies within one working day.</p>
      </div>

      <label className={styles.field}>
        <span>{issueLabel}</span>
        <select
          required
          value={form.issue}
          onChange={(event) => update("issue", event.target.value)}
        >
          <option value="" disabled>
            Select one
          </option>
          {issueOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Project postcode</span>
        <input
          required
          type="text"
          name="postcode"
          autoComplete="postal-code"
          spellCheck={false}
          inputMode="text"
          value={form.postcode}
          onChange={(event) => update("postcode", event.target.value)}
          aria-describedby="postcode-hint"
        />
        <small id="postcode-hint">Used to confirm that we cover your area.</small>
      </label>

      <div className={styles.formRow}>
        <label className={styles.field}>
          <span>Your name</span>
          <input
            required
            type="text"
            name="name"
            autoComplete="name"
            spellCheck={false}
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
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
            spellCheck={false}
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
          />
        </label>
      </div>

      <details className={styles.optionalFields}>
        <summary>Add email or project details <span>Optional</span></summary>
        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            spellCheck={false}
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </label>

        <label className={styles.field}>
          <span>Anything useful to know?</span>
          <textarea
            name="details"
            rows={3}
            value={form.details}
            onChange={(event) => update("details", event.target.value)}
            aria-describedby="details-hint"
          />
          <small id="details-hint">For example: where the problem is, access, plans or timing.</small>
        </label>
      </details>

      {error ? (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      ) : null}

      <button className={styles.primaryButton} type="submit" disabled={submitting}>
        {submitting ? "Sending…" : submitLabel}
        <span aria-hidden="true">→</span>
      </button>

      <p className={styles.privacyNote}>
        By sending this form, you agree that Delta Construction may contact you
        about this enquiry. See our <Link href="/privacy">privacy policy</Link>.
      </p>
    </form>
  );
}
