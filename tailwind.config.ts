import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { 500: "#00e5c2" },
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,229,194,0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
