import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF2F8",
          100: "#D8E1EE",
          200: "#B2C3DD",
          300: "#8BA5CC",
          400: "#5A7DB0",
          500: "#365B8C",
          600: "#264670",
          700: "#1A3257",
          800: "#10203E",
          900: "#0A1830",
          950: "#060F1F",
        },
        accent: {
          50: "#E8FBF7",
          100: "#C6F5EA",
          200: "#93EBD9",
          300: "#5FDCC4",
          400: "#33C8AD",
          500: "#17B196",
          600: "#0F8F79",
          700: "#0D7263",
          800: "#0B5A4F",
          900: "#08453D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(10, 24, 48, 0.04), 0 8px 24px -8px rgba(10, 24, 48, 0.12)",
        "card-hover": "0 4px 8px rgba(10, 24, 48, 0.06), 0 16px 32px -12px rgba(10, 24, 48, 0.18)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "route-pattern":
          "repeating-linear-gradient(135deg, rgba(255,255,255,0.07) 0px, rgba(255,255,255,0.07) 10px, transparent 10px, transparent 28px)",
      },
    },
  },
  plugins: [],
};

export default config;
