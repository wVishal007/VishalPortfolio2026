/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: This allows the 'dark' class on <html> to trigger dark mode
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can define your signature Lavender here for easy use
        lavender: "#E6E6FA",
      },
    },
  },
  plugins: [],
}