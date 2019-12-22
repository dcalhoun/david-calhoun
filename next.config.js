const images = require("remark-images");
const emoji = require("remark-emoji");

const withCSS = require("@zeit/next-css");
const withMDX = require("@next/mdx")({
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
