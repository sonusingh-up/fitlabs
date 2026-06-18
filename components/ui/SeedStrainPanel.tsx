import { SEED } from "@/lib/seed-tokens";

interface StrainBlend {
  name: string;
  totalAFU: string;
  strains: string[];
  color: string;
}

interface SeedStrainPanelProps {
  blends: StrainBlend[];
  totalAFU?: string;
  measurementNote?: string;
}

/**
 * SeedStrainPanel — Displays probiotic strain blends in a dark-themed grid.
 * Each blend is shown as a labelled card with strain names and total AFU.
 * Used on DS-01, PDS-08, and 14 Day Gut Reset review pages.
 */
export default function SeedStrainPanel({
  blends,
  totalAFU,
  measurementNote,
}: SeedStrainPanelProps) {
  return (
    <div
      style={{
        backgroundColor: SEED.darkBg,
        borderRadius: 14,
        padding: "24px",
        border: `1px solid ${SEED.darkBorder}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          ...SEED.dotGrid,
          pointerEvents: "none",
          borderRadius: 14,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 16,
          marginBottom: 20,
          flexWrap: "wrap",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-jetbrains), monospace",
              fontSize: 9,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: SEED.green,
              marginBottom: 4,
            }}
          >
            Probiotic Strain Profile
          </p>
          <p
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "1rem",
              fontWeight: 700,
              color: SEED.darkText,
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            Genomically confirmed · Stability tested
          </p>
        </div>
        {totalAFU && (
          <div
            style={{
              padding: "8px 14px",
              backgroundColor: "rgba(61,139,55,0.12)",
              border: `1px solid rgba(61,139,55,0.3)`,
              borderRadius: 8,
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: "1.2rem",
                fontWeight: 800,
                color: SEED.green,
                lineHeight: 1,
                margin: 0,
                marginBottom: 2,
              }}
            >
              {totalAFU}
            </p>
            <p
              style={{
                fontFamily: "var(--font-jetbrains), monospace",
                fontSize: 9,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: SEED.darkMuted,
                margin: 0,
              }}
            >
              Total AFU
            </p>
          </div>
        )}
      </div>

      {/* Blend grid */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 12,
        }}
      >
        {blends.map((blend) => (
          <div
            key={blend.name}
            style={{
              backgroundColor: SEED.darkCard,
              border: `1px solid ${SEED.darkBorder}`,
              borderRadius: 10,
              padding: "14px 16px",
              borderTop: `2px solid ${blend.color}`,
            }}
          >
            {/* Blend header */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: 8,
                marginBottom: 10,
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 9,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: blend.color,
                  margin: 0,
                  lineHeight: 1.4,
                  flex: 1,
                }}
              >
                {blend.name}
              </p>
              <span
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 9,
                  color: SEED.darkCaption,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {blend.totalAFU}
              </span>
            </div>

            {/* Strains */}
            <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {blend.strains.map((strain) => (
                <p
                  key={strain}
                  style={{
                    fontSize: 11,
                    color: SEED.darkMuted,
                    fontFamily: "var(--font-dm-sans), sans-serif",
                    fontStyle: "italic",
                    margin: 0,
                    lineHeight: 1.5,
                    paddingLeft: 10,
                    borderLeft: `1px solid ${SEED.darkBorder}`,
                  }}
                >
                  {strain}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AFU measurement note */}
      {measurementNote && (
        <p
          style={{
            position: "relative",
            zIndex: 1,
            fontSize: 11,
            color: SEED.darkCaption,
            fontFamily: "var(--font-dm-sans), sans-serif",
            lineHeight: 1.6,
            marginTop: 16,
            paddingTop: 12,
            borderTop: `1px solid ${SEED.darkBorder}`,
          }}
        >
          {measurementNote}
        </p>
      )}
    </div>
  );
}
