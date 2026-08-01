/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: This allows the 'dark' class on <html> to trigger dark mode
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
