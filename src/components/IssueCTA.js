import React, { useContext } from "react";
import TextLink from "./TextLink";
import { ThemeContext } from "../components/Theme";
import { fonts } from "../utils/style";
import { styled } from "styletron-react";

const CTA = styled("p", props => ({
  color: props.color,
  fontFamily: fonts.base,
  fontSize: "1.125rem",
  marginTop: 0
}));

export default props => {
  const context = useContext(ThemeContext);
  return (
    <CTA color={context.color}>
      Questions, Comments, Suggestions?{" "}
      <TextLink
        href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${
          props.title
        }`}
        target="_blank"
      >
        Open an Issue
      </TextLink>
      .
    </CTA>
  );
};
