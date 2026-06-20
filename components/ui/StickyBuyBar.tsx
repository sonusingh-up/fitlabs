"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface Props {
  productName: string;
  price?: string;
  url: string;
}

export default function StickyBuyBar({ productName, price, url }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sticky-buy-bar">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, maxWidth: 600, margin: "0 auto", width: "100%" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#17211C", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", fontFamily: "var(--font-dm-sans)" }}>{productName}</p>
          {price && <p style={{ fontSize: 11, color: "#6B7770", margin: 0, fontFamily: "var(--font-dm-sans)" }}>{price}</p>}
        </div>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{ padding: "10px 20px", background: "#0F7A5A", color: "#fff", fontSize: 13, fontWeight: 700, borderRadius: 10, fontFamily: "var(--font-dm-sans)", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}
        >
          Check Price <ExternalLink size={12} />
        </Link>
      </div>
    </div>
  );
}
