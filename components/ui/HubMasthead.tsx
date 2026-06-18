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
  dark?: boolean;
}

export default function HubMasthead({
  eyebrow,
  kicker,
  title,
  titleAccent,
  subtitle,
  stats,
  dark = false,
}: HubMastheadProps) {
  const bg = dark ? "#0a1410" : "linear-gradient(120deg,#e7f2ec,#f2f8f4)";
  const borderColor = dark ? "rgba(255,255,255,0.06)" : "#d2e5db";
  const eyebrowColor = dark ? "#4a6b58" : "#6b7770";
  const kickerColor = dark ? "#14a474" : "#0f7a5a";
  const headingColor = dark ? "#e8efe9" : "#17211c";
  const subtitleColor = dark ? "#9fb0a7" : "#586259";
  const statBg = dark ? "rgba(255,255,255,0.05)" : "#ffffff";
  const statBorder = dark ? "rgba(255,255,255,0.08)" : "#e4e8e5";
  const statLabelColor = dark ? "#4a6b58" : "#6b7770";
  const statValueColor = dark ? "#e8efe9" : "#17211c";

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: bg,
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <div
        className="px-page"
        style={{ position: "relative", maxWidth: 1280, margin: "0 auto", paddingTop: 56, paddingBottom: 48 }}
      >
        {/* Eyebrow row */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: eyebrowColor, fontWeight: 500 }}>
            {eyebrow}
          </span>
          {kicker && (
            <>
              <span style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: kickerColor }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: kickerColor, fontWeight: 600 }}>
                {kicker}
              </span>
            </>
          )}
        </div>

        <h1 style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-0.03em", color: headingColor, lineHeight: 1.05, margin: 0 }}>
          {title}
          {titleAccent && (
            <>
              {" "}
              <em style={{ fontStyle: "italic", fontWeight: 400, color: kickerColor }}>{titleAccent}</em>
            </>
          )}
        </h1>

        <p style={{ marginTop: 16, fontSize: 16, color: subtitleColor, lineHeight: 1.7, maxWidth: 640, fontFamily: "var(--font-hanken), sans-serif" }}>
          {subtitle}
        </p>

        {stats && stats.length > 0 && (
          <div style={{ marginTop: 28, display: "flex", flexWrap: "wrap", gap: 12 }}>
            {stats.map((s) => (
              <div key={s.label} style={{ padding: "12px 20px", border: `1px solid ${statBorder}`, borderRadius: 10, backgroundColor: statBg }}>
                <p style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: statLabelColor, marginBottom: 4, fontWeight: 500 }}>{s.label}</p>
                <p style={{ fontFamily: "var(--font-newsreader), Georgia, serif", fontSize: "1.35rem", fontWeight: 700, color: statValueColor, margin: 0 }}>{s.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
