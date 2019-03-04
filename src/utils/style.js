// TODO: Remove touch input-based styles
export const cursorOnly = styles => (true ? {} : styles);

export const touchOnly = styles => (true ? styles : {});

const base =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif';

export const fonts = {
  body: `"Avenir Next", ${base}`,
  base,
  heading: `"Avenir Next", ${base}`,
  monospace: "Monaco, monospace"
};
