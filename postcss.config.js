module.exports = ({ env }) => ({
  plugins: [
    require("tailwindcss")({
      config: {
        purge: [
          "./pages/**/*.{ts,tsx,js,re}",
          "./components/**/*.{ts,tsx,js,re}",
        ],
      },
    }),
    require("autoprefixer"),
    env === "production" ? require("cssnano") : false,
  ],
});
