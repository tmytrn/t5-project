/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
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
        platinum: "#EBE9E0",
        saddle: "#5B3B0B",
        iceberg: "#E2F0F8",
        "moss-green": "rgba(149, 149, 56, 0.6)",
        "olive-drab": "rgba(135, 137, 124, 0.6)",
        pewter: "rgba(91, 102, 112, 0.6)",
        clear: "rgba(183, 190, 211, 0.6)",
        "old-penny": "rgba(161, 117, 10, 0.6)",
        "new-penny": "rgba(222, 168, 0, 0.6)",
        "dark-earth": "rgba(117, 105, 103, 0.6)",
        "desert-tan": "rgba(187, 183, 157, 0.6)",
      },
    },
  },
  plugins: [],
};
