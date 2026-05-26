"use client";

import { useState } from "react";
import { ChevronDown, List } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

export default function MobileTOC({ items }: { items: TocItem[] }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <div style={{ border: "1px solid #D4C9B8", borderRadius: 10, overflow: "hidden", marginBottom: 24 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px", backgroundColor: "#EDE8DF", border: "none", cursor: "pointer",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#5C5650", fontWeight: 600 }}>
          <List size={13} style={{ color: "#A89880" }} />
          Table of Contents
        </span>
        <ChevronDown
          size={14}
          style={{ color: "#8A8480", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
        />
      </button>
      {open && (
        <div style={{ backgroundColor: "#F8F2E4", padding: "8px 0" }}>
          {items.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 12,
                padding: "9px 16px", background: "none", border: "none", cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", minWidth: 18 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={{ fontSize: 13, color: "#2D2926", fontFamily: "var(--font-dm-sans), sans-serif" }}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
