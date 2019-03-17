import Link from "../components/Link";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import chroma from "chroma-js";
import { ThemeContext } from "../components/Theme";
import { styled } from "styletron-react";

function TextLink(props) {
  const context = useContext(ThemeContext);
  return (
    <Container $color={context.color} $linkColor={context.linkColor} {...props}>
      {props.children}
    </Container>
  );
}

TextLink.propTypes = {
  ...Link.propTypes,
  children: PropTypes.node
};

export default TextLink;

const Container = styled(Link, props => ({
  backgroundColor: "transparent",
  border: "none",
  borderBottom: `2px solid ${chroma(props.$linkColor)
    .alpha(0.8)
    .css()}`,
  boxShadow: `inset 0 -0.5625rem 0 ${chroma(props.$linkColor)
    .alpha(0.15)
    .css()}`,
  color: props.$color,
  fontSize: "inherit",
  margin: 0,
  textDecoration: "none",
  transitionDuration: "160ms",
  transitionProperty: "border-color, box-shadow",
  transitionTimingFunction: "ease",

  ":hover": {
    boxShadow: `inset 0 -1.2em 0 ${chroma(props.$linkColor)
      .alpha(0.25)
      .css()}`
  }
}));
