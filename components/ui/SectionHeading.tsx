interface SectionHeadingProps {
  label?: string;
  figure?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export default function SectionHeading({
  label,
  figure,
  title,
  titleItalic,
  subtitle,
  align = "left",
  size = "md",
  dark = false,
}: SectionHeadingProps) {
  const fontSizes: Record<string, string> = {
    sm: "clamp(1.25rem, 2.5vw, 1.75rem)",
    md: "clamp(1.75rem, 3.5vw, 2.5rem)",
    lg: "clamp(2rem, 5vw, 3.5rem)",
  };

  const figureColor = dark ? "#4a6b58" : "#6b7770";
  const dividerColor = dark ? "#1a2d24" : "#e4e8e5";
  const labelColor = dark ? "#14a474" : "#0f7a5a";
  const headingColor = dark ? "#e8efe9" : "#17211c";
  const italicColor = dark ? "#9fb0a7" : "#6b7770";
  const subtitleColor = dark ? "#9fb0a7" : "#586259";

  return (
    <div style={{ textAlign: align, marginBottom: 40 }}>
      {(label || figure) && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            justifyContent: align === "center" ? "center" : "flex-start",
            marginBottom: 14,
          }}
        >
          {figure && (
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: figureColor,
                fontWeight: 500,
              }}
            >
              {figure}
            </span>
          )}
          {figure && label && (
            <span style={{ width: 24, height: 1, backgroundColor: dividerColor, display: "inline-block" }} />
          )}
          {label && (
            <span
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: labelColor,
                fontWeight: 600,
              }}
            >
              {label}
            </span>
          )}
        </div>
      )}
      <h2
        style={{
          fontFamily: "var(--font-newsreader), Georgia, serif",
          fontSize: fontSizes[size],
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: headingColor,
          lineHeight: 1.05,
        }}
      >
        {title}
        {titleItalic && (
          <>
            {" "}
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: italicColor,
              }}
            >
              {titleItalic}
            </em>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: 12,
            fontSize: 15,
            color: subtitleColor,
            lineHeight: 1.6,
            maxWidth: align === "center" ? 540 : "none",
            margin: align === "center" ? "12px auto 0" : "12px 0 0",
            fontFamily: "var(--font-hanken), sans-serif",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
