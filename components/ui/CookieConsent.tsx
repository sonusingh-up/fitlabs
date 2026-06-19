"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const CONSENT_KEY = "flr_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        ad_user_data: "granted",
        ad_personalization: "granted",
      });
    }
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: "#17211C",
        borderTop: "1px solid #2A3A30",
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: "#CCD5CF",
          lineHeight: 1.6,
          margin: 0,
          maxWidth: 640,
        }}
      >
        We use cookies for analytics (GA4) and advertising (Google AdSense).
        AdSense uses cookies to serve relevant ads.{" "}
        <Link
          href="/privacy#cookies-policy"
          style={{ color: "#14A474", textDecoration: "underline" }}
        >
          Learn more
        </Link>
      </p>
      <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
        <button
          onClick={decline}
          style={{
            padding: "8px 18px",
            fontSize: 12,
            fontWeight: 600,
            color: "#8B9B90",
            backgroundColor: "transparent",
            border: "1px solid #3A4A40",
            borderRadius: 6,
            cursor: "pointer",
            fontFamily: "var(--font-hanken), sans-serif",
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding: "8px 18px",
            fontSize: 12,
            fontWeight: 600,
            color: "#FFFFFF",
            backgroundColor: "#0F7A5A",
            border: "1px solid #0F7A5A",
            borderRadius: 6,
            cursor: "pointer",
            fontFamily: "var(--font-hanken), sans-serif",
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
