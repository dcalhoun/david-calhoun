import React, { useContext } from "react0";
import TextLink from "./TextLink";
import { ThemeContext } from "../components/Theme";
import { fonts } from "../utils/style";
import { styled } from "styletron-react";

const Card = styled(TextLink, {
  flex: "0 0 100%",
  fontFamily: fonts.heading,
  padding: "1rem",
  position: "relative",
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

const Description = styled("p", props => ({
  color: props.color,
  fontSize: "0.875rem",
  fontStyle: "italic",
  lineHeight: "1.5em",
  marginBottom: 0,
  marginTop: 0,
  opacity: "0.6",

  "@media (min-width: 40rem)": {
    fontSize: "1.125rem"
  }
}));

export default props => {
  const context = useContext(ThemeContext);
  return (
    <Card
      color={context.color}
      href={props.href}
      index={props.index}
      linkColor={context.linkColor}
    >
      <Title>{props.name}</Title>
      <Description color={context.color} index={props.index}>
        {props.description}
      </Description>
    </Card>
  );
};
