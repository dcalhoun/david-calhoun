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
    pageExtensions: ["js", "jsx", "mdx"],
    webpack: (config, { defaultLoaders, isServer, dev }) => {
      // Fixes npm packages that depend on `fs` module
      config.node = {
        fs: "empty",
        module: "empty"
      };

      return config;
    }
  })
);
