"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email: fd.get("email") }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="newsletter-form-row" onSubmit={handleSubmit}>
      {status === "sent" ? (
        <p style={{ color: "#0f7a5a", fontSize: 14, margin: 0 }}>Subscribed — thank you!</p>
      ) : (
        <>
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            style={{
              flex: 1,
              padding: "10px 14px",
              backgroundColor: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              color: "#F9FAFB",
              fontSize: 14,
              fontFamily: "var(--font-dm-sans), sans-serif",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "10px 20px",
              backgroundColor: "#0f7a5a",
              color: "#FFFFFF",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              border: "none",
              borderRadius: 8,
              cursor: status === "sending" ? "wait" : "pointer",
              fontFamily: "var(--font-dm-sans), sans-serif",
              whiteSpace: "nowrap",
              opacity: status === "sending" ? 0.6 : 1,
            }}
          >
            {status === "sending" ? "..." : "Subscribe"}
          </button>
          {status === "error" && (
            <p style={{ color: "#EF4444", fontSize: 13, margin: 0 }}>Failed — try again.</p>
          )}
        </>
      )}
    </form>
  );
}
