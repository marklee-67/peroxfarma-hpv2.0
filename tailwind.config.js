/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00a897", // IncareBio Signature Mint
          dark: "#008a7d",
          light: "#e6f6f5"
        },
        secondary: "#FF6B6B", // Point Coral
        navy: {
          900: "#0B1120",
          800: "#1E293B",
          DEFAULT: "#0B1120"
        },
      },
      fontFamily: {
        sans: ["Manrope", "Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
}