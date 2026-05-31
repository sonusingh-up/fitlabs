"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Search } from "lucide-react";

const skinNav = [
  { label: "Overview",    href: "/skin" },
  { label: "Guides",      href: "/skin/guides" },
  { label: "Conditions",  href: "/skin/conditions" },
  { label: "Routines",    href: "/skin/routines" },
  { label: "Ingredients", href: "/skin/ingredients" },
  { label: "About",       href: "/skin/about" },
];

export default function SkinHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#F2EBD9", position: "sticky", top: 0, zIndex: 50 }}>

      {/* Top editorial strip — hidden on mobile */}
      <div className="header-strip" style={{ borderBottom: "1px solid #D4C9B8", padding: "5px 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480" }}>
            FITLABREVIEWS · SKIN HEALTH SECTION
          </span>
          <Link
            href="/"
            style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", textDecoration: "none" }}
          >
            ← fitlabreviews.com
          </Link>
        </div>
      </div>

      {/* Main nav row */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 56 }}>

          {/* Logo */}
          <Link
            href="/skin"
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}
            aria-label="Fitlabreviews Skin home"
          >
            <Image
              src="/logo-banner.svg"
              alt="Fitlabreviews"
              width={130}
              height={32}
              priority
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
            <span style={{ width: 1, height: 20, backgroundColor: "#D4C9B8", flexShrink: 0 }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4622D", whiteSpace: "nowrap" }}>
              Skin
            </span>
          </Link>

          {/* Desktop nav — flat, no dropdowns */}
          <nav className="header-desktop-nav" style={{ alignItems: "center", gap: 2 }}>
            {skinNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  padding: "6px 10px",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#1A1714",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  borderRadius: 6,
                  transition: "color 0.15s",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C4622D")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#1A1714")}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <Link href="/search" style={{ color: "#5C5650", display: "flex", alignItems: "center", padding: 6 }} aria-label="Search">
              <Search size={18} />
            </Link>
            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="header-hamburger"
              style={{ color: "#1A1714", padding: 6, background: "none", border: "none", cursor: "pointer" }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div style={{ borderTop: "1px solid #D4C9B8", backgroundColor: "#F8F2E4" }}>
          <div style={{ padding: "8px 16px 24px" }}>
            {skinNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#1A1714",
                  fontFamily: "var(--font-dm-sans), sans-serif",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid #EDE8DF",
                }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            {/* Back to main site */}
            <div style={{ paddingTop: 16 }}>
              <Link
                href="/"
                style={{ display: "block", textAlign: "center", padding: "12px 20px", border: "1px solid #D4C9B8", color: "#5C5650", fontSize: 13, fontWeight: 500, borderRadius: 8, fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", backgroundColor: "#EDE8DF" }}
                onClick={() => setMobileOpen(false)}
              >
                ← Back to Fitlabreviews
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
