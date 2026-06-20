"use client";

import { useState } from "react";
import Link from "next/link";
import {
  RefreshCw, Home, FileText, BookOpen, FlaskConical, Building2,
  Loader2, CheckCircle2, AlertTriangle, Zap, Clock, Globe,
} from "lucide-react";
import { revalidatePaths } from "./actions";

type Section = {
  id: string;
  label: string;
  icon: React.ReactNode;
  paths: string[];
  description: string;
};

const SECTIONS: Section[] = [
  {
    id: "home", label: "Homepage", icon: <Home size={18} />,
    paths: ["/"],
    description: "Main landing page with editor's picks, latest research, goals",
  },
  {
    id: "reviews", label: "Reviews Hub", icon: <FileText size={18} />,
    paths: ["/reviews"],
    description: "All reviews listing page",
  },
  {
    id: "blog", label: "Blog Hub", icon: <BookOpen size={18} />,
    paths: ["/blog"],
    description: "All blog articles listing page",
  },
  {
    id: "research", label: "Research Hub", icon: <FlaskConical size={18} />,
    paths: ["/research"],
    description: "All research articles listing page",
  },
  {
    id: "ingredients", label: "Ingredients Hub", icon: <FlaskConical size={18} />,
    paths: ["/ingredients"],
    description: "Ingredient library listing page",
  },
  {
    id: "brands", label: "Brands Hub", icon: <Building2 size={18} />,
    paths: ["/brands"],
    description: "Brand directory listing page",
  },
  {
    id: "all-hubs", label: "All Hubs + Homepage", icon: <Globe size={18} />,
    paths: ["/", "/reviews", "/blog", "/research", "/ingredients", "/brands", "/best", "/goals", "/category", "/compare"],
    description: "Revalidate every hub page at once",
  },
];

type LogEntry = {
  time: string;
  section: string;
  paths: string[];
  status: "ok" | "error";
  message: string;
};

