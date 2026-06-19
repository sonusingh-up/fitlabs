"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  async function handleReset(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const supabase = createClient();
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/account`,
    });
    setLoading(false);
    if (err) {
      setError(err.message);
    } else {
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <CheckCircle2 size={48} style={{ color: "#0F7A5A", margin: "0 auto 16px" }} />
          <h1 className="auth-heading">Check your email</h1>
          <p style={{ fontSize: 15, color: "#586259", lineHeight: 1.6, marginTop: 8 }}>
            If an account exists for <strong style={{ color: "#17211C" }}>{email}</strong>,
            you&apos;ll receive a password reset link.
          </p>
          <Link href="/auth/login" className="auth-submit" style={{ display: "block", textAlign: "center", marginTop: 24, textDecoration: "none" }}>
            Back to log in
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 900, fontSize: 22, color: "#17211C", letterSpacing: "-0.03em" }}>
              fitlabreviews
            </span>
          </Link>
        </div>

        <h1 className="auth-heading">Reset password</h1>
        <p className="auth-subtext">
          Enter your email and we&apos;ll send you a reset link.
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleReset} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="auth-field">
            <label htmlFor="email" className="auth-label">Email address</label>
            <div className="auth-input-wrap">
              <Mail size={18} className="auth-input-icon" />
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="auth-input"
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className="auth-submit">
            {loading ? <Loader2 size={20} className="auth-spinner" /> : "Send reset link"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: 20 }}>
          <Link href="/auth/login" className="auth-link" style={{ fontSize: 14 }}>
            ← Back to log in
          </Link>
        </p>
      </div>
    </div>
  );
}
