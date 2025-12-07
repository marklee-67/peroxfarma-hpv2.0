/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00a897",
        secondary: "#FF6B6B",
        navy: "#0B1120", // Deep dark blue for the hero section
        background: {
          light: "#F8F9FA",
          dark: "#0f2321",
        },
        text: {
          primary: "#333333",
          secondary: "#666666",
        },
      },
      fontFamily: {
        sans: ["Manrope", "Noto Sans KR", "sans-serif"],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}