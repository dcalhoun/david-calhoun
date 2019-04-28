import "../utils/reset.css";
import "../utils/theme.css";
import Header from "./Header";
import IconSun from "./IconSun";
import PropTypes from "prop-types";
import React from "react";
import SEO from "../components/SEO";
import TextLink from "./TextLink";
import chroma from "chroma-js";
import { fonts } from "../utils/style";
import { styled } from "styletron-react";

function Layout(props) {
  const toggleTheme = () => {
    window.__setPreferedTheme(window.__theme === "dark" ? "light" : "dark");
  };

  return (
    <Container>
      <Inner>
        <Content>
          <Header>
            <Leader
              aria-label="Toggle dark or light theme"
              onClick={toggleTheme}
            >
              <IconSun fill="var(--linkBorder)" height={30} width={30} />
            </Leader>
          </Header>
          {props.children}
        </Content>
      </Inner>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Layout;

const Container = styled("div", {
  backgroundColor: "var(--backgroundBorder)",
  padding: "0.5rem",
  transition: "background-color 160ms ease",

  "@media (min-width: 54rem)": {
    padding: "1rem"
  }
});

const Inner = styled("div", {
  backgroundColor: "var(--background)",
  minHeight: "calc(100vh - 1rem)",
  overflow: "hidden",
  position: "relative",
  transition: "background-color 160ms ease",

  "@media (min-width: 54rem)": {
    minHeight: "calc(100vh - 2rem)"
  }
});

const Content = styled("div", {
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: "56.25rem",

  "@media (min-width: 54rem)": {
    marginBottom: "3rem"
  }
});

const Leader = styled("button", {
  alignItems: "center",
  background: "none",
  border: "none",
  boxShadow: "none",
  cursor: "pointer",
  display: "flex",
  fontFamily: fonts.monospace,
  justifyContent: "center",
  padding: "0.55rem",
  position: "absolute",
  right: 0,
  top: 0
});
