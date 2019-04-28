import Link from "../components/Link";
import PropTypes from "prop-types";
import React from "react";
import { styled } from "styletron-react";

function TextLink(props) {
  return <Container {...props}>{props.children}</Container>;
}

TextLink.propTypes = {
  ...Link.propTypes,
  children: PropTypes.node
};

export default TextLink;

const Container = styled(Link, {
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "2px solid var(--linkBorder)",
  boxShadow: "inset 0 -0.5625rem 0 var(--linkShadow)",
  color: "var(--color)",
  fontSize: "inherit",
  margin: 0,
  textDecoration: "none",
  transitionDuration: "160ms",
  transitionProperty: "border-color, box-shadow",
  transitionTimingFunction: "ease",

  ":hover": {
    boxShadow: "inset 0 -1.2em 0 var(--linkShadow)"
  }
});
