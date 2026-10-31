import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0b0f19",
        panel: "#121826",
        accent: "#7c6cff",
        accent2: "#48c6ef",
        slateSoft: "#a5b4cf",
        success: "#34d399",
        warning: "#fbbf24",
        danger: "#f87171",
      },
      boxShadow: {
        glow: "0 12px 30px rgba(124, 108, 255, 0.35)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.18) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
