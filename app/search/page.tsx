"use client";

import { useState, useEffect, useRef, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, Loader2 } from "lucide-react";

interface PagefindResult {
  url: string;
  excerpt: string;
  meta: { title?: string; image?: string };
  sub_results?: Array<{ title: string; url: string; excerpt: string }>;
}

type ContentType = "REVIEW" | "INGREDIENT" | "RESEARCH" | "BLOG" | "BRAND" | "TOOL" | "PAGE";

function detectType(url: string): ContentType {
  if (url.includes("/reviews/")) return "REVIEW";
  if (url.includes("/ingredients/")) return "INGREDIENT";
  if (url.includes("/research/")) return "RESEARCH";
  if (url.includes("/blog/")) return "BLOG";
  if (url.includes("/brands/")) return "BRAND";
  if (url.includes("/tools/")) return "TOOL";
  return "PAGE";
}

const TYPE_META: Record<ContentType, { label: string; color: string; bg: string }> = {
  REVIEW:     { label: "Review",     color: "#0A4F3B", bg: "#D4E9DF" },
  INGREDIENT: { label: "Ingredient", color: "#14532D", bg: "#DCFCE7" },
  RESEARCH:   { label: "Research",   color: "#1E3A5F", bg: "#DBEAFE" },
  BLOG:       { label: "Article",    color: "#7A5A0A", bg: "#FEF3C7" },
  BRAND:      { label: "Brand",      color: "#4A1D96", bg: "#EDE9FE" },
  TOOL:       { label: "Tool",       color: "#065F46", bg: "#D1FAE5" },
  PAGE:       { label: "Page",       color: "#374151", bg: "#F3F4F6" },
};

const QUICK_BROWSE = [
  { label: "Protein Powder", href: "/category/protein-powder" },
  { label: "Pre-Workout",    href: "/category/pre-workout" },
  { label: "Creatine",       href: "/category/creatine" },
  { label: "Best Whey",      href: "/best/whey-protein" },
  { label: "Muscle Gain",    href: "/goals/muscle-gain" },
  { label: "Weight Loss",    href: "/goals/fat-loss" },
  { label: "All Ingredients",href: "/ingredients" },
  { label: "Brand Directory",href: "/brands" },
];

const START_HERE = [
  { href: "/best",        label: "Best-Of Guides",   sub: "Top picks per category" },
  { href: "/ingredients", label: "Ingredient Index", sub: "Evidence-based profiles" },
  { href: "/brands",      label: "Brand Directory",  sub: "Independent brand ratings" },
  { href: "/methodology", label: "How We Score",     sub: "Fitlab Scoring Protocol" },
];

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pagefind?: any;
  }
}

