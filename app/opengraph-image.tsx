import { ImageResponse } from "next/og";

export const alt = "Fitlabreviews — Evidence-Led Supplement Reviews";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(145deg, #17211c 0%, #0F1A14 50%, #1a2e22 100%)",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(15,122,90,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(15,122,90,0.1) 0%, transparent 50%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 8,
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0F7A5A, #0A4F3B)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              F
            </div>
            <span
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: "#F5F0E8",
                letterSpacing: "-1px",
              }}
            >
              Fitlabreviews
            </span>
          </div>

          <div
            style={{
              width: 80,
              height: 3,
              background: "linear-gradient(90deg, transparent, #0F7A5A, transparent)",
              display: "flex",
            }}
          />

          <span
            style={{
              fontSize: 26,
              color: "#B8C4BA",
              fontWeight: 400,
              letterSpacing: "2px",
              textTransform: "uppercase" as const,
            }}
          >
            Evidence-Led Supplement Reviews
          </span>

          <div
            style={{
              display: "flex",
              gap: 32,
              marginTop: 24,
            }}
          >
            {["Reviews", "Research", "Ingredients"].map((label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 20px",
                  borderRadius: 20,
                  border: "1px solid rgba(15,122,90,0.4)",
                  fontSize: 18,
                  color: "#8FA893",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 24,
            display: "flex",
            fontSize: 14,
            color: "#586259",
          }}
        >
          fitlabreviews.com
        </div>
      </div>
    ),
    { ...size },
  );
}
