"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { type ArticleEntry, getArticleImage } from "@/lib/articles";

const TABS = ["Top Reads", "Fitness", "Nutrition", "Reviews", "Sleep & Recovery"];

export default function RecommendedReads({ articles }: { articles: ArticleEntry[] }) {
  const [active, setActive] = useState("Top Reads");

  const filtered = active === "Top Reads"
    ? articles
    : articles.filter((a) => a.tags.includes(active));

  return (
    <>
      <div className="hp-filter-scroll" style={{ marginBottom: 40 }}>
        {TABS.map((tab) => {
          const count = tab === "Top Reads" ? articles.length : articles.filter(a => a.tags.includes(tab)).length;
          return (
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
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {tab}
              {active !== tab && count > 0 && (
                <span style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace" }}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
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
                src={getArticleImage(article)}
                alt={article.title}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="120px"
              />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase", color: "#0F7A5A" }}>
                  {article.category}
                </span>
                <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: ".06em", textTransform: "uppercase", color: "#FFFFFF", backgroundColor: article.type === "research" ? "#17211C" : article.type === "blog" ? "#0F7A5A" : "#C98A1E", padding: "1px 6px", borderRadius: 4 }}>
                  {article.type}
                </span>
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
