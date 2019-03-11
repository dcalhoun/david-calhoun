import PropTypes from "prop-types";
import React from "react";
import { styled } from "styletron-react";

const Container = styled("code", props => ({
  display: props.children.length > 1 ? "block" : "inline",
  overflowX: "auto"
}));

function CodeBlock(props) {
  return <Container>{props.children}</Container>;
}

CodeBlock.propTypes = {
  children: PropTypes.node
};

export default CodeBlock;