/* ─── Inner component reads ?q= param ─── */
function SearchPageInner() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";

  const [query, setQuery] = useState(initialQ);
  const [inputVal, setInputVal] = useState(initialQ);
  const [results, setResults] = useState<PagefindResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [pagefindReady, setPagefindReady] = useState(false);
  const [pagefindMissing, setPagefindMissing] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load pagefind
  useEffect(() => {
    (async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error — pagefind is generated post-build, not a bundled module
        const pf = await import(/* webpackIgnore: true */ "/pagefind/pagefind.js");
        await pf.init();
        window.pagefind = pf;
        setPagefindReady(true);
      } catch {
        setPagefindMissing(true);
      }
    })();
  }, []);

  const runSearch = useCallback(async (q: string) => {
    if (!q || q.length < 2 || !window.pagefind) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const search = await window.pagefind.search(q);
      const top = search.results.slice(0, 15);
      const data: PagefindResult[] = await Promise.all(
        top.map((r: { data: () => Promise<PagefindResult> }) => r.data())
      );
      setResults(data);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounce as query state changes
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (query.length < 2) { setResults([]); return; }
    debounceRef.current = setTimeout(() => runSearch(query), 260);
    return () => { if (debounceRef.current) clearTimeout(debounceRef.current); };
  }, [query, runSearch]);

  // When pagefind becomes ready, run any pending initial query
  useEffect(() => {
    if (pagefindReady && initialQ.length >= 2) runSearch(initialQ);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagefindReady]);

  function handleInputChange(val: string) {
    setInputVal(val);
    setQuery(val);
    // Update URL without hard navigation
    const params = new URLSearchParams();
    if (val) params.set("q", val);
    router.replace(`/search${val ? `?q=${encodeURIComponent(val)}` : ""}`, { scroll: false });
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") {
      setInputVal("");
      setQuery("");
    }
  }

  const hasResults = results.length > 0;
  const showQuickBrowse = query.length < 2 && !hasResults;

  return (
    <div style={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div style={{ borderBottom: "1px solid #E4E8E5", backgroundColor: "#F6F8F6" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "12px 24px", display: "flex", gap: 8 }}>
          <Link href="/" style={{ fontSize: 12, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#E4E8E5" }}>/</span>
          <span style={{ fontSize: 12, color: "#3F4B43", fontFamily: "var(--font-jetbrains), monospace" }}>Search</span>
        </div>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 24px 80px" }}>

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7770" }}>FULL-TEXT SEARCH</span>
            <span style={{ width: 24, height: 1, backgroundColor: "#E4E8E5", display: "inline-block" }} />
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
              color: pagefindReady ? "#0F7A5A" : "#6B7770" }}>
              {pagefindReady ? "Index Ready" : pagefindMissing ? "Index Unavailable" : "Loading index…"}
            </span>
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, letterSpacing: "-0.025em", color: "#17211C", lineHeight: 1.0, marginBottom: 28 }}>
            Search{" "}
            <em style={{ fontStyle: "italic", fontWeight: 400, color: "#3F4B43" }}>the archive.</em>
          </h1>

          {/* Input */}
          <div style={{ position: "relative", maxWidth: 640 }}>
            <div style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#6B7770", pointerEvents: "none" }}>
              {loading
                ? <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
                : <Search size={18} />
              }
            </div>
            <label htmlFor="search-main-input" className="sr-only">Search the archive</label>
            <input
              ref={inputRef}
              id="search-main-input"
              type="text"
              placeholder="Search reviews, ingredients, brands…"
              value={inputVal}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              style={{
                width: "100%",
                paddingLeft: 48,
                paddingRight: inputVal ? 48 : 16,
                paddingTop: 16,
                paddingBottom: 16,
                backgroundColor: "#F6F8F6",
                border: "1.5px solid #E4E8E5",
                borderRadius: 14,
                fontSize: 16,
                color: "#17211C",
                fontFamily: "var(--font-hanken), sans-serif",
                outline: "none",
                boxSizing: "border-box",
                transition: "border-color 150ms ease",
              }}
              onFocus={(e) => { e.target.style.borderColor = "#0F7A5A"; }}
              onBlur={(e) => { e.target.style.borderColor = "#E4E8E5"; }}
            />
            {inputVal && (
              <button
                onClick={() => { setInputVal(""); setQuery(""); router.replace("/search", { scroll: false }); inputRef.current?.focus(); }}
                style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#6B7770", fontSize: 20, lineHeight: 1, padding: 4 }}
                aria-label="Clear search"
              >×</button>
            )}
          </div>

          {pagefindMissing && (
            <div style={{ marginTop: 12, padding: "10px 14px", backgroundColor: "#FFF8F0", border: "1px solid #FDE8C8", borderRadius: 8 }}>
              <p style={{ fontSize: 13, color: "#92400E", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>
                Search index not found — run <code style={{ backgroundColor: "#FEF3C7", padding: "1px 5px", borderRadius: 3 }}>npm run build</code> to generate it.
              </p>
            </div>
          )}
        </div>

        {/* Results area */}
        {query.length >= 2 && (
          <div style={{ marginBottom: 48 }}>
            <p role="status" aria-live="polite" style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7770", marginBottom: 20 }}>
              {loading
                ? "Searching…"
                : `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`
              }
            </p>

            {hasResults ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #E4E8E5", borderRadius: 14, overflow: "hidden" }}>
                {results.map((r, i) => {
                  const cleanUrl = r.url.replace(/\.html$/, "").replace(/\/index$/, "") || "/";
                  const title = r.meta?.title || cleanUrl;
                  const type = detectType(cleanUrl);
                  const meta = TYPE_META[type];
                  return (
                    <Link
                      key={i}
                      href={cleanUrl}
                      className="hub-row-link"
                      style={{
                        display: "block",
                        padding: "18px 22px",
                        borderBottom: i < results.length - 1 ? "1px solid #E4E8E5" : "none",
                        textDecoration: "none",
                        backgroundColor: "#FFFFFF",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 6 }}>
                        {/* Type badge */}
                        <span style={{
                          flexShrink: 0,
                          fontSize: 10,
                          fontFamily: "var(--font-jetbrains), monospace",
                          letterSpacing: ".08em",
                          fontWeight: 600,
                          padding: "3px 8px",
                          borderRadius: 5,
                          backgroundColor: meta.bg,
                          color: meta.color,
                          marginTop: 2,
                        }}>
                          {meta.label}
                        </span>
                        <h3 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: 17, fontWeight: 700, color: "#17211C", margin: 0, lineHeight: 1.3, flex: 1 }}>
                          {title}
                        </h3>
                      </div>
                      {r.excerpt && (
                        <p
                          style={{ fontSize: 13, color: "#3F4B43", lineHeight: 1.65, margin: "0 0 0 0", paddingLeft: 0 }}
                          dangerouslySetInnerHTML={{ __html: r.excerpt }}
                        />
                      )}
                      <div style={{ marginTop: 6, fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, color: "#6B7770", letterSpacing: ".06em" }}>
                        {cleanUrl}
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : !loading ? (
              <div style={{ padding: "48px 24px", border: "1px solid #E4E8E5", borderRadius: 14, textAlign: "center", backgroundColor: "#F6F8F6" }}>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.2rem", color: "#3F4B43", marginBottom: 8 }}>
                  No results for &ldquo;{query}&rdquo;
                </p>
                <p style={{ fontSize: 13, color: "#6B7770", margin: 0 }}>Try a shorter term, or browse by category below.</p>
              </div>
            ) : null}
          </div>
        )}

        {/* Quick browse */}
        {(showQuickBrowse || (!hasResults && !loading && query.length >= 2)) && (
          <div>
            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7770", marginBottom: 14 }}>Quick Browse</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 44 }}>
              {QUICK_BROWSE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: "8px 16px",
                    border: "1px solid #E4E8E5",
                    borderRadius: 999,
                    fontSize: 13,
                    color: "#3F4B43",
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    textDecoration: "none",
                    backgroundColor: "#F6F8F6",
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6B7770", marginBottom: 14 }}>Start Here</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 12 }}>
              {START_HERE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ padding: "16px 18px", border: "1px solid #E4E8E5", borderRadius: 14, textDecoration: "none", backgroundColor: "#FFFFFF" }}
                >
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#17211C", fontFamily: "var(--font-dm-sans), sans-serif", margin: 0, marginBottom: 3 }}>{item.label}</p>
                  <p style={{ fontSize: 11, color: "#6B7770", fontFamily: "var(--font-jetbrains), monospace", margin: 0 }}>{item.sub}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        mark { background: rgba(15,122,90,0.18); color: #17211C; border-radius: 2px; padding: 0 2px; }
      `}</style>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#FFFFFF" }}>
        <Loader2 size={24} style={{ animation: "spin 1s linear infinite", color: "#0F7A5A" }} />
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </div>
    }>
      <SearchPageInner />
    </Suspense>
  );
}
