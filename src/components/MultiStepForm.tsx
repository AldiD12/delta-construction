"use client";

import { useState } from "react";

const SERVICE_OPTIONS = [
  "Whole-house refurbishment",
  "Extension",
  "Loft conversion",
  "Roofing",
  "Brickwork",
  "Landscaping",
  "Other",
];

export default function MultiStepForm({
  formspreeId,
}: {
  formspreeId: string;
}) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [postcode, setPostcode] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          service,
          postcode,
          name,
          email,
          phone,
          details,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    }
    setSubmitting(false);
  };

  if (submitted) {
    return (
      <div style={containerStyle}>
        <div style={{ textAlign: "center", padding: "48px 0" }}>
          <span
            style={{
              display: "block",
              fontSize: "48px",
              marginBottom: "24px",
              color: "var(--accent)",
            }}
          >
            &#10003;
          </span>
          <h3
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(22px, 3vw, 28px)",
              fontWeight: 400,
              color: "var(--ink)",
              marginBottom: "12px",
            }}
          >
            Thank you
          </h3>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "15px",
              color: "var(--mute)",
              maxWidth: "36ch",
              margin: "0 auto",
              lineHeight: 1.55,
            }}
          >
            A director will reply within one working day.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      {/* Progress */}
      <div style={progressStyle}>
        <span
          style={{
            fontFamily: "var(--mono)",
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--mute)",
          }}
        >
          Step {step} of 3
        </span>
        <div style={progressBarBg}>
          <div
            style={{
              ...progressBarFill,
              width: `${(step / 3) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Step 1 */}
      {step === 1 && (
        <div>
          <h3 style={headingStyle}>
            What do you <em>need?</em>
          </h3>
          <div style={gridStyle}>
            {SERVICE_OPTIONS.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => {
                  setService(opt);
                  setStep(2);
                }}
                style={{
                  ...serviceBtn,
                  borderColor:
                    service === opt ? "var(--accent)" : "var(--rule)",
                  color: service === opt ? "var(--accent)" : "var(--ink)",
                }}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div>
          <h3 style={headingStyle}>
            Where&#39;s the <em>project?</em>
          </h3>
          <label style={labelStyle}>Postcode</label>
          <input
            type="text"
            placeholder="e.g. SW6 3PA"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            style={inputStyle}
            autoFocus
          />
          <div style={navRow}>
            <button type="button" onClick={() => setStep(1)} style={backBtn}>
              &#8592; Back
            </button>
            <button
              type="button"
              className="btn"
              onClick={() => setStep(3)}
              disabled={!postcode.trim()}
              style={{ opacity: postcode.trim() ? 1 : 0.4 }}
            >
              Continue <span className="arr"></span>
            </button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div>
          <h3 style={headingStyle}>
            Tell us <em>more</em>
          </h3>
          <label style={labelStyle}>Name</label>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            autoFocus
          />
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Phone</label>
          <input
            type="tel"
            placeholder="+44 7XXX XXX XXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />
          <label style={labelStyle}>Project details</label>
          <textarea
            placeholder="Tell us about the build — budget, timeline, drawings, anything useful."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={4}
            style={{ ...inputStyle, resize: "vertical", minHeight: "100px" }}
          />
          {error && (
            <p
              style={{
                color: "#c0392b",
                fontFamily: "var(--sans)",
                fontSize: "14px",
                marginTop: "8px",
              }}
            >
              {error}
            </p>
          )}
          <div style={navRow}>
            <button type="button" onClick={() => setStep(2)} style={backBtn}>
              &#8592; Back
            </button>
            <button
              type="button"
              className="btn"
              onClick={handleSubmit}
              disabled={!name.trim() || !email.trim() || submitting}
              style={{
                opacity: name.trim() && email.trim() && !submitting ? 1 : 0.4,
              }}
            >
              {submitting ? "Sending..." : "Submit enquiry"}{" "}
              <span className="arr"></span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Styles ---------- */

const containerStyle: React.CSSProperties = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "32px",
  border: "1px solid var(--rule)",
  borderRadius: "2px",
  background: "var(--bg)",
};

const progressStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "32px",
};

const progressBarBg: React.CSSProperties = {
  flex: 1,
  height: "2px",
  background: "var(--rule)",
  borderRadius: "1px",
  overflow: "hidden",
};

const progressBarFill: React.CSSProperties = {
  height: "100%",
  background: "var(--accent)",
  transition: "width 0.3s ease",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "var(--serif)",
  fontSize: "clamp(22px, 3vw, 28px)",
  fontWeight: 400,
  color: "var(--ink)",
  marginBottom: "24px",
  lineHeight: 1.2,
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
  gap: "10px",
};

const serviceBtn: React.CSSProperties = {
  fontFamily: "var(--sans)",
  fontSize: "14px",
  padding: "14px 16px",
  border: "1px solid var(--rule)",
  borderRadius: "2px",
  background: "transparent",
  cursor: "pointer",
  textAlign: "left",
  transition: "border-color 0.2s, color 0.2s",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "var(--mono)",
  fontSize: "11px",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--mute)",
  marginBottom: "6px",
  marginTop: "16px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontFamily: "var(--sans)",
  fontSize: "15px",
  padding: "12px 14px",
  border: "1px solid var(--rule)",
  borderRadius: "2px",
  background: "transparent",
  color: "var(--ink)",
  outline: "none",
  boxSizing: "border-box",
};

const navRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "28px",
  gap: "12px",
};

const backBtn: React.CSSProperties = {
  fontFamily: "var(--mono)",
  fontSize: "12px",
  letterSpacing: "0.06em",
  color: "var(--mute)",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "8px 0",
};
