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
          DEFAULT: "#85ABD5", // Sky Blue from image
          dark: "#6A8EB8",
          light: "#E7F0F9",
          deep: "#4D76A5"
        },
        secondary: {
          DEFAULT: "#C64A47", // Reddish from image
          dark: "#A33D3A",
          light: "#F9EAEA"
        },
        navy: {
          900: "#0F1B2C",
          800: "#1A2F4B",
          DEFAULT: "#1A2F4B"
        },
        background: {
          light: "#F4F7FA"
        }
      },
      fontFamily: {
        sans: ["Manrope", "Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
}