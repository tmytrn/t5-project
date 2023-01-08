/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: " -0.07em",
      tight: " 0.03em",
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "28px",
      "2xl": "24px",
      "3xl": "30px",
      "4xl": "36px",
      "5xl": "48px",
      "6xl": "64px",
      "7xl": "72px",
    },
    fontFamily: {
      serif: ["PP Editorial New", "serif"],
      sans: ["PP Neue Montreal TT Book", "sans-serif"],
    },
    extend: {
      colors: {
        platinum: "#FFF3CF",
        saddle: "#5B3B0B",
        iceberg: "#E2F0F8",
        mossgreen: "#959538",
        olivedrab: "#87897C",
        pewter: "#5B6670",
        clear: "#B7BED3",
        oldpenny: "#A1750A",
        newpenny: "#DEA800",
        darkearth: "#756967",
        deserttan: "#BBB79D",
      },
      height: {
        disc: "calc(100vh - 70px)",
        discscroll: "calc(100vh - 107px)",
      },
      width: {
        disc: "calc(100vw - 10px)",
      },
    },
  },
  plugins: [],
};
