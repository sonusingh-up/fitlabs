"use client";

import { useState } from "react";

const tocItems = [
  { id: "overview",   label: "Brand overview" },
  { id: "verdict",    label: "Quick verdict" },
  { id: "certs",      label: "Certifications & testing" },
  { id: "evidence",   label: "Clinical claims" },
  { id: "products",   label: "Product lineup" },
  { id: "reviews",    label: "Reviewed products" },
  { id: "faq",        label: "FAQ" },
  { id: "stance",     label: "Editorial stance" },
];

export default function ArraeMobileTOC() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Page sections"
      style={{
        margin: "0 0 8px",
        border: "1px solid #E4E8E5",
        borderRadius: 10,
        overflow: "hidden",
        backgroundColor: "#F6F8F6",
      }}
    >
      {/* Toggle button */}
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
          borderBottom: open ? "1px solid #E4E8E5" : "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-jetbrains), monospace",
            fontSize: 10,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#3F4B43",
          }}
        >
          On this page
        </span>
        {/* Chevron */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          style={{
            transition: "transform 0.2s",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
          }}
        >
          <path
            d="M2.5 5L7 9.5L11.5 5"
            stroke="#6B7770"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Link list */}
      {open && (
        <ul style={{ margin: 0, padding: "6px 0", listStyle: "none" }}>
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 16px",
                  fontSize: 13,
                  color: "#3F4B43",
                  textDecoration: "none",
                  borderLeft: "2px solid transparent",
                  transition: "color 0.12s, border-color 0.12s, background 0.12s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#0F7A5A";
                  el.style.borderLeftColor = "#0F7A5A";
                  el.style.backgroundColor = "#F2F8F4";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#3F4B43";
                  el.style.borderLeftColor = "transparent";
                  el.style.backgroundColor = "transparent";
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-jetbrains), monospace",
                    fontSize: 9,
                    color: "#586259",
                    letterSpacing: "0.1em",
                    flexShrink: 0,
                  }}
                >
                  §
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
