/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["light", "dark"],
  },
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {

    extend: {
      width : {
        '100' : '400px'
      }
    },
  },
  plugins: [require("daisyui"), require("tw-elements/dist/plugin")],
};
