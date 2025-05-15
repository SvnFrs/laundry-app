/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "sky": {
          "50": "#f0fafa",
          "100": "#e0f4f5",
          "200": "#c1e9eb",
          "300": "#a3dee2",
          "400": "#84d3d8",
          "500": "#65c8ce",
          "600": "#51a0a5",
          "700": "#3d787c",
          "800": "#285052",
          "900": "#142829"
        }
      }
    }
  },
  plugins: [],
}
