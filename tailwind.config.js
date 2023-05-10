/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./bays/**/*.{js,ts,jsx,tsx}",
    "./svg/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: " -0.07em",
      tight: " 0.03em",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      md: "24px",
      xl: "28px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "64px",
      "7xl": "72px",
      "8xl": "90px",
    },
    fontFamily: {
      serif: ["PP Editorial New", "serif"],
      sans: ["PP Neue Montreal TT Book", "sans-serif"],
    },
    extend: {
      colors: {
        platinum: "#FFF3CF",
        saddle: "#684C21",
        iceberg: "#E2F0F8",
        mossgreen: "#CDCD89",
        olivedrab: "#C2C5B5",
        pewter: "#8B949C",
        clear: "#CDD2E1",
        oldpenny: "#DEA927",
        newpenny: "#FED03F",
        darkearth: "#A5908D99",
        deserttan: "#D1CEBC",
        sunset: "#CFD2DD",
      },
      height: {
        disc: "calc(100vh - 70px)",
        discscroll: "calc(100vh - 107px)",
        discdesktop: "400px",
      },
      width: {
        disc: "calc(100vw - 10px)",
        discdesktop: "calc(100vw - 150px)",
      },
      margin: {
        center: "0 auto",
      },
      dropShadow: {
        bay: "2px 4px 20px rgba(255, 216, 80, 0.3)",
      },
    },
  },
  plugins: [],
};
