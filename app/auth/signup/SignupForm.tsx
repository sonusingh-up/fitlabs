"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, Mail, User, Loader2, CheckCircle2 } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

export default function SignupForm() {
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/account";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error: err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${redirect}`,
      },
    });
    setLoading(false);

    if (err) {
      setError(err.message);
    } else {
      setSuccess(true);
    }
  }

  async function handleGoogle() {
    setGoogleLoading(true);
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/auth/callback?next=${redirect}` },
    });
  }

  if (success) {
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ textAlign: "center" }}>
          <CheckCircle2 size={48} style={{ color: "#0F7A5A", margin: "0 auto 16px" }} />
          <h1 className="auth-heading">Check your email</h1>
          <p style={{ fontSize: 15, color: "#586259", lineHeight: 1.6, marginTop: 8 }}>
            We sent a confirmation link to <strong style={{ color: "#17211C" }}>{email}</strong>.
            Click the link to activate your account.
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
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontWeight: 900, fontSize: 22, color: "#17211C", letterSpacing: "-0.03em" }}>
              fitlabreviews
            </span>
          </Link>
        </div>

        <h1 className="auth-heading">Create your account</h1>
        <p className="auth-subtext">
          Already have an account?{" "}
          <Link href={`/auth/login${redirect !== "/account" ? `?redirect=${redirect}` : ""}`} className="auth-link">
            Log in
          </Link>
        </p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="auth-field">
            <label htmlFor="name" className="auth-label">Full name</label>
            <div className="auth-input-wrap">
              <User size={18} className="auth-input-icon" />
              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="auth-input"
              />
            </div>
          </div>

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

          <div className="auth-field">
            <label htmlFor="password" className="auth-label">Password</label>
            <div className="auth-input-wrap">
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

          <button type="submit" disabled={loading} className="auth-submit">
            {loading ? <Loader2 size={20} className="auth-spinner" /> : "Sign up"}
          </button>
        </form>

        <div className="auth-divider">
          <span>or</span>
        </div>

        <button onClick={handleGoogle} disabled={googleLoading} className="auth-social-btn">
          {googleLoading ? (
            <Loader2 size={18} className="auth-spinner" />
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4"/>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853"/>
              <path d="M3.964 10.706A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 0 0 0 9c0 1.452.348 2.827.957 4.038l3.007-2.332Z" fill="#FBBC05"/>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.962L3.964 7.294C4.672 5.166 6.656 3.58 9 3.58Z" fill="#EA4335"/>
            </svg>
          )}
          Continue with Google
        </button>

        <p className="auth-terms">
          By signing up, you agree to our{" "}
          <Link href="/terms" className="auth-link">Terms</Link> and{" "}
          <Link href="/privacy" className="auth-link">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
