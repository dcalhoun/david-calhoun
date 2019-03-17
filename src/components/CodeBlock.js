import "prism-theme-night-owl";
import PropTypes from "prop-types";
import React from "react";
import { styled } from "styletron-react";

function CodeBlock(props) {
  return <Container {...props}>{props.children}</Container>;
}

CodeBlock.propTypes = {
  children: PropTypes.node
};

export default CodeBlock;

const Container = styled("code", props => ({
  display: props.children.length > 1 ? "block" : "inline",
  fontSize: "0.875em !important",
  lineHeight: "1.75 !important",
  overflowX: "auto"
}));
