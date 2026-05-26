interface SectionHeadingProps {
  label?: string;
  figure?: string;
  title: string;
  titleItalic?: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg";
}

export default function SectionHeading({
  label,
  figure,
  title,
  titleItalic,
  subtitle,
  align = "left",
  size = "md",
}: SectionHeadingProps) {
  const fontSizes: Record<string, string> = {
    sm: "clamp(1.25rem, 2.5vw, 1.75rem)",
    md: "clamp(1.75rem, 3.5vw, 2.5rem)",
    lg: "clamp(2rem, 5vw, 3.5rem)",
  };

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
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#8A8480",
              }}
            >
              {figure}
            </span>
          )}
          {figure && label && (
            <span style={{ width: 24, height: 1, backgroundColor: "#D4C9B8", display: "inline-block" }} />
          )}
          {label && (
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#C4622D",
              }}
            >
              {label}
            </span>
          )}
        </div>
      )}
      <h2
        style={{
          fontFamily: "var(--font-playfair), Georgia, serif",
          fontSize: fontSizes[size],
          fontWeight: 700,
          letterSpacing: "-0.025em",
          color: "#1A1714",
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
                color: "#5C5650",
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
            color: "#5C5650",
            lineHeight: 1.6,
            maxWidth: align === "center" ? 540 : "none",
            margin: align === "center" ? "12px auto 0" : "12px 0 0",
            fontFamily: "var(--font-dm-sans), sans-serif",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
