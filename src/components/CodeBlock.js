import Lowlight from "react-lowlight";
import PropTypes from "prop-types";
import React from "react";
import bash from "highlight.js/lib/languages/bash";
import js from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";

Lowlight.registerLanguage("bash", bash);
Lowlight.registerLanguage("html", xml);
Lowlight.registerLanguage("js", js);

function CodeBlock(props) {
  return (
    <Lowlight
      inline={props.inline}
      language={props.language || "js"}
      value={props.literal}
    />
  );
}

CodeBlock.propTypes = {
  inline: PropTypes.bool,
  language: PropTypes.string,
  literal: PropTypes.string
};

export default CodeBlock;
