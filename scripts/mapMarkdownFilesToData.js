let fs = require("fs");
let path = require("path");

let DIR = path.join(process.cwd(), "/pages/writing/");
let META = /export\s+let\s+meta\s+=\s+({[\s\S]*?\n})/;
let files = fs
  .readdirSync(DIR)
  .filter(file => file.endsWith(".md") || file.endsWith(".mdx"));

module.exports = files
  .map((file, index) => {
    let name = path.join(DIR, file);
    let contents = fs.readFileSync(name, "utf-8");
    let match = META.exec(contents);

    if (!match || typeof match[1] !== "string") {
      throw new Error(`${name} needs to export let meta = {}`);
    }

    // eslint-disable-next-line no-eval
    let meta = eval("(" + match[1] + ")");

    return {
      ...meta,
      path: "/writing/" + file.replace(/\.mdx?$/, ""),
      index
    };
  })
  .filter(meta => meta.published)
  .sort((a, b) => new Date(b.published) - new Date(a.published));
