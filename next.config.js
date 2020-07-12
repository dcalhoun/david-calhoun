const withTM = require("next-transpile-modules")(["bs-platform"]);

let withCSS = require("@zeit/next-css");
let withMDX = require("@next/mdx")();

module.exports = withCSS(
  withMDX(
    withTM({
      pageExtensions: ["mdx", "jsx", "js", "ts", "tsx", "bs.js"],
      webpack: (config, { defaultLoaders, isServer, dev }) => {
        return {
          ...config,
          // Mock `fs` module for client packages
          // https://webpack.js.org/configuration/node/#node
          node: {
            fs: "empty",
            module: "empty"
          }
        };
      }
    })
  )
);
