/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
