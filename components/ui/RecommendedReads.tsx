"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface Article {
  slug: string;
  href: string;
  category: string;
  title: string;
  mins: number;
  evidence: string;
  image: string;
  tags: string[];
}

const TABS = ["Top Reads", "Fitness", "Nutrition", "Reviews", "Sleep & Recovery"];

export default function RecommendedReads({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState("Top Reads");

  const filtered = active === "Top Reads"
    ? articles
    : articles.filter((a) => a.tags.includes(active));

  return (
    <>
      <div className="hp-filter-scroll" style={{ marginBottom: 40 }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              padding: "10px 20px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              background: active === tab ? "#0F7A5A" : "transparent",
              color: active === tab ? "#FFFFFF" : "#3F4B43",
              border: active === tab ? "2px solid #0F7A5A" : "2px solid #D7DDD9",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-hanken), sans-serif",
              transition: "all 0.15s ease",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="hp-reads-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        {filtered.map((article) => (
          <Link
            key={article.slug}
            href={article.href}
            style={{ display: "flex", gap: 20, textDecoration: "none", color: "inherit", alignItems: "flex-start" }}
          >
            <div style={{ width: 120, height: 100, flex: "none", borderRadius: 12, overflow: "hidden", position: "relative" }}>
              <Image
                src={article.image}
                alt={article.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="120px"
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#0F7A5A", marginBottom: 8 }}>
                {article.category}
              </div>
              <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 20, fontWeight: 500, lineHeight: 1.22, margin: "0 0 10px", color: "#17211C" }}>
                {article.title}
              </h3>
              <div style={{ fontSize: 13, color: "#6B7770" }}>
                {article.mins} min · {article.evidence}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#6B7770", fontSize: 14, padding: "40px 0" }}>
          No articles in this category yet. Check back soon.
        </p>
      )}
    </>
  );
}
