import ProjectCard from "./ProjectCard";
import React, { useContext } from "react";
import chroma from "chroma-js";
import { fonts } from "../utils/style";
import { styled } from "styletron-react";

function Projects(props) {
  return (
    <Container>
      <Title>Open Source</Title>
      <ProjectCard
        description="Summon your Hyper windows with a system-wide hotkey."
        href="https://github.com/soutar/hyperterm-summon"
        index={0}
        name="hyperterm-summon"
      />
      <ProjectCard
        description="A Yeoman generator for prototyping and building experiences."
        href="https://github.com/centresource/generator-playbook"
        index={1}
        name="generator-playbook"
      />
      <ProjectCard
        description="Configure Clubhouse to respond to GitHub events by specific users."
        href="https://github.com/dcalhoun/github-to-clubhouse"
        index={2}
        name="github-to-clubhouse"
      />
      <ProjectCard
        description="CLI to convert AMD CoffeeScript to ES6 Standard JavaScript."
        href="https://github.com/dcalhoun/es6-migrate"
        index={3}
        name="es6-migrate"
      />
      <ProjectCard
        description="Selectively remove PostCSS warnings from your logs."
        href="https://github.com/dcalhoun/postcss-warn-cleaner"
        index={4}
        name="postcss-warn-cleaner"
      />
      <ProjectCard
        description="Immutable, CSS margin utilities."
        href="https://github.com/dcalhoun/css-utils-margin"
        index={5}
        name="css-utils-margin"
      />
      <ProjectCard
        description="Immutable, CSS padding utilities."
        href="https://github.com/dcalhoun/css-utils-padding"
        index={6}
        name="css-utils-padding"
      />
    </Container>
  );
}

export default Projects;

const Container = styled("section", {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",

  "@media (min-width: 54rem)": {
    padding: "0 1rem"
  }
});

const Title = styled("h3", {
  color: "var(--color)",
  display: "flex",
  flexWrap: "wrap",
  fontFamily: fonts.heading,
  fontSize: "0.75rem",
  fontWeight: 600,
  justifyContent: "center",
  letterSpacing: "0.2em",
  margin: "0 0 0.5rem",
  textAlign: "center",
  textTransform: "uppercase",

  "::after": {
    borderBottom: `0.0625rem solid var(--color)`,
    content: '""',
    display: "block",
    marginTop: "0.5rem",
    width: "50%"
  }
});
