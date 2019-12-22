module.exports = {
  plugins: [
    require("tailwindcss"),
    require("@fullhuman/postcss-purgecss")({
      content: ["./pages/**/*.js", "./components/**/*.js"]
    }),
    require("autoprefixer"),
    require("cssnano")
  ]
};
