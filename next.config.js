const nextra = require("nextra");

const withNextra = nextra({
  theme: "./components/layout-nextra.js",
});

module.exports = withNextra({ reactStrictMode: true });
