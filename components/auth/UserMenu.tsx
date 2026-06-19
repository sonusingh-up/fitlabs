"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, LogOut, ChevronDown } from "lucide-react";
import { createClient } from "@/lib/supabase-browser";
import type { User as SupabaseUser } from "@supabase/supabase-js";

export default function UserMenu() {
  const router = useRouter();
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    setOpen(false);
    router.push("/");
    router.refresh();
  }

  if (loading) return null;

  if (!user) {
    return (
      <Link href="/auth/login" className="btn-primary" style={{ fontSize: 13 }}>
        Sign in
      </Link>
    );
  }

  const name = user.user_metadata?.full_name || user.email?.split("@")[0] || "User";
  const avatar = user.user_metadata?.avatar_url || user.user_metadata?.picture;
  const initials = name.split(" ").map((w: string) => w[0]).join("").toUpperCase().slice(0, 2);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "6px 10px 6px 6px",
          background: open ? "#E7F2EC" : "transparent",
          border: "1px solid #D7DDD9",
          borderRadius: 999,
          cursor: "pointer",
          transition: "background 150ms",
        }}
      >
        {avatar ? (
          <img src={avatar} alt="" width={28} height={28} style={{ borderRadius: "50%", objectFit: "cover" }} />
        ) : (
          <div style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            fontWeight: 700,
            color: "#fff",
            fontFamily: "var(--font-dm-sans)",
          }}>
            {initials}
          </div>
        )}
        <span className="hidden sm:inline" style={{ fontSize: 13, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-dm-sans)", maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {name.split(" ")[0]}
        </span>
        <ChevronDown size={14} style={{ color: "#586259", transform: open ? "rotate(180deg)" : "none", transition: "transform 200ms" }} />
      </button>

      {open && (
        <div style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          right: 0,
          width: 220,
          backgroundColor: "#fff",
          borderRadius: 12,
          border: "1px solid #E4E8E5",
          boxShadow: "0 8px 30px -8px rgba(10,20,16,0.15)",
          overflow: "hidden",
          zIndex: 100,
        }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #F0F3F1" }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-dm-sans)" }}>{name}</div>
            <div style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-dm-sans)", marginTop: 2 }}>{user.email}</div>
          </div>
          <Link
            href="/account"
            onClick={() => setOpen(false)}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", fontSize: 14, color: "#374151", fontFamily: "var(--font-dm-sans)", textDecoration: "none", transition: "background 150ms" }}
            className="hub-row-link"
          >
            <User size={16} /> My Account
          </Link>
          <button
            onClick={handleLogout}
            style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", fontSize: 14, color: "#DC2626", fontFamily: "var(--font-dm-sans)", width: "100%", border: "none", background: "none", cursor: "pointer", borderTop: "1px solid #F0F3F1" }}
          >
            <LogOut size={16} /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}
