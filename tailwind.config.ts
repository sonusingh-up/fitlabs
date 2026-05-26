import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: {
          50: "#FDFAF4",
          100: "#F8F2E4",
          200: "#F0E8D0",
          DEFAULT: "#F2EBD9",
        },
        bone: "#EDE8DF",
        ink: {
          DEFAULT: "#1A1714",
          soft: "#2D2926",
          muted: "#5C5650",
          faint: "#8A8480",
        },
        rust: {
          light: "#E8896A",
          DEFAULT: "#C4622D",
          dark: "#9D4A1F",
        },
        amber: {
          warm: "#D4A853",
        },
        sepia: {
          light: "#C8BA9E",
          DEFAULT: "#A89880",
          dark: "#7A6E60",
        },
        border: {
          DEFAULT: "#D4C9B8",
          strong: "#B8A898",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.25rem, 6vw, 5rem)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.75rem, 4vw, 3.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.375rem, 3vw, 2.25rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "120": "30rem",
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      borderWidth: {
        "0.5": "0.5px",
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "editorial": "0 1px 0 0 rgba(26,23,20,0.08), 0 4px 24px -4px rgba(26,23,20,0.06)",
        "card": "inset 0 0 0 1px rgba(26,23,20,0.08), 0 2px 16px -4px rgba(26,23,20,0.08)",
        "card-hover": "inset 0 0 0 1px rgba(196,98,45,0.2), 0 8px 32px -8px rgba(26,23,20,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
