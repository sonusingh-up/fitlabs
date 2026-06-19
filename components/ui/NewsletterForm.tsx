"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 18px", backgroundColor: "#E8F5EF", borderRadius: 999, maxWidth: 430 }}>
        <span style={{ fontSize: 16 }}>✓</span>
        <span style={{ fontSize: 14, color: "#0F7A5A", fontWeight: 600 }}>You&apos;re in! Check your inbox for a welcome email.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="hp-newsletter-form" style={{ display: "flex", background: "#FFFFFF", borderRadius: 999, padding: 6, border: "1px solid #CFE2D8", maxWidth: 430 }}>
      <label htmlFor="hp-newsletter-email" className="sr-only">Email address</label>
      <input
        id="hp-newsletter-email"
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ flex: 1, border: "none", background: "none", padding: "0 18px", fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 15, color: "#17211C", outline: "none" }}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{ background: "#0F7A5A", color: "#FFFFFF", border: "none", fontWeight: 700, fontSize: 14, padding: "12px 26px", borderRadius: 999, cursor: status === "loading" ? "wait" : "pointer", whiteSpace: "nowrap", minHeight: 44, opacity: status === "loading" ? 0.7 : 1 }}
      >
        {status === "loading" ? "Joining..." : "Join free"}
      </button>
      {status === "error" && (
        <span style={{ position: "absolute", bottom: -20, left: 0, fontSize: 12, color: "#C0392B" }}>Something went wrong. Try again.</span>
      )}
    </form>
  );
}
