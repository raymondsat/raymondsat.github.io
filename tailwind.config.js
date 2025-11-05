/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./hugo_stats.json",
    "./content/**/*.{html,js,md}",
    "./layouts/**/*.{html,js}",
    "./themes/**/layouts/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
