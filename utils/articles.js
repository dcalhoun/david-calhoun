import preval from "babel-plugin-preval/macro";

export default preval(
  `module.exports = require('../scripts/mapMarkdownFilesToData.js');`
);
