"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";

export default function GoalAuthGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<"loading" | "authenticated" | "unauthenticated">("loading");

  useEffect(() => {
    try {
      const supabase = createClient();
      supabase.auth.getUser()
        .then(({ data }) => setStatus(data.user ? "authenticated" : "unauthenticated"))
        .catch(() => setStatus("unauthenticated"));
    } catch {
      setStatus("unauthenticated");
    }
  }, []);

  if (status === "loading") return <>{children}</>;
  if (status === "authenticated") return <>{children}</>;

  return (
    <div style={{ position: "relative" }}>
      <div style={{ maxHeight: 320, overflow: "hidden", maskImage: "linear-gradient(to bottom, black 30%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 100%)" }}>
        {children}
      </div>
      <div style={{
        position: "relative",
        marginTop: -40,
        padding: "48px 24px",
        textAlign: "center",
        background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 15%)",
      }}>
        <div style={{
          maxWidth: 480,
          margin: "0 auto",
          padding: "36px 32px",
          borderRadius: 16,
          border: "1px solid #E4E8E5",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: "linear-gradient(135deg, #0F7A5A, #17211C)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 16px",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h3 style={{
            fontFamily: "var(--font-newsreader), Georgia, serif",
            fontSize: "1.35rem", fontWeight: 700, color: "#1A1714",
            marginBottom: 8,
          }}>
            Free account required
          </h3>
          <p style={{
            fontSize: 14, color: "#586259", lineHeight: 1.65,
            marginBottom: 24, maxWidth: 360, margin: "0 auto 24px",
          }}>
            Our goal guides include evidence-graded supplement stacks, dosing protocols, and actionable plans. Create a free account to unlock the full article.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "center" }}>
            <Link
              href="/auth/signup"
              style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                padding: "12px 32px", borderRadius: 10,
                background: "linear-gradient(135deg, #0F7A5A, #17211C)",
                color: "#FFFFFF", fontWeight: 700, fontSize: 14,
                fontFamily: "var(--font-hanken), sans-serif",
                textDecoration: "none", minWidth: 200,
              }}
            >
              Create Free Account
            </Link>
            <Link
              href="/auth/login"
              style={{
                fontSize: 13, color: "#0F7A5A", fontWeight: 600,
                fontFamily: "var(--font-hanken), sans-serif",
                textDecoration: "none",
              }}
            >
              Already have an account? Log in →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
