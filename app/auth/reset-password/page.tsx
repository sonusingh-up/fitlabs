"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: err } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (err) {
      setError(err.message);
    } else {
      setDone(true);
      setTimeout(() => router.push("/account"), 2000);
    }
  }

  if (done) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <CheckCircle2 size={48} style={{ color: "#0F7A5A", margin: "0 auto 16px" }} />
          <h1 className="auth-heading">Password updated</h1>
          <p style={{ fontSize: 15, color: "#586259", lineHeight: 1.6, marginTop: 8 }}>
            Your password has been changed. Redirecting to your account...
          </p>
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

        <h1 className="auth-heading">Set new password</h1>
        <p className="auth-subtext">
          Choose a new password for your account.
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleUpdate} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="auth-field">
            <label htmlFor="password" className="auth-label">New password</label>
            <div className="auth-input-wrap">
              <Lock size={18} className="auth-input-icon" />
              <input
                id="password"
                type={showPw ? "text" : "password"}
                required
                minLength={6}
                autoComplete="new-password"
                placeholder="At least 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="auth-input"
                style={{ paddingRight: 44 }}
              />
              <button type="button" onClick={() => setShowPw(!showPw)} className="auth-pw-toggle" aria-label={showPw ? "Hide password" : "Show password"}>
                {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="confirm" className="auth-label">Confirm password</label>
            <div className="auth-input-wrap">
              <Lock size={18} className="auth-input-icon" />
              <input
                id="confirm"
                type={showPw ? "text" : "password"}
                required
                minLength={6}
                autoComplete="new-password"
                placeholder="Repeat your password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="auth-input"
              />
            </div>
          </div>

          <button type="submit" disabled={loading} className="auth-submit">
            {loading ? <Loader2 size={20} className="auth-spinner" /> : "Update password"}
          </button>
        </form>
      </div>
    </div>
  );
}
