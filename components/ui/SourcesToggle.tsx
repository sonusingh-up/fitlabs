"use client";

import { useState } from "react";

export interface Source {
  text: string;
  url?: string;
}

export interface HistoryEntry {
  date: string;
  note: string;
}

interface SourcesToggleProps {
  sources: Source[];
  history: HistoryEntry[];
}

export default function SourcesToggle({ sources, history }: SourcesToggleProps) {
  const [open, setOpen] = useState<"sources" | "history" | null>(null);
  const toggle = (tab: "sources" | "history") =>
    setOpen((prev) => (prev === tab ? null : tab));

  const activePill: React.CSSProperties = {
    border: "1px solid var(--accent)",
    background: "var(--bg-light)",
    color: "var(--accent)",
  };
  const idlePill: React.CSSProperties = {
    border: "1px solid var(--border)",
    background: "#fff",
    color: "#3F4B43",
  };
  const pill: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "8px 16px",
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "var(--font-dm-sans), sans-serif",
    cursor: "pointer",
    transition: "background-color 150ms var(--ease-out-expo), border-color 150ms var(--ease-out-expo), color 150ms var(--ease-out-expo)",
  };

  const panel: React.CSSProperties = {
    marginTop: 22,
    border: "1px solid var(--border)",
    borderRadius: 12,
    padding: "22px 24px",
    background: "var(--bg-alt)",
  };
  const panelLabel: React.CSSProperties = {
    fontFamily: "var(--font-jetbrains), monospace",
    fontSize: 10,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    color: "var(--accent)",
    margin: "0 0 14px",
  };

  return (
    <div>
      <div style={{ display: "flex", gap: 10 }}>
        <button
          type="button"
          onClick={() => toggle("sources")}
          aria-expanded={open === "sources"}
          style={{ ...pill, ...(open === "sources" ? activePill : idlePill) }}
        >
          Sources
          {sources.length > 0 && (
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, opacity: 0.7 }}>
              {sources.length}
            </span>
          )}
        </button>
        <button
          type="button"
          onClick={() => toggle("history")}
          aria-expanded={open === "history"}
          style={{ ...pill, ...(open === "history" ? activePill : idlePill) }}
        >
          History
        </button>
      </div>

      {open === "sources" && (
        <div style={panel}>
          <p style={panelLabel}>Sources</p>
          <ol style={{ paddingLeft: 18, display: "flex", flexDirection: "column", gap: 10, margin: 0 }}>
            {sources.map((s, i) => (
              <li key={i} style={{ fontSize: 13, lineHeight: 1.6, color: "#3F4B43" }}>
                {s.text}
                {s.url && (
                  <>
                    {" "}
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--accent)", textDecoration: "none", fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, whiteSpace: "nowrap" }}
                    >
                      link →
                    </a>
                  </>
                )}
              </li>
            ))}
          </ol>
        </div>
      )}

      {open === "history" && (
        <div style={panel}>
          <p style={panelLabel}>Article history</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {history.map((h, i) => (
              <div key={i} style={{ display: "flex", gap: 14 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, color: "var(--accent)", minWidth: 96, paddingTop: 1, flexShrink: 0 }}>
                  {h.date}
                </span>
                <span style={{ fontSize: 13, lineHeight: 1.55, color: "#3F4B43" }}>
                  {h.note}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
