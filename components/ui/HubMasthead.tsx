/**
 * HubMasthead — the shared editorial "section cover" banner used at the top of
 * every hub/index page (reviews, brands, research, ingredients, best, blog,
 * category). Dark, atmospheric, rust-accented — matching the home page
 * Editor's Picks aesthetic so the whole site reads as one publication.
 *
 * Server Component: no state, no handlers. Safe to import into Server pages.
 * Renders the page <h1> — keep exactly one HubMasthead per page for SEO.
 */

interface HubStat {
  label: string;
  value: string;
}

interface HubMastheadProps {
  /** left mono eyebrow, e.g. "Review Index · 32 Reviews" */
  eyebrow: string;
  /** right rust mono kicker, e.g. "Fitlab Scoring Protocol" */
  kicker?: string;
  /** leading title words, rendered in cream */
  title: string;
  /** trailing words, rendered in rust italic */
  titleAccent?: string;
  subtitle: string;
  /** optional dark-styled stat chips */
  stats?: HubStat[];
}

export default function HubMasthead({
  eyebrow,
  kicker,
  title,
  titleAccent,
  subtitle,
  stats,
}: HubMastheadProps) {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#15120E",
        backgroundImage:
          "radial-gradient(ellipse 75% 60% at 12% -15%, rgba(196,98,45,0.16), transparent 60%)",
        borderBottom: "1px solid rgba(196,98,45,0.22)",
      }}
    >
      {/* Masked grid texture — fades from the top-left corner */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(242,235,217,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(242,235,217,0.025) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 85% 110% at 0% 0%, #000 18%, transparent 78%)",
          WebkitMaskImage: "radial-gradient(ellipse 85% 110% at 0% 0%, #000 18%, transparent 78%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="px-page"
        style={{ position: "relative", maxWidth: 1280, margin: "0 auto", paddingTop: 64, paddingBottom: 52 }}
      >
        {/* Eyebrow row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18, flexWrap: "wrap" }}>
          <span style={{ width: 26, height: 1, backgroundColor: "rgba(196,98,45,0.5)" }} />
          <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase", color: "#A89880" }}>
            {eyebrow}
          </span>
          {kicker && (
            <>
              <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#C4622D" }} />
              <span style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 9, letterSpacing: "0.24em", textTransform: "uppercase", color: "#C4622D" }}>
                {kicker}
              </span>
            </>
          )}
        </div>

        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2.1rem, 5.4vw, 3.6rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#F2EBD9", lineHeight: 1.0, margin: 0 }}>
          {title}
          {titleAccent && (
            <>
              {" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#C4622D" }}>{titleAccent}</em>
            </>
          )}
        </h1>

        <p style={{ marginTop: 18, fontSize: 16, color: "#9A938A", lineHeight: 1.7, maxWidth: 640, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {subtitle}
        </p>

        {stats && stats.length > 0 && (
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: "12px 20px", border: "1px solid rgba(212,201,184,0.16)", borderRadius: 8, backgroundColor: "rgba(242,235,217,0.03)" }}>
                <p style={{ fontFamily: "var(--font-dm-mono), monospace", fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "#8A8480", marginBottom: 4 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#F2EBD9", margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
