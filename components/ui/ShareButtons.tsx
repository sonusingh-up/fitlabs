"use client";

import { useState, useEffect } from "react";
import { Link2, X } from "lucide-react";

export default function ShareButtons({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `https://fitlabreviews.com/blog/${slug}`;
  const encoded = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(t);
  }, [copied]);

  function copyLink() {
    navigator.clipboard.writeText(url);
    setCopied(true);
  }

  const btnBase: React.CSSProperties = {
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
    transition: "border-color 0.2s, background-color 0.2s, color 0.2s, transform 0.2s",
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "center" }}>
        <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 8, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4C9C5", writingMode: "vertical-rl" }}>Share</span>

        {/* X / Twitter */}
        <a
          href={`https://twitter.com/intent/tweet?url=${encoded}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          style={btnBase}
          aria-label="Share on X"
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#17211C"; e.currentTarget.style.backgroundColor = "#17211C"; e.currentTarget.style.color = "#FFFFFF"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E4E8E5"; e.currentTarget.style.backgroundColor = "#FFFFFF"; e.currentTarget.style.color = "#586259"; }}
        >
          <X size={14} strokeWidth={2.5} />
        </a>

        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          style={btnBase}
          aria-label="Share on LinkedIn"
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#0A66C2"; e.currentTarget.style.backgroundColor = "#0A66C2"; e.currentTarget.style.color = "#FFFFFF"; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E4E8E5"; e.currentTarget.style.backgroundColor = "#FFFFFF"; e.currentTarget.style.color = "#586259"; }}
        >
          <span style={{ fontFamily: "var(--font-hanken), sans-serif", fontSize: 13, fontWeight: 700 }}>in</span>
        </a>

        {/* Copy link */}
        <button
          onClick={copyLink}
          style={{
            ...btnBase,
            border: copied ? "1px solid #0F7A5A" : "1px solid #E4E8E5",
            backgroundColor: copied ? "#0F7A5A" : "#FFFFFF",
            color: copied ? "#FFFFFF" : "#586259",
            transform: copied ? "scale(1.1)" : "scale(1)",
          }}
          aria-label="Copy link"
        >
          {copied ? (
            <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
              <path d="M3 7.5L5.5 10L11 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <Link2 size={14} />
          )}
        </button>
      </div>

      {/* Toast notification */}
      {copied && (
        <div style={{
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          padding: "10px 20px",
          backgroundColor: "#17211C",
          color: "#FFFFFF",
          fontSize: 13,
          fontFamily: "var(--font-hanken), sans-serif",
          fontWeight: 600,
          borderRadius: 8,
          boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          gap: 8,
          animation: "toastIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        }}>
          <svg width={14} height={14} viewBox="0 0 14 14" fill="none">
            <path d="M3 7.5L5.5 10L11 4" stroke="#0F7A5A" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Link copied to clipboard
        </div>
      )}

      <style>{`
        @keyframes toastIn {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </>
  );
}
