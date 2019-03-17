import PropTypes from "prop-types";
import React from "react";
import { Component } from "react";
import { styled } from "styletron-react";

function Heading(props) {
  const Container = styled(`h${props.level}`, {
    fontSize: props.level < 4 ? "1.125rem" : "0.875rem",
    fontWeight: props.level < 4 ? "bold" : "normal",
    marginBottom: "0.5em",
    marginTop: "1.75em",
    textTransform: props.level < 4 ? "none" : "uppercase",

    "@media (min-width: 40rem)": {
      fontSize: props.level < 4 ? "1.5rem" : "1rem"
    }
  });

  return <Container>{props.children}</Container>;
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.number
};

Heading.defaultProps = {
  level: 1
};

export default Heading;
