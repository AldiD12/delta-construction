"use client";

import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { track } from "@/lib/track";
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

// Each step is sent to Clarity via track() (cookieless). Never pass the
// visitor's name, phone or postcode to track().
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
  const invalidFields = useRef<Set<string>>(new Set());

  // The browser fires "invalid" once per empty field (and once per radio
  // button); collect them and send a single event per Send tap.
  const recordInvalid = (field: string) => {
    const fields = invalidFields.current;
    if (fields.size === 0) {
      queueMicrotask(() => {
        track("form_invalid", { invalid_fields: [...fields].join(",") });
        fields.clear();
      });
    }
    fields.add(field);
  };

  const markStarted = () => {
    if (started.current) return;
    started.current = true;
    track("form_start", { service });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");
    track("form_submit", { service, problem });

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

      track("form_sent", { service, problem });
      setSubmitted(true);
    } catch {
      track("form_failed", { service });
      setError(`Sorry, that didn't send. Please try again or call ${phoneDisplay}.`);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success} role="status" aria-live="polite" data-clarity-mask="true">
        <h2>Thanks{name ? `, ${name.split(" ")[0]}` : ""}. We have your request.</h2>
        <p>
          We&apos;ll call you on {phone} to arrange your free roof assessment
          {callbackPromise ? ` ${callbackPromise}` : ""}.
        </p>
        <a
          className={styles.callButton}
          href={phoneHref}
          onClick={() => track("call_tap_form_success", { service })}
        >
          Need us sooner? Call {phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit}
      onInvalidCapture={(event) =>
        recordInvalid((event.target as HTMLInputElement).name || "unknown")
      }
      data-clarity-mask="true"
    >
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
                  track("problem_selected", { problem: option });
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

      <button
        className={styles.submitButton}
        type="submit"
        disabled={submitting}
        onClick={() => track("form_submit_tap", { service })}
      >
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
