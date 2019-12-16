module.exports = {
  plugins: [
    require("tailwindcss"),
    require("@fullhuman/postcss-purgecss")({
      content: [
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}"
      ]
    }),
    require("autoprefixer"),
    require("cssnano")
  ]
};
