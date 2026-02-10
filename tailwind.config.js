/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // add if you create a components/ folder later
  ],
  theme: {
    extend: {
      // Add custom colors/fonts if needed later, e.g.:
      // colors: { primary: '#1e40af' },
    },
  },
  plugins: [],
};