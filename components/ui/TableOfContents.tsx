"use client";

import { useState, useEffect } from "react";

interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -70% 0%" }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 88,
        maxHeight: "calc(100vh - 120px)",
        overflowY: "auto",
        padding: "20px 0",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-jetbrains), monospace",
          fontSize: 9,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#586259",
          marginBottom: 16,
          paddingLeft: 14,
        }}
      >
        Contents
      </p>
      <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "7px 14px",
                fontSize: 12.5,
                fontFamily: "var(--font-dm-sans), sans-serif",
                color: active === item.id ? "#0F7A5A" : "#3F4B43",
                fontWeight: active === item.id ? 600 : 400,
                borderLeft: `2px solid ${active === item.id ? "#0F7A5A" : "transparent"}`,
                textDecoration: "none",
                transition: "all 0.15s",
                lineHeight: 1.3,
              }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 9,
                  color: active === item.id ? "#0F7A5A" : "#586259",
                  minWidth: 16,
                  textAlign: "right",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
