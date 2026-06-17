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
        background: {
          DEFAULT: "#FFFFFF",
          alt: "#F7F7F7",
        },
        ink: {
          DEFAULT: "#2D2D2D",
          soft: "#525252",
          muted: "#737373",
          faint: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#D50032",
          hover: "#B00028",
          light: "rgba(213,0,50,0.06)",
        },
        border: {
          DEFAULT: "#EBEBEB",
          light: "#F5F5F5",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
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
        "editorial": "0 1px 0 0 rgba(0,0,0,0.04), 0 4px 24px -4px rgba(0,0,0,0.06)",
        "card": "0 1px 3px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 30px -8px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
