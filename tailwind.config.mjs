import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Professional Dark Forest Theme - Improved contrast
        primary: "#0f1410", // Deep forest shadow - main background
        secondary: "#1a211b", // 15% lighter than primary - cards/header (better contrast)
        tertiary: "#252d26", // Border color - clear differentiation
        accent: "#2d352e", // Subtle accent backgrounds
        highlight: "#7fb069", // Brighter sage green - links/highlights
        warm: "#8b7355", // Warm earth tone for tags
        text: {
          primary: "#f0f2ef", // Clean white with slight warm tint - all text
          muted: "#9ca196", // Muted for very subtle text only
        }
      },
      fontFamily: {
        sans: ["Lora", ...defaultTheme.fontFamily.serif],
        heading: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            lineHeight: "1.7",
            fontSize: "1.125rem",
            h1: {
              fontFamily: "Montserrat Variable, sans-serif",
              fontWeight: "700",
              fontSize: "2.5rem",
              lineHeight: "1.2",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            },
            h2: {
              fontFamily: "Montserrat Variable, sans-serif",
              fontWeight: "600",
              fontSize: "2rem",
              lineHeight: "1.3",
              marginTop: "2rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            },
            h3: {
              fontFamily: "Montserrat Variable, sans-serif",
              fontWeight: "600",
              fontSize: "1.5rem",
              lineHeight: "1.4",
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
              letterSpacing: "-0.01em",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
