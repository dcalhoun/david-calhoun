import React from "react";
import TextLink from "./TextLink";
import { fonts } from "../utils/style";
import { styled } from "styletron-react";

function ProjectCard(props) {
  return (
    <Card index={props.index} to={props.href}>
      <Title>{props.name}</Title>
      <Description index={props.index}>{props.description}</Description>
    </Card>
  );
}

ProjectCard.propTypes = {
  ...TextLink.propTypes
};

export default ProjectCard;

const Card = styled(TextLink, {
  flex: "0 0 100%",
  fontFamily: fonts.heading,
  padding: "1rem",
  position: "relative",
  textAlign: "left",
  width: "18rem"
});

const Title = styled("h3", {
  fontFamily: fonts.monospace,
  fontSize: "1rem",
  fontWeight: "normal",
  marginBottom: "0.5em",
  marginTop: 0,

  "@media (min-width: 40rem)": {
    fontSize: "1.25rem"
  }
});

const Description = styled("p", {
  color: "var(--color)",
  fontSize: "0.875rem",
  fontStyle: "italic",
  lineHeight: "1.5em",
  marginBottom: 0,
  marginTop: 0,
  opacity: "0.6",

  "@media (min-width: 40rem)": {
    fontSize: "1.125rem"
  }
});
