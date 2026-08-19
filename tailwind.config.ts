import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        "bg-soft": "var(--color-bg-soft)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        border: "var(--color-border)",
        "border-soft": "var(--color-border-soft)",
        ink: "var(--color-text)",
        "ink-dim": "var(--color-text-dim)",
        "ink-faint": "var(--color-text-faint)",
        amber: {
          DEFAULT: "var(--color-amber)",
          soft: "var(--color-amber-soft)",
          dim: "var(--color-amber-dim)",
        },
        ember: {
          DEFAULT: "var(--color-ember)",
          soft: "var(--color-ember-soft)",
          dim: "var(--color-ember-dim)",
        },
        "on-amber": "var(--color-on-amber)",
        iron: "var(--color-iron)",
        moss: {
          DEFAULT: "var(--color-moss)",
          soft: "var(--color-moss-soft)",
        },
        wood: {
          DEFAULT: "var(--color-wood)",
          dark: "var(--color-wood-dark)",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        body: ["var(--font-archivo)", "system-ui", "sans-serif"],
        quote: ["var(--font-quote)", "Georgia", "serif"],
      },
      maxWidth: {
        wrap: "1200px",
      },
      keyframes: {
        embermove: {
          "0%, 100%": { backgroundPosition: "0% 50%", opacity: "0.65" },
          "50%": { backgroundPosition: "100% 50%", opacity: "1" },
        },
        marquee: {
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        embermove: "embermove 5s ease-in-out infinite",
        marquee: "marquee 34s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
