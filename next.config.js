const nextra = require("nextra");

const withNextra = nextra({
  theme: "./components/layout-nextra.js",
  unstable_staticImage: true,
});

module.exports = withNextra({ reactStrictMode: true });
