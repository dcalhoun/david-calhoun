const bsconfig = require("./bsconfig.json");
const withTM = require("next-transpile-modules")(
  ["rescript"].concat(bsconfig["bs-dependencies"])
);

let withMDX = require("@next/mdx")();

module.exports = withMDX(
  withTM({
    pageExtensions: ["mdx", "js", "bs.js"],
    webpack: (config, options) => {
      const { isServer } = options;
      if (!isServer) {
        // We shim fs for things like the blog slugs component
        // where we need fs access in the server-side part
        config.resolve.fallback = {
          fs: false,
          path: false,
        };
      }
      return config;
    },
  })
);
