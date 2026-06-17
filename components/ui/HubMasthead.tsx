/**
 * HubMasthead — clean, professional hero banner for all hub/index pages.
 * Light background with teal accents. Server Component.
 */

interface HubStat {
  label: string;
  value: string;
}

interface HubMastheadProps {
  eyebrow: string;
  kicker?: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
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
        backgroundColor: "#F8FAFB",
        borderBottom: "1px solid #E5E7EB",
      }}
    >
      <div
        className="px-page"
        style={{ position: "relative", maxWidth: 1280, margin: "0 auto", paddingTop: 56, paddingBottom: 48 }}
      >
        {/* Eyebrow row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", fontWeight: 600 }}>
            {eyebrow}
          </span>
          {kicker && (
            <>
              <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#0E8784" }} />
              <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#0E8784", fontWeight: 600 }}>
                {kicker}
              </span>
            </>
          )}
        </div>

        <h1 style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#111827", lineHeight: 1.05, margin: 0 }}>
          {title}
          {titleAccent && (
            <>
              {" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: "#0E8784" }}>{titleAccent}</em>
            </>
          )}
        </h1>

        <p style={{ marginTop: 16, fontSize: 16, color: "#6B7280", lineHeight: 1.7, maxWidth: 640, fontFamily: "var(--font-dm-sans), sans-serif" }}>
          {subtitle}
        </p>

        {stats && stats.length > 0 && (
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: "12px 20px", border: "1px solid #E5E7EB", borderRadius: 10, backgroundColor: "#FFFFFF" }}>
                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "#9CA3AF", marginBottom: 4, fontWeight: 600 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-playfair), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: "#111827", margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
