"use client";

import { useState } from "react";

const tocItems = [
  { id: "overview",  label: "Brand overview" },
  { id: "verdict",   label: "Quick verdict" },
  { id: "certs",     label: "Certifications & testing" },
  { id: "products",  label: "Product lineup" },
  { id: "reviews",   label: "Reviewed products" },
  { id: "faq",       label: "FAQ" },
  { id: "stance",    label: "Editorial stance" },
];

export default function MyProteinMobileTOC() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Page sections"
      style={{
        margin: "0 0 8px",
        border: "1px solid #D4C9B8",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#F8F2E4",
      }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "13px 16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          borderBottom: open ? "1px solid #D4C9B8" : "none",
        }}
      >
        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "#5C5650" }}>
          On this page
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
          <path d="M2.5 5L7 9.5L11.5 5" stroke="#8A8480" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul style={{ margin: 0, padding: "6px 0", listStyle: "none" }}>
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 16px", fontSize: 13, color: "#5C5650", textDecoration: "none", borderLeft: "2px solid transparent" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#C4622D"; el.style.borderLeftColor = "#C4622D"; el.style.backgroundColor = "#EDE8DF"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.color = "#5C5650"; el.style.borderLeftColor = "transparent"; el.style.backgroundColor = "transparent"; }}
              >
                <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", letterSpacing: "0.1em", flexShrink: 0 }}>§</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
