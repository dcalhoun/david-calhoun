import PropTypes from "prop-types";
import React from "react";
import TextLink from "./TextLink";
import { fonts } from "../utils/style";
import { styled } from "styletron-react";

function IssueCTA(props) {
  return (
    <CTA>
      Questions, comments, suggestions?{" "}
      <TextLink
        href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${
          props.title
        }`}
        target="_blank"
      >
        Open an issue
      </TextLink>
      .
    </CTA>
  );
}

IssueCTA.propTypes = {
  title: PropTypes.string.isRequired
};

export default IssueCTA;

const CTA = styled("p", {
  color: "var(--color)",
  fontFamily: fonts.base,
  fontSize: "1.125rem",
  marginTop: 0
});
