const nextra = require("nextra");

module.exports = nextra("./components/layout.js")({
  reactStrictMode: true,
  unstable_staticImage: true,
});
