/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./parts/**/*.html",
    "./patterns/**/*.html",
    "./templates/**/*.html",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
