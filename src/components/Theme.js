import React from "react";
import colors from "../utils/colors.json";
import { Component } from "react";

export const themes = {
  light: {
    background: "#feffff",
    color: "#4c4d4e",
    linkColor: colors["blue"][4],
    name: "light"
  },
  dark: {
    background: "#1e2424",
    color: "#979899",
    linkColor: colors["yellow"][4],
    name: "dark"
  }
};

export const ThemeContext = React.createContext(themes.light);
