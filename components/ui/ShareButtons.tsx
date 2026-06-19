"use client";

import { useState } from "react";

export default function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://fitlabreviews.com/blog/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  function copyLink() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const btnStyle: React.CSSProperties = {
    width: 36,
    height: 36,
    borderRadius: "50%",
    border: "1px solid #E4E8E5",
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: 14,
    color: "#586259",
    textDecoration: "none",
    transition: "border-color 0.15s, background-color 0.15s",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
      <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A7B6F", writingMode: "vertical-rl" }}>Share</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        aria-label="Share on X"
      >
        𝕏
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
        target="_blank"
        rel="noopener noreferrer"
        style={btnStyle}
        aria-label="Share on LinkedIn"
      >
        in
      </a>
      <button
        onClick={copyLink}
        style={{ ...btnStyle, border: copied ? "1px solid #0F7A5A" : "1px solid #E4E8E5", backgroundColor: copied ? "#F2F8F4" : "#FFFFFF", color: copied ? "#0F7A5A" : "#586259" }}
        aria-label="Copy link"
      >
        {copied ? "✓" : "🔗"}
      </button>
    </div>
  );
}
