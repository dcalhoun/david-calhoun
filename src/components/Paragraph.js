import PropTypes from "prop-types";
import React from "react";
import { Component } from "react";
import { styled } from "styletron-react";

function Paragraph(props) {
  return <Container>{props.children}</Container>;
}

Paragraph.propTypes = {
  children: PropTypes.node
};

export default Paragraph;

const Container = styled("p", { marginTop: 0 });
