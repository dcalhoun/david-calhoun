let images = require("remark-images");
let emoji = require("remark-emoji");

let withCSS = require("@zeit/next-css");
let withMDX = require("@next/mdx")({
  options: {
    remarkPlugins: [images, emoji]
  }
});

module.exports = withCSS(
  withMDX({
    pageExtensions: ["js", "mdx"],
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
);
