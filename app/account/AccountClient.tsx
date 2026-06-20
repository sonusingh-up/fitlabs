"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  User, Mail, Calendar, Shield, LogOut, Loader2, Save,
  Lock, Eye, EyeOff, Bookmark, Bell, BellOff, Trash2,
  CheckCircle2, AlertTriangle, ChevronRight, Star,
} from "lucide-react";
import { createClient } from "@/lib/supabase-browser";

interface SavedReview {
  slug: string;
  title: string;
  rating: number;
  category: string;
}

interface Props {
  user: {
    id: string;
    email: string;
    fullName: string;
    avatarUrl: string;
    provider: string;
    createdAt: string;
  };
  savedReviews: SavedReview[];
  emailNotifications: boolean;
}

export default function AccountClient({ user, savedReviews, emailNotifications: initialNotif }: Props) {
  const router = useRouter();

  // Profile
  const [fullName, setFullName] = useState(user.fullName);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // Password
  const [pwOpen, setPwOpen] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [pwLoading, setPwLoading] = useState(false);
  const [pwMsg, setPwMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  // Notifications
  const [emailNotif, setEmailNotif] = useState(initialNotif);
  const [notifSaving, setNotifSaving] = useState(false);

  // Delete account
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Logout
  const [loggingOut, setLoggingOut] = useState(false);

  // Bookmark removal
  const [removingSlug, setRemovingSlug] = useState<string | null>(null);
  const [localSaved, setLocalSaved] = useState(savedReviews);

  const supabase = createClient();

  const initials = fullName
    ? fullName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : user.email[0].toUpperCase();

  const joinDate = new Date(user.createdAt).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  // ── Profile save ──────────────────────────────────────────────
  async function handleSave() {
    setSaving(true);
    await supabase.from("profiles").update({ full_name: fullName, updated_at: new Date().toISOString() }).eq("id", user.id);
    await supabase.auth.updateUser({ data: { full_name: fullName } });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  // ── Password change ──────────────────────────────────────────
  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    setPwMsg(null);
    if (newPw.length < 6) { setPwMsg({ type: "err", text: "New password must be at least 6 characters." }); return; }
    if (newPw !== confirmPw) { setPwMsg({ type: "err", text: "Passwords do not match." }); return; }

    setPwLoading(true);
    // Verify current password by re-signing in
    const { error: signInErr } = await supabase.auth.signInWithPassword({ email: user.email, password: currentPw });
    if (signInErr) { setPwMsg({ type: "err", text: "Current password is incorrect." }); setPwLoading(false); return; }

    const { error: updateErr } = await supabase.auth.updateUser({ password: newPw });
    setPwLoading(false);
    if (updateErr) { setPwMsg({ type: "err", text: updateErr.message }); return; }

    setPwMsg({ type: "ok", text: "Password updated successfully." });
    setCurrentPw(""); setNewPw(""); setConfirmPw("");
    setTimeout(() => { setPwMsg(null); setPwOpen(false); }, 2500);
  }

  // ── Notification toggle ──────────────────────────────────────
  async function handleNotifToggle() {
    setNotifSaving(true);
    const next = !emailNotif;
    await supabase.from("profiles").update({ email_notifications: next, updated_at: new Date().toISOString() }).eq("id", user.id);
    setEmailNotif(next);
    setNotifSaving(false);
  }

  // ── Remove bookmark ──────────────────────────────────────────
  async function handleRemoveBookmark(slug: string) {
    setRemovingSlug(slug);
    await supabase.from("saved_reviews").delete().eq("user_id", user.id).eq("slug", slug);
    setLocalSaved((prev) => prev.filter((r) => r.slug !== slug));
    setRemovingSlug(null);
  }

  // ── Delete account ───────────────────────────────────────────
  async function handleDeleteAccount() {
    if (deleteConfirm !== "DELETE") return;
    setDeleteLoading(true);
    await supabase.auth.signOut();
    // The account deletion requires a server-side call with service role key
    await fetch("/api/account/delete", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userId: user.id }) });
    router.push("/?deleted=1");
    router.refresh();
  }

  // ── Logout ───────────────────────────────────────────────────
  async function handleLogout() {
    setLoggingOut(true);
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  // ── Card wrapper ─────────────────────────────────────────────
  const Card = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => (
    <div style={{ backgroundColor: "#fff", borderRadius: 16, padding: "28px 32px", border: "1px solid #E4E8E5", marginBottom: 16, ...style }}>
      {children}
    </div>
  );

  const SectionTitle = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #E7F2EC, #D4E9DF)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F7A5A" }}>
        {icon}
      </div>
      <span style={{ fontSize: 16, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)" }}>{label}</span>
    </div>
  );

  return (
    <div style={{ minHeight: "70vh", backgroundColor: "#F6F8F6", padding: "48px 16px 80px" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: 24 }}>
          <Link href="/" style={{ fontSize: 13, color: "#586259", textDecoration: "none", fontFamily: "var(--font-dm-sans)" }}>Home</Link>
          <span style={{ margin: "0 8px", color: "#B8C4BA" }}>/</span>
          <span style={{ fontSize: 13, color: "#17211C", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>Account</span>
        </div>

        {/* ═══ PROFILE HEADER ═══ */}
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt="" width={72} height={72} style={{ borderRadius: "50%", objectFit: "cover", border: "3px solid #E7F2EC" }} />
            ) : (
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm-sans)", border: "3px solid #E7F2EC" }}>
                {initials}
              </div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-playfair)" }}>{fullName || "Your Account"}</div>
              <div style={{ fontSize: 13, color: "#586259", fontFamily: "var(--font-dm-sans)", marginTop: 4 }}>{user.email}</div>
              <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: "#0A4F3B", fontFamily: "var(--font-jetbrains), monospace", padding: "3px 8px", backgroundColor: "#E7F2EC", borderRadius: 6 }}>
                  <Shield size={10} /> {user.provider === "google" ? "Google" : "Email"}
                </span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, color: "#586259", fontFamily: "var(--font-jetbrains), monospace", padding: "3px 8px", backgroundColor: "#F0F3F1", borderRadius: 6 }}>
                  <Calendar size={10} /> {joinDate}
                </span>
              </div>
            </div>
          </div>

          <SectionTitle icon={<User size={16} />} label="Profile" />

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="auth-field">
              <label className="auth-label">Full name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #D7DDD9", fontSize: 15, fontFamily: "var(--font-dm-sans)", color: "#17211C", outline: "none", transition: "border-color 200ms" }}
              />
            </div>

            <div className="auth-field">
              <label className="auth-label">Email</label>
              <input
                type="email"
                value={user.email}
                disabled
                style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #E4E8E5", fontSize: 15, fontFamily: "var(--font-dm-sans)", color: "#586259", backgroundColor: "#F6F8F6", cursor: "not-allowed" }}
              />
            </div>

            <button
              onClick={handleSave}
              disabled={saving || fullName === user.fullName}
              className="auth-submit"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, opacity: fullName === user.fullName ? 0.5 : 1, marginTop: 4 }}
            >
              {saving ? <Loader2 size={18} className="auth-spinner" /> : saved ? <><CheckCircle2 size={16} /> Saved!</> : <><Save size={16} /> Save changes</>}
            </button>
          </div>
        </Card>

        {/* ═══ CHANGE PASSWORD (email users only) ═══ */}
        {user.provider === "email" && (
          <Card>
            <button
              onClick={() => setPwOpen(!pwOpen)}
              style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #E7F2EC, #D4E9DF)", display: "flex", alignItems: "center", justifyContent: "center", color: "#0F7A5A" }}>
                  <Lock size={16} />
                </div>
                <span style={{ fontSize: 16, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)" }}>Change password</span>
              </div>
              <ChevronRight size={18} style={{ color: "#9CA3AF", transform: pwOpen ? "rotate(90deg)" : "none", transition: "transform 200ms" }} />
            </button>

            {pwOpen && (
              <form onSubmit={handlePasswordChange} style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 14 }}>
                {pwMsg && (
                  <div style={{ padding: "10px 14px", borderRadius: 10, fontSize: 13, fontFamily: "var(--font-dm-sans)", display: "flex", alignItems: "center", gap: 8, ...(pwMsg.type === "ok" ? { backgroundColor: "#E7F2EC", color: "#0A4F3B" } : { backgroundColor: "#FEF2F2", color: "#DC2626", border: "1px solid #FECACA" }) }}>
                    {pwMsg.type === "ok" ? <CheckCircle2 size={14} /> : <AlertTriangle size={14} />}
                    {pwMsg.text}
                  </div>
                )}

                <div className="auth-field">
                  <label className="auth-label">Current password</label>
                  <div className="auth-input-wrap">
                    <Lock size={18} className="auth-input-icon" />
                    <input
                      type={showPw ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      placeholder="Enter current password"
                      value={currentPw}
                      onChange={(e) => setCurrentPw(e.target.value)}
                      className="auth-input"
                      style={{ paddingRight: 44 }}
                    />
                    <button type="button" onClick={() => setShowPw(!showPw)} className="auth-pw-toggle">
                      {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="auth-field">
                  <label className="auth-label">New password</label>
                  <div className="auth-input-wrap">
                    <Lock size={18} className="auth-input-icon" />
                    <input
                      type={showPw ? "text" : "password"}
                      required
                      minLength={6}
                      autoComplete="new-password"
                      placeholder="At least 6 characters"
                      value={newPw}
                      onChange={(e) => setNewPw(e.target.value)}
                      className="auth-input"
                    />
                  </div>
                </div>

                <div className="auth-field">
                  <label className="auth-label">Confirm new password</label>
                  <div className="auth-input-wrap">
                    <Lock size={18} className="auth-input-icon" />
                    <input
                      type={showPw ? "text" : "password"}
                      required
                      minLength={6}
                      autoComplete="new-password"
                      placeholder="Repeat new password"
                      value={confirmPw}
                      onChange={(e) => setConfirmPw(e.target.value)}
                      className="auth-input"
                    />
                  </div>
                </div>

                <button type="submit" disabled={pwLoading} className="auth-submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  {pwLoading ? <Loader2 size={18} className="auth-spinner" /> : "Update password"}
                </button>
              </form>
            )}
          </Card>
        )}

        {/* ═══ SAVED REVIEWS ═══ */}
        <Card>
          <SectionTitle icon={<Bookmark size={16} />} label="Saved reviews" />
          {localSaved.length > 0 ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {localSaved.map((r) => (
                <div key={r.slug} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 14px", borderRadius: 10, border: "1px solid #E4E8E5", transition: "border-color 150ms" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, fontFamily: "var(--font-dm-sans)" }}>{r.rating}</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Link href={`/reviews/${r.slug}`} style={{ fontSize: 14, fontWeight: 600, color: "#17211C", textDecoration: "none", fontFamily: "var(--font-dm-sans)", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                      {r.title}
                    </Link>
                    <span style={{ fontSize: 11, color: "#586259", fontFamily: "var(--font-jetbrains), monospace" }}>{r.category}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                    <Star size={12} style={{ color: "#C98A1E", fill: "#C98A1E" }} />
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)" }}>{r.rating}/10</span>
                  </div>
                  <button
                    onClick={() => handleRemoveBookmark(r.slug)}
                    disabled={removingSlug === r.slug}
                    aria-label={`Remove ${r.title} from saved`}
                    style={{ background: "none", border: "none", cursor: "pointer", color: "#9CA3AF", padding: 4, flexShrink: 0, transition: "color 150ms" }}
                  >
                    {removingSlug === r.slug ? <Loader2 size={14} className="auth-spinner" /> : <Trash2 size={14} />}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "24px 16px" }}>
              <Bookmark size={32} style={{ color: "#D7DDD9", margin: "0 auto 12px" }} />
              <p style={{ fontSize: 14, color: "#586259", fontFamily: "var(--font-dm-sans)", margin: 0 }}>No saved reviews yet.</p>
              <Link href="/reviews" style={{ fontSize: 13, color: "#0F7A5A", fontWeight: 600, fontFamily: "var(--font-dm-sans)", textDecoration: "none", marginTop: 8, display: "inline-block" }}>
                Browse reviews →
              </Link>
            </div>
          )}
        </Card>

        {/* ═══ PREFERENCES ═══ */}
        <Card>
          <SectionTitle icon={<Bell size={16} />} label="Preferences" />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 0" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-dm-sans)" }}>Email notifications</div>
              <div style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-dm-sans)", marginTop: 2 }}>New reviews, ingredient updates, weekly digest</div>
            </div>
            <button
              onClick={handleNotifToggle}
              disabled={notifSaving}
              aria-label={emailNotif ? "Disable email notifications" : "Enable email notifications"}
              style={{
                width: 48,
                height: 28,
                borderRadius: 14,
                border: "none",
                cursor: "pointer",
                position: "relative",
                transition: "background 200ms",
                background: emailNotif ? "linear-gradient(135deg, #0F7A5A, #0A634A)" : "#D7DDD9",
                flexShrink: 0,
              }}
            >
              <div style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: "#fff",
                position: "absolute",
                top: 3,
                left: emailNotif ? 23 : 3,
                transition: "left 200ms",
                boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {notifSaving ? <Loader2 size={10} className="auth-spinner" style={{ color: "#586259" }} /> :
                  emailNotif ? <Bell size={10} style={{ color: "#0F7A5A" }} /> : <BellOff size={10} style={{ color: "#9CA3AF" }} />}
              </div>
            </button>
          </div>
        </Card>

        {/* ═══ SIGN OUT ═══ */}
        <button
          onClick={handleLogout}
          disabled={loggingOut}
          style={{
            width: "100%", padding: "14px 20px", backgroundColor: "#fff",
            border: "1px solid #E4E8E5", borderRadius: 12, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            fontSize: 15, fontWeight: 600, color: "#374151", fontFamily: "var(--font-dm-sans)",
            transition: "background-color 150ms", marginBottom: 16,
          }}
        >
          {loggingOut ? <Loader2 size={18} className="auth-spinner" /> : <><LogOut size={16} /> Sign out</>}
        </button>

        {/* ═══ DELETE ACCOUNT ═══ */}
        <Card style={{ border: "1px solid #FECACA" }}>
          <button
            onClick={() => setDeleteOpen(!deleteOpen)}
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#FEF2F2", display: "flex", alignItems: "center", justifyContent: "center", color: "#DC2626" }}>
                <Trash2 size={16} />
              </div>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#DC2626", fontFamily: "var(--font-dm-sans)" }}>Delete account</span>
            </div>
            <ChevronRight size={18} style={{ color: "#DC2626", opacity: 0.5, transform: deleteOpen ? "rotate(90deg)" : "none", transition: "transform 200ms" }} />
          </button>

          {deleteOpen && (
            <div style={{ marginTop: 16 }}>
              <div style={{ padding: "12px 14px", borderRadius: 10, backgroundColor: "#FEF2F2", border: "1px solid #FECACA", marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <AlertTriangle size={16} style={{ color: "#DC2626", flexShrink: 0, marginTop: 2 }} />
                  <div style={{ fontSize: 13, color: "#7F1D1D", fontFamily: "var(--font-dm-sans)", lineHeight: 1.5 }}>
                    This permanently deletes your account, saved reviews, and all associated data. This action cannot be undone.
                  </div>
                </div>
              </div>
              <div className="auth-field">
                <label className="auth-label" style={{ color: "#DC2626" }}>Type DELETE to confirm</label>
                <input
                  type="text"
                  placeholder="DELETE"
                  value={deleteConfirm}
                  onChange={(e) => setDeleteConfirm(e.target.value)}
                  style={{ width: "100%", padding: "12px 16px", borderRadius: 12, border: "1.5px solid #FECACA", fontSize: 15, fontFamily: "var(--font-dm-sans)", color: "#17211C", outline: "none" }}
                />
              </div>
              <button
                onClick={handleDeleteAccount}
                disabled={deleteConfirm !== "DELETE" || deleteLoading}
                style={{
                  width: "100%", marginTop: 12, padding: "12px 20px",
                  background: deleteConfirm === "DELETE" ? "#DC2626" : "#E4E8E5",
                  color: deleteConfirm === "DELETE" ? "#fff" : "#9CA3AF",
                  border: "none", borderRadius: 12, fontSize: 14, fontWeight: 700,
                  fontFamily: "var(--font-dm-sans)", cursor: deleteConfirm === "DELETE" ? "pointer" : "not-allowed",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  transition: "background 200ms",
                }}
              >
                {deleteLoading ? <Loader2 size={16} className="auth-spinner" /> : <><Trash2 size={14} /> Permanently delete account</>}
              </button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
