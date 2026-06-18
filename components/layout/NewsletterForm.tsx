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

  if (status === "sent") {
    return <p style={{ color: "#0F7A5A", fontSize: 14, margin: 0, fontWeight: 600 }}>Subscribed — thank you!</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 340 }}>
      <div style={{ display: "flex", background: "#FFFFFF", borderRadius: 999, padding: 5, border: "1px solid #D4E6DC" }}>
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          style={{
            flex: 1,
            border: "none",
            background: "none",
            padding: "8px 14px",
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: 14,
            color: "#17211C",
            outline: "none",
            minWidth: 0,
          }}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            padding: "9px 18px",
            backgroundColor: "#0F7A5A",
            color: "#FFFFFF",
            fontSize: 13,
            fontWeight: 700,
            border: "none",
            borderRadius: 999,
            cursor: status === "sending" ? "wait" : "pointer",
            fontFamily: "var(--font-dm-sans), sans-serif",
            whiteSpace: "nowrap",
            opacity: status === "sending" ? 0.6 : 1,
            flexShrink: 0,
          }}
        >
          {status === "sending" ? "..." : "Subscribe"}
        </button>
      </div>
      {status === "error" && (
        <p style={{ color: "#C8412B", fontSize: 13, margin: 0 }}>Failed — please try again.</p>
      )}
    </form>
  );
}
