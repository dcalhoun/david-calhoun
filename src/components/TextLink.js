import PropTypes from "prop-types";
import React, { useContext } from "react";
import chroma from "chroma-js";
import { ThemeContext } from "../components/Theme";
import { cursorOnly } from "../utils/style";
import { styled } from "styletron-react";

const Container = styled("a", props => ({
  borderBottom: `2px solid ${chroma(props.$linkColor)
    .alpha(0.8)
    .css()}`,
  boxShadow: `inset 0 -0.5625rem 0 ${chroma(props.$linkColor)
    .alpha(0.15)
    .css()}`,
  color: props.$color,
  textDecoration: "none",
  transitionDuration: "160ms",
  transitionProperty: "border-color, box-shadow",
  transitionTimingFunction: "ease",

  ":hover": cursorOnly({
    boxShadow: `inset 0 -1.2em 0 ${chroma(props.$linkColor)
      .alpha(0.25)
      .css()}`
  })
}));

function TextLink(props) {
  const context = useContext(ThemeContext);
  return (
    <Container
      $color={context.color}
      $linkColor={context.linkColor}
      href={props.href}
      {...props}
    >
      {props.children}
    </Container>
  );
}

TextLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};

export default TextLink;
