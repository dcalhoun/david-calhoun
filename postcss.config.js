module.exports = ({ env }) => ({
  plugins: [
    require("tailwindcss"),
    env === "production"
      ? require("@fullhuman/postcss-purgecss")({
          content: ["./pages/**/*.js", "./components/**/*.js"],
          defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
      : false,
    require("autoprefixer"),
    env === "production" ? require("cssnano") : false
  ]
});
