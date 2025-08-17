import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
        heading: [
          "Manrope Variable",
          "Manrope",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#374151",
            lineHeight: "1.7",
            fontSize: "1.125rem",
            h1: {
              fontFamily: "Manrope Variable, Manrope, sans-serif",
              fontWeight: "700",
              fontSize: "2.5rem",
              lineHeight: "1.2",
              marginBottom: "1rem",
            },
            h2: {
              fontFamily: "Manrope Variable, Manrope, sans-serif",
              fontWeight: "600",
              fontSize: "2rem",
              lineHeight: "1.3",
              marginTop: "2rem",
              marginBottom: "1rem",
            },
            h3: {
              fontFamily: "Manrope Variable, Manrope, sans-serif",
              fontWeight: "600",
              fontSize: "1.5rem",
              lineHeight: "1.4",
              marginTop: "1.5rem",
              marginBottom: "0.5rem",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
