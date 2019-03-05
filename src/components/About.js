import React, { useContext } from "react";
import TextLink from "./TextLink";
import { ThemeContext } from "../components/Theme";
import { fonts } from "../utils/style";
import { styled } from "styletron-react";

const Container = styled("section", {
  marginBottom: "6rem",
  padding: "0 1rem"
});

const Title = styled("p", props => ({
  color: props.color,
  fontFamily: fonts.heading,
  fontSize: "1.75rem",
  fontStyle: "italic",
  lineHeight: "1.25",
  margin: "0 0 3rem",

  "@media (min-width: 40rem)": {
    fontSize: "3rem"
  },

  "@media (min-width: 60rem)": {
    fontSize: "3.75rem"
  }
}));

const SubTitle = styled("p", props => ({
  color: props.color,
  fontFamily: fonts.heading,
  lineHeight: 1.66,
  margin: "0"
}));

const Break = styled("br", {
  display: "none",

  "@media (min-width: 40rem)": {
    display: "block"
  }
});

const BreakXS = styled("br", {
  "@media (min-width: 40rem)": {
    display: "none"
  }
});

function About(props) {
  const context = useContext(ThemeContext);
  return (
    <Container>
      <Title color={context.color}>
        Software engineer <Break />
        specializing in UX design <Break />& front-end architecture.
      </Title>
      <SubTitle color={context.color}>
        Currently at <TextLink to="https://www.gonoodle.com">GoNoodle</TextLink>
        . <BreakXS />
        Based in Nashville, TN.
      </SubTitle>
    </Container>
  );
}

export default About;
