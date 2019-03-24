import "../utils/reset.css";
import Header from "./Header";
import IconSun from "./IconSun";
import PropTypes from "prop-types";
import React, { useState, useLayoutEffect } from "react";
import SEO from "../components/SEO";
import TextLink from "./TextLink";
import chroma from "chroma-js";
import { ThemeContext, themes } from "../components/Theme";
import { fonts } from "../utils/style";
import { styled } from "styletron-react";

function Layout(props) {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = () => {
    window.__setPreferedTheme(theme === themes.dark ? "light" : "dark");
  };

  useLayoutEffect(() => {
    setTheme(themes[window.__theme]);
    window.__onThemeChange = () => {
      setTheme(themes[window.__theme]);
    };

    return () => {
      window.__onThemeChange = () => {};
    };
  });

  return (
    <ThemeContext.Provider value={theme}>
      <Container $background={theme.background}>
        <Inner $background={theme.background}>
          <Content>
            <Header>
              <Leader
                aria-label="Toggle dark or light theme"
                onClick={toggleTheme}
              >
                <IconSun
                  fill={chroma(theme.linkColor)
                    .alpha(0.8)
                    .css()}
                  height={30}
                  width={30}
                />
              </Leader>
            </Header>
            {props.children}
          </Content>
        </Inner>
      </Container>
    </ThemeContext.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

export default Layout;

const Container = styled("div", props => ({
  backgroundColor: chroma(props.$background)
    .darken(0.5)
    .hex(),
  padding: "0.5rem",
  transition: "background-color 160ms ease",

  "@media (min-width: 54rem)": {
    padding: "1rem"
  }
}));

const Inner = styled("div", props => ({
  backgroundColor: props.$background,
  minHeight: "calc(100vh - 1rem)",
  overflow: "hidden",
  position: "relative",
  transition: "background-color 160ms ease",

  "@media (min-width: 54rem)": {
    minHeight: "calc(100vh - 2rem)"
  }
}));

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
