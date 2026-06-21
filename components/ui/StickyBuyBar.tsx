"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink, X } from "lucide-react";
import type { ReviewRating } from "@/lib/types";
import { ratingColor } from "@/lib/utils";

interface Props {
  productName: string;
  price?: string;
  url: string;
  /** Optional — enables the richer monogram + FSP score display */
  brand?: string;
  /** Optional — shows the FSP score chip next to the price */
  rating?: ReviewRating;
}

export default function StickyBuyBar({ productName, price, url, brand, rating }: Props) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed) return null;

  const scoreColor = rating != null ? ratingColor(rating) : "#0F7A5A";

  return (
    <div className="sticky-buy-bar">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, maxWidth: 600, margin: "0 auto", width: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
          {brand && (
            <div
              aria-hidden
              style={{
                flexShrink: 0,
                width: 40,
                height: 40,
                borderRadius: 9,
                background: "linear-gradient(150deg,#0F2420,#17211c)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 800, fontSize: 15, color: "#fff" }}>
                {brand.slice(0, 2).toUpperCase()}
              </span>
            </div>
          )}
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#17211C", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "var(--font-dm-sans)" }}>{productName}</p>
            {(price || rating != null) && (
              <p style={{ fontSize: 11, color: "#6B7770", margin: "1px 0 0", fontFamily: "var(--font-dm-sans)" }}>
                {rating != null && (
                  <>
                    FSP <span style={{ fontWeight: 700, color: scoreColor }}>{rating}/10</span>
                    {price ? " · " : ""}
                  </>
                )}
                {price}
              </p>
            )}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid #E4E8E5", background: "#fff", cursor: "pointer", color: "#9AA39C", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <X size={15} />
          </button>
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            style={{ padding: "10px 20px", background: "#0F7A5A", color: "#fff", fontSize: 13, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}
          >
            Check Price <ExternalLink size={12} />
          </Link>
        </div>
      </div>
    </div>
  );
}
