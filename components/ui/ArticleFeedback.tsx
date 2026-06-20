"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown } from "lucide-react";

export default function ArticleFeedback({ slug }: { slug: string }) {
  const [submitted, setSubmitted] = useState(false);

  async function handleVote(helpful: boolean) {
    setSubmitted(true);
    try {
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, helpful }),
      });
    } catch {}
  }

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "16px 0" }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: "#0F7A5A", fontFamily: "var(--font-dm-sans)", margin: 0 }}>Thank you for your feedback!</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <p style={{ fontSize: 15, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", marginBottom: 12 }}>Was this article helpful?</p>
      <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
        <button
          onClick={() => handleVote(true)}
          style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid #0F7A5A", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F7A5A", transition: "background 150ms" }}
          aria-label="Yes, helpful"
        >
          <ThumbsUp size={18} />
        </button>
        <button
          onClick={() => handleVote(false)}
          style={{ width: 48, height: 48, borderRadius: "50%", border: "2px solid #DC2626", background: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#DC2626", transition: "background 150ms" }}
          aria-label="No, not helpful"
        >
          <ThumbsDown size={18} />
        </button>
      </div>
    </div>
  );
}