export default function AdminPanel({ userEmail }: { userEmail: string }) {
  const [loading, setLoading] = useState<string | null>(null);
  const [log, setLog] = useState<LogEntry[]>([]);
  const [customPath, setCustomPath] = useState("");

  async function handleRevalidate(section: Section) {
    setLoading(section.id);
    try {
      const data = await revalidatePaths(section.paths);
      setLog((prev) => [{
        time: new Date().toLocaleTimeString(),
        section: section.label,
        paths: section.paths,
        status: "ok",
        message: `Revalidated ${data.results?.length ?? 0} path(s)`,
      }, ...prev]);
    } catch (err) {
      setLog((prev) => [{
        time: new Date().toLocaleTimeString(),
        section: section.label,
        paths: section.paths,
        status: "error",
        message: (err as Error).message,
      }, ...prev]);
    }
    setLoading(null);
  }

  async function handleCustom() {
    if (!customPath.startsWith("/")) return;
    const section: Section = {
      id: "custom",
      label: `Custom: ${customPath}`,
      icon: <RefreshCw size={18} />,
      paths: [customPath],
      description: "",
    };
    await handleRevalidate(section);
    setCustomPath("");
  }

  return (
    <div style={{ minHeight: "80vh", backgroundColor: "#F6F8F6", padding: "48px 16px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ marginBottom: 16 }}>
            <Link href="/" style={{ fontSize: 13, color: "#586259", textDecoration: "none", fontFamily: "var(--font-dm-sans)" }}>Home</Link>
            <span style={{ margin: "0 8px", color: "#B8C4BA" }}>/</span>
            <span style={{ fontSize: 13, color: "#17211C", fontFamily: "var(--font-dm-sans)", fontWeight: 600 }}>Admin</span>
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 800, fontFamily: "var(--font-playfair)", color: "#17211C", margin: 0 }}>
            Revalidation Panel
          </h1>
          <p style={{ fontSize: 14, color: "#586259", fontFamily: "var(--font-dm-sans)", marginTop: 8, lineHeight: 1.5 }}>
            Force-refresh cached pages after deploying new content. Each button calls <code style={{ fontSize: 12, fontFamily: "var(--font-jetbrains), monospace", backgroundColor: "#E7F2EC", padding: "2px 6px", borderRadius: 4 }}>revalidatePath()</code> on the selected routes.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12, padding: "8px 12px", backgroundColor: "#E7F2EC", borderRadius: 8, width: "fit-content" }}>
            <Zap size={14} style={{ color: "#0F7A5A" }} />
            <span style={{ fontSize: 12, color: "#0A4F3B", fontFamily: "var(--font-jetbrains), monospace" }}>
              Signed in as {userEmail}
            </span>
          </div>
        </div>

        {/* Section buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => handleRevalidate(section)}
              disabled={loading !== null}
              style={{
                display: "flex", alignItems: "center", gap: 16,
                padding: "18px 20px", backgroundColor: "#fff",
                border: section.id === "all-hubs" ? "2px solid #0F7A5A" : "1px solid #E4E8E5",
                borderRadius: 14, cursor: loading ? "wait" : "pointer",
                transition: "border-color 200ms, box-shadow 200ms",
                textAlign: "left", width: "100%",
              }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                background: section.id === "all-hubs" ? "linear-gradient(135deg, #0F7A5A, #0A4F3B)" : "linear-gradient(135deg, #E7F2EC, #D4E9DF)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: section.id === "all-hubs" ? "#fff" : "#0F7A5A",
              }}>
                {loading === section.id ? <Loader2 size={18} className="auth-spinner" /> : section.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)" }}>
                  {section.label}
                </div>
                <div style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-dm-sans)", marginTop: 2 }}>
                  {section.description}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                <span style={{ fontSize: 11, fontFamily: "var(--font-jetbrains), monospace", color: "#9CA3AF", backgroundColor: "#F0F3F1", padding: "2px 8px", borderRadius: 4 }}>
                  {section.paths.length} path{section.paths.length > 1 ? "s" : ""}
                </span>
                <RefreshCw size={16} style={{ color: "#9CA3AF" }} />
              </div>
            </button>
          ))}
        </div>

        {/* Custom path */}
        <div style={{ backgroundColor: "#fff", borderRadius: 14, border: "1px solid #E4E8E5", padding: "20px 20px", marginBottom: 32 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", marginBottom: 12 }}>
            Revalidate custom path
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              type="text"
              value={customPath}
              onChange={(e) => setCustomPath(e.target.value)}
              placeholder="/reviews/my-new-review"
              onKeyDown={(e) => e.key === "Enter" && handleCustom()}
              style={{
                flex: 1, padding: "12px 16px", borderRadius: 10,
                border: "1.5px solid #D7DDD9", fontSize: 14,
                fontFamily: "var(--font-jetbrains), monospace", color: "#17211C",
                outline: "none",
              }}
            />
            <button
              onClick={handleCustom}
              disabled={!customPath.startsWith("/") || loading !== null}
              style={{
                padding: "12px 20px", borderRadius: 10, border: "none",
                background: customPath.startsWith("/") ? "linear-gradient(135deg, #0F7A5A, #0A4F3B)" : "#E4E8E5",
                color: customPath.startsWith("/") ? "#fff" : "#9CA3AF",
                fontWeight: 700, fontSize: 14, fontFamily: "var(--font-dm-sans)",
                cursor: customPath.startsWith("/") ? "pointer" : "not-allowed",
              }}
            >
              {loading === "custom" ? <Loader2 size={16} className="auth-spinner" /> : "Revalidate"}
            </button>
          </div>
        </div>

        {/* Activity log */}
        <div style={{ backgroundColor: "#fff", borderRadius: 14, border: "1px solid #E4E8E5", overflow: "hidden" }}>
          <div style={{ padding: "16px 20px", borderBottom: "1px solid #E4E8E5", display: "flex", alignItems: "center", gap: 8 }}>
            <Clock size={16} style={{ color: "#586259" }} />
            <span style={{ fontSize: 14, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)" }}>
              Activity log
            </span>
            {log.length > 0 && (
              <button
                onClick={() => setLog([])}
                style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", fontSize: 12, color: "#9CA3AF", fontFamily: "var(--font-dm-sans)" }}
              >
                Clear
              </button>
            )}
          </div>
          {log.length === 0 ? (
            <div style={{ padding: "32px 20px", textAlign: "center" }}>
              <Clock size={28} style={{ color: "#D7DDD9", margin: "0 auto 8px" }} />
              <p style={{ fontSize: 13, color: "#9CA3AF", fontFamily: "var(--font-dm-sans)", margin: 0 }}>
                No revalidations yet. Click a button above to start.
              </p>
            </div>
          ) : (
            <div>
              {log.map((entry, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "flex-start", gap: 10,
                    padding: "12px 20px",
                    borderBottom: i < log.length - 1 ? "1px solid #F0F3F1" : "none",
                  }}
                >
                  {entry.status === "ok" ? (
                    <CheckCircle2 size={16} style={{ color: "#0F7A5A", flexShrink: 0, marginTop: 2 }} />
                  ) : (
                    <AlertTriangle size={16} style={{ color: "#DC2626", flexShrink: 0, marginTop: 2 }} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-dm-sans)" }}>
                      {entry.section}
                    </div>
                    <div style={{ fontSize: 12, color: "#586259", fontFamily: "var(--font-dm-sans)", marginTop: 2 }}>
                      {entry.message}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginTop: 4 }}>
                      {entry.paths.map((p) => (
                        <span key={p} style={{ fontSize: 10, fontFamily: "var(--font-jetbrains), monospace", padding: "1px 6px", borderRadius: 4, backgroundColor: entry.status === "ok" ? "#E7F2EC" : "#FEF2F2", color: entry.status === "ok" ? "#0A4F3B" : "#DC2626" }}>
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span style={{ fontSize: 11, color: "#9CA3AF", fontFamily: "var(--font-jetbrains), monospace", flexShrink: 0 }}>
                    {entry.time}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ISR info */}
        <div style={{ marginTop: 32, padding: "20px 24px", backgroundColor: "#fff", borderRadius: 14, border: "1px dashed #D4E9DF" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#17211C", fontFamily: "var(--font-dm-sans)", marginBottom: 8 }}>
            How ISR works on this site
          </div>
          <ul style={{ fontSize: 13, color: "#586259", fontFamily: "var(--font-dm-sans)", lineHeight: 1.8, margin: 0, paddingLeft: 20 }}>
            <li>Hub pages auto-refresh every <strong>1 hour</strong> (homepage, reviews, blog, etc.)</li>
            <li>After a deploy, Vercel rebuilds everything — ISR keeps it fresh between deploys</li>
            <li>Click a button above to <strong>force immediate refresh</strong> for any page</li>
            <li>Custom path lets you refresh a specific review or article page</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
