/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark mode bases
        night: "#0D0B14",
        nightSurf: "#151222",
        nightCard: "#1E1A2E",
        nightBorder: "#2D2840",
        // Accents féminins lumineux
        rose: "#F4A8C0",
        roseDark: "#E07699",
        roseGlow: "#F4A8C020",
        lavender: "#C4B5F0",
        lavenderDark: "#9C86DB",
        lavGlow: "#C4B5F015",
        gold: "#E0C070",
        goldLight: "#F0D898",
        goldGlow: "#E0C07018",
        terracotta: "#E09870",
        // Textes
        textPrimary: "#F0EAF8",
        textMuted: "#8C80A8",
        textSoft: "#C0B8D8",
        // Compatibilité anciens composants
        cream: "#151222",
        blush: "#F4A8C0",
        roseDarkAlt: "#E07699",
        charcoal: "#F0EAF8",
        muted: "#8C80A8",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Montserrat", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};
