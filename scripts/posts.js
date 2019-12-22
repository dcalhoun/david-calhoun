import preval from "babel-plugin-preval/macro";

const posts = preval`module.exports = require('./mapMarkdownFilesToData.js');`;

module.exports = posts;
