"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { User, Mail, Calendar, Shield, LogOut, Loader2, Save } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

interface Props {
  user: {
    id: string;
    email: string;
    fullName: string;
    avatarUrl: string;
    provider: string;
    createdAt: string;
  };
}

export default function AccountClient({ user }: Props) {
  const router = useRouter();
  const [fullName, setFullName] = useState(user.fullName);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleSave() {
    setSaving(true);
    const supabase = createClient();
    await supabase.from("profiles").update({ full_name: fullName, updated_at: new Date().toISOString() }).eq("id", user.id);
    await supabase.auth.updateUser({ data: { full_name: fullName } });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  async function handleLogout() {
    setLoggingOut(true);
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  const initials = fullName
    ? fullName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : user.email[0].toUpperCase();

  const joinDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div style={{ minHeight: "70vh", backgroundColor: "#F6F8F6", padding: "48px 16px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: 24 }}>
          <Link href="/" style={{ fontSize: 13, color: "#586259", textDecoration: "none", fontFamily: "var(--font-dm-sans)" }}>Home</Link>
          <span style={{ margin: "0 8px", color: "#B8C4BA" }}>/</span>
          <span style={{ fontSize: 13, color: "#17211C", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>Account</span>
        </div>

        {/* Profile header */}
        <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: 32, border: "1px solid #E4E8E5", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt="" width={64} height={64} style={{ borderRadius: "50%", objectFit: "cover" }} />
            ) : (
              <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm-sans)" }}>
                {initials}
              </div>
            )}
            <div>
              <div style={{ fontSize: 20, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-playfair)" }}>{fullName || "Your Account"}</div>
              <div style={{ fontSize: 13, color: "#586259", fontFamily: "var(--font-dm-sans)", marginTop: 2 }}>Member since {joinDate}</div>
            </div>
          </div>

          {/* Editable fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="auth-field">
              <label className="auth-label" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <User size={14} /> Full name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="auth-input"
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #D7DDD9", fontSize: 15, fontFamily: "var(--font-dm-sans)", color: "#17211C" }}
              />
            </div>

            <div className="auth-field">
              <label className="auth-label" style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <Mail size={14} /> Email
              </label>
              <input
                type="email"
                value={user.email}
                disabled
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #E4E8E5", fontSize: 15, fontFamily: "var(--font-dm-sans)", color: "#586259", backgroundColor: "#F6F8F6", cursor: "not-allowed" }}
              />
            </div>

            <div style={{ display: "flex", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#586259", fontFamily: "var(--font-jetbrains), monospace", padding: "4px 10px", backgroundColor: "#E7F2EC", borderRadius: 6 }}>
                <Shield size={12} />
                {user.provider === "google" ? "Google" : "Email"} login
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "#586259", fontFamily: "var(--font-jetbrains), monospace", padding: "4px 10px", backgroundColor: "#F6F8F6", borderRadius: 6 }}>
                <Calendar size={12} />
                Joined {joinDate}
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            <button
              onClick={handleSave}
              disabled={saving || fullName === user.fullName}
              className="auth-submit"
              style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: fullName === user.fullName ? 0.5 : 1 }}
            >
              {saving ? <Loader2 size={18} className="auth-spinner" /> : saved ? "Saved!" : <><Save size={16} /> Save changes</>}
            </button>
          </div>
        </div>

        {/* Sign out */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          style={{
            width: "100%",
            padding: "14px 20px",
            backgroundColor: "#fff",
            border: "1px solid #E4E8E5",
            borderRadius: 12,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            fontSize: 15,
            fontWeight: 600,
            color: "#DC2626",
            fontFamily: "var(--font-dm-sans)",
            transition: "background-color 150ms",
          }}
        >
          {loggingOut ? <Loader2 size={18} className="auth-spinner" /> : <><LogOut size={16} /> Sign out</>}
        </button>
      </div>
    </div>
  );
}
