import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b", // zinc-950
        foreground: "#fafafa", // zinc-50
        accent: {
          DEFAULT: "#22d3ee", // cyan-400
          glow: "rgba(34, 211, 238, 0.5)",
        },
        surface: {
          DEFAULT: "#18181b", // zinc-900
          border: "#27272a", // zinc-800
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;