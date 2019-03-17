import PropTypes from "prop-types";
import React from "react";
import { styled } from "styletron-react";

const Container = styled("pre", {
  borderRadius: "6px",
  display: "block",
  fontSize: "0.77em",
  marginTop: 0
});

function Pre(props) {
  return <Container {...props}>{props.children}</Container>;
}

Pre.propTypes = {
  children: PropTypes.node
};

export default Pre;
