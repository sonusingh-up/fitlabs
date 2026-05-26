"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Search, Loader2 } from "lucide-react";

interface PagefindResult {
  url: string;
  excerpt: string;
  meta: { title?: string; image?: string };
  sub_results?: Array<{ title: string; url: string; excerpt: string }>;
}

const quickBrowse = [
  { label: "Protein Powder", href: "/category/protein-powder" },
  { label: "Pre-Workout", href: "/category/pre-workout" },
  { label: "Creatine", href: "/category/creatine" },
  { label: "Best Whey Protein", href: "/best/whey-protein" },
  { label: "Muscle Gain", href: "/goals/muscle-gain" },
  { label: "Weight Loss", href: "/goals/weight-loss" },
  { label: "All Ingredients", href: "/ingredients" },
  { label: "Brand Directory", href: "/brands" },
];

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pagefind?: any;
  }
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagefindReady, setPagefindReady] = useState(false);
  const [pagefindMissing, setPagefindMissing] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load pagefind on mount — webpackIgnore skips bundling (file is generated post-build)
  useEffect(() => {
    const load = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error — pagefind is generated post-build, not a bundled module
        const pf = await import(/* webpackIgnore: true */ "/pagefind/pagefind.js");
        await pf.init();
        window.pagefind = pf;
        setPagefindReady(true);
      } catch {
        // pagefind index not yet generated — run npm run build
        setPagefindMissing(true);
      }
    };
    load();
  }, []);

  const runSearch = useCallback(async (q: string) => {
    if (!q || q.length < 2 || !window.pagefind) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const search = await window.pagefind.search(q);
      const top = search.results.slice(0, 12);
      const data: PagefindResult[] = await Promise.all(top.map((r: { data: () => Promise<PagefindResult> }) => r.data()));
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounce search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (query.length < 2) { setResults([]); return; }
    debounceRef.current = setTimeout(() => runSearch(query), 280);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [query, runSearch]);

  const hasResults = results.length > 0;
  const showQuickBrowse = query.length < 2 && !hasResults;

  return (
    <div style={{ backgroundColor: "#F2EBD9", minHeight: "100vh" }}>
      <div style={{ borderBottom: "1px solid #D4C9B8", backgroundColor: "#EDE8DF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#D4C9B8" }}>/</span>
          <span style={{ fontSize: 12, color: "#5C5650", fontFamily: "var(--font-dm-mono), monospace" }}>Search</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "72px 24px 80px" }} className="px-page">

        {/* Hero */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880" }}>FULL-TEXT SEARCH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", color: "#C4622D", textTransform: "uppercase" }}>
              {pagefindReady ? "Index Ready" : pagefindMissing ? "Index Building..." : "Loading..."}
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#1A1714", lineHeight: 1.0, marginBottom: 28 }}>
            Search{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#5C5650" }}>the archive.</em>
          </h1>

          {/* Search input */}
          <div style={{ position: "relative", maxWidth: 640 }}>
            <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#A89880", pointerEvents: "none" }}>
              {loading ? <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> : <Search size={18} />}
            </div>
            <input
              type="text"
              placeholder="Search reviews, ingredients, brands..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              style={{ width: "100%", paddingLeft: 48, paddingRight: 16, paddingTop: 16, paddingBottom: 16, backgroundColor: "#F8F2E4", border: "1px solid #D4C9B8", borderRadius: 10, fontSize: 16, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", outline: "none", boxSizing: "border-box" }}
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#A89880", fontSize: 18, lineHeight: 1, padding: 4 }}
                aria-label="Clear search"
              >×</button>
            )}
          </div>

          {/* Pagefind not yet built notice */}
          {pagefindMissing && (
            <div style={{ marginTop: 16, padding: "12px 16px", backgroundColor: "#EDE8DF", border: "1px dashed #C8BFB0", borderRadius: 8 }}>
              <p style={{ fontSize: 13, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>
                Search index not yet generated — run <code style={{ backgroundColor: "#D4C9B8", padding: "1px 5px", borderRadius: 3 }}>npm run build</code> to create it. Showing quick browse links below.
              </p>
            </div>
          )}
        </div>

        {/* Results */}
        {query.length >= 2 && (
          <div style={{ marginBottom: 40 }}>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8A8480", marginBottom: 20 }}>
              {loading ? "Searching..." : `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`}
            </p>

            {hasResults ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #D4C9B8", borderRadius: 12, overflow: "hidden" }}>
                {results.map((r, i) => {
                  const cleanUrl = r.url.replace(/\.html$/, "").replace(/\/index$/, "") || "/";
                  const title = r.meta?.title || cleanUrl;
                  return (
                    <Link
                      key={i}
                      href={cleanUrl}
                      className="hub-row-link"
                      style={{ display: "block", padding: "18px 22px", borderBottom: "1px solid #EDE8DF", textDecoration: "none", backgroundColor: i % 2 === 0 ? "#F8F2E4" : "#F2EBD9" }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 6 }}>
                        <h3 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#1A1714", margin: 0, lineHeight: 1.3 }}>{title}</h3>
                        <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, color: "#A89880", flexShrink: 0, paddingTop: 3, letterSpacing: "0.1em" }}>{cleanUrl}</span>
                      </div>
                      {r.excerpt && (
                        <p
                          style={{ fontSize: 13, color: "#5C5650", lineHeight: 1.65, margin: 0 }}
                          dangerouslySetInnerHTML={{ __html: r.excerpt }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            ) : !loading ? (
              <div style={{ padding: "40px 24px", border: "1px solid #D4C9B8", borderRadius: 12, textAlign: "center", backgroundColor: "#F8F2E4" }}>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.1rem", color: "#5C5650", marginBottom: 8 }}>No results for &ldquo;{query}&rdquo;</p>
                <p style={{ fontSize: 13, color: "#8A8480", margin: 0 }}>Try a shorter term, or browse by category below.</p>
              </div>
            ) : null}
          </div>
        )}

        {/* Quick browse — shown when idle or no results */}
        {(showQuickBrowse || (!hasResults && !loading && query.length >= 2)) && (
          <div>
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>Quick Browse</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 48 }}>
              {quickBrowse.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ padding: "8px 16px", border: "1px solid #D4C9B8", borderRadius: 8, fontSize: 13, color: "#5C5650", fontFamily: "var(--font-dm-sans), sans-serif", textDecoration: "none", backgroundColor: "#F8F2E4" }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Suggested pages */}
            <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#A89880", marginBottom: 16 }}>Start Here</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { href: "/best", label: "Best-Of Guides", sub: "Top picks per category" },
                { href: "/ingredients", label: "Ingredient Index", sub: "Evidence-based profiles" },
                { href: "/brands", label: "Brand Directory", sub: "Independent brand ratings" },
                { href: "/methodology", label: "How We Score", sub: "Fitlab Scoring Protocol" },
              ].map((item) => (
                <Link key={item.href} href={item.href} style={{ padding: "16px 18px", border: "1px solid #D4C9B8", borderRadius: 10, textDecoration: "none", backgroundColor: "#F8F2E4" }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#1A1714", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0, marginBottom: 3 }}>{item.label}</p>
                  <p style={{ fontSize: 11, color: "#8A8480", fontFamily: "var(--font-dm-mono), monospace", margin: 0 }}>{item.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        mark { background: rgba(196,98,45,0.15); color: #1A1714; border-radius: 2px; padding: 0 2px; }
      `}</style>
    </div>
  );
}
