"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ExternalLink } from "lucide-react";

interface Author {
  name: string;
  slug: string;
  role?: string;
  bio?: string;
  avatarUrl?: string;
  credentials?: string[];
  linkedIn?: string;
}

export default function AuthorPopup({ author, label }: { author: Author; label: string }) {
  const [open, setOpen] = useState(false);

  const initials = author.name
    ?.split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2) || "FL";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        style={{
          display: "flex", alignItems: "center", gap: 10, background: "none",
          border: "none", cursor: "pointer", padding: 0, textAlign: "left",
        }}
      >
        {author.avatarUrl ? (
          <img src={author.avatarUrl} alt="" width={36} height={36} style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid #E7F2EC" }} />
        ) : (
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm-sans)", border: "2px solid #E7F2EC" }}>
            {initials}
          </div>
        )}
        <div>
          <p style={{ fontSize: 10, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</p>
          <p style={{ fontSize: 14, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", margin: 0, textDecoration: "underline", textDecorationColor: "rgba(15,122,90,0.3)", textUnderlineOffset: 3 }}>{author.name}</p>
        </div>
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.4)", zIndex: 1000, backdropFilter: "blur(4px)" }}
          />
          {/* Popup */}
          <div style={{
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
            width: "90%", maxWidth: 420, backgroundColor: "#FFFFFF", borderRadius: 20,
            boxShadow: "0 20px 60px -12px rgba(0,0,0,0.25)", zIndex: 1001,
            overflow: "hidden",
          }}>
            {/* Header gradient */}
            <div style={{ background: "linear-gradient(145deg, #17211C 0%, #0F3D2E 100%)", padding: "28px 28px 36px", position: "relative" }}>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                style={{ position: "absolute", top: 12, right: 12, background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)" }}
              >
                <X size={16} />
              </button>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {author.avatarUrl ? (
                  <img src={author.avatarUrl} alt="" width={64} height={64} style={{ borderRadius: "50%", objectFit: "cover", border: "3px solid rgba(255,255,255,0.15)" }} />
                ) : (
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg, #0F7A5A, #14A474)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 700, color: "#fff", fontFamily: "var(--font-dm-sans)", border: "3px solid rgba(255,255,255,0.15)" }}>
                    {initials}
                  </div>
                )}
                <div>
                  <p style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", fontFamily: "var(--font-playfair), Georgia, serif", margin: 0 }}>{author.name}</p>
                  {author.role && <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-dm-sans)", margin: "4px 0 0" }}>{author.role}</p>}
                </div>
              </div>
            </div>

            <div style={{ padding: "24px 28px 28px" }}>
              {/* Credentials */}
              {author.credentials && author.credentials.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
                  {author.credentials.map((c) => (
                    <span key={c} style={{ padding: "4px 10px", backgroundColor: "#E7F2EC", borderRadius: 8, fontSize: 11, color: "#0A4F3B", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>{c}</span>
                  ))}
                </div>
              )}

              {/* Bio */}
              {author.bio && (
                <p style={{ fontSize: 14, color: "#3F4B43", lineHeight: 1.7, fontFamily: "var(--font-dm-sans)", margin: "0 0 20px" }}>{author.bio}</p>
              )}

              {/* Links */}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link
                  href={`/authors/${author.slug}`}
                  onClick={() => setOpen(false)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", background: "linear-gradient(135deg, #0F7A5A, #14A474)", color: "#FFFFFF", fontSize: 13, fontWeight: 700, borderRadius: 12, fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}
                >
                  View profile
                </Link>
                {author.linkedIn && (
                  <a
                    href={author.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", backgroundColor: "#F6F8F6", border: "1px solid #E4E8E5", color: "#17211C", fontSize: 13, fontWeight: 600, borderRadius: 12, fontFamily: "var(--font-dm-sans)", textDecoration: "none" }}
                  >
                    LinkedIn <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
