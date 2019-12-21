const chroma = require("chroma-js");
const colors = require("./colors.json");
const fs = require("fs");

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
    linkColor: colors.gray[0],
    name: "dark"
  }
];

let template = theme => `
body${theme.name === "light" ? "" : `.${theme.name}`} {
  --background: ${theme.background};
  --backgroundBorder: ${theme.backgroundBorder};
  --color: ${theme.color};
  --linkColor: ${theme.linkColor};
  --linkBorder: ${theme.linkBorder};
  --linkShadow: ${theme.linkShadow};
  --linkShadowHover: ${theme.linkShadowHover};
}
`;

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
