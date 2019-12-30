let chroma = require("chroma-js");
let colors = require("./colors.json");
let fs = require("fs");

let themes = [
  {
    background: colors.gray[0],
    color: colors.black,
    linkColor: colors.base,
    name: "light"
  },
  {
    background: colors.black,
    color: colors.gray[3],
    linkColor: colors.yellow[3],
    name: "dark"
  }
];

let template = theme =>
  `${theme.name === "dark" ? "@media (prefers-color-scheme: dark) {" : ""}
    :root {
      --background: ${theme.background};
      --backgroundBorder: ${theme.backgroundBorder};
      --color: ${theme.color};
      --linkColor: ${theme.linkColor};
      --linkBorder: ${theme.linkBorder};
      --linkShadow: ${theme.linkShadow};
      --linkShadowHover: ${theme.linkShadowHover};
    }
  ${theme.name === "dark" ? "}" : ""}`;

let themeCSS = themes.reduce((acc, theme) => {
  let { name, ...colors } = theme;
  let { background, color, linkColor } = Object.keys(colors).reduce(
    (acc, el) => ({ ...acc, [el]: chroma(theme[el]) }),
    {}
  );

  let fullTheme = {
    background: background.css(),
    backgroundBorder: background.darken(0.5).css(),
    color: color.css(),
    linkColor: linkColor.css(),
    linkBorder: linkColor.alpha(0.8).css(),
    linkShadow: linkColor.alpha(0.15).css(),
    linkShadowHover: linkColor.alpha(0.25).css(),
    name
  };

  return acc + template(fullTheme);
}, "");

fs.writeFile("./theme.css", themeCSS, err => {
  if (err) {
    return console.log("❌ Theme CSS generation failed.", err);
  }

  console.log("✅ Theme CSS generation succeeded.");
});
