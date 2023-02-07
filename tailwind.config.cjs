/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      spacing: {
        1000: "1000px",
        300: "300px",
        40: "40px",
      },
      colors: {
        "product-border": "rgba(0,0,0,.125)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        13: "repeat(13, minmax(0, 1fr))",

        // Complex site-specific column configuration
      },
    },
  },
  plugins: [],
};
