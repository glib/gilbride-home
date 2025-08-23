import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        // Deep Forest Floor Theme - Inspired by woodland shadows and earth
        primary: "#0f1410", // Deep forest shadow - very dark desaturated green-black
        secondary: "#1a1f1b", // Tree bark in shadow - slightly lighter charcoal-green  
        tertiary: "#252b26", // Moss on bark - muted dark olive
        accent: "#3a4239", // Weathered wood - medium desaturated green-brown
        highlight: "#5a6b56", // Lichen on stone - muted sage green
        bright: "#7d8f76", // Fresh moss - soft sage green
        warm: "#8b7355", // Dried oak leaves - warm brown with green undertones
        earth: "#6b5d42", // Rich soil - deep brown
        text: {
          primary: "#e6e8e4", // Pale lichen - very light warm gray-green
          secondary: "#c4c9bf", // Weathered stone - medium gray-green
          muted: "#9ca196", // Dried grass - muted olive-gray
        }
      },
      fontFamily: {
        sans: ["Radley", ...defaultTheme.fontFamily.serif],
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
              fontWeight: "800",
              fontSize: "2.5rem",
              lineHeight: "1.2",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            },
            h2: {
              fontFamily: "Montserrat Variable, sans-serif",
              fontWeight: "700",
              fontSize: "2rem",
              lineHeight: "1.3",
              marginTop: "2rem",
              marginBottom: "1rem",
              letterSpacing: "-0.01em",
            },
            h3: {
              fontFamily: "Montserrat Variable, sans-serif",
              fontWeight: "700",
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
