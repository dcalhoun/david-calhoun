import React from "react";
import colors from "../utils/colors.json";
import { Component } from "react";

export const themes = {
  light: {
    background: "#feffff",
    color: "#4c4d4e",
    linkColor: colors["blue"][4]
  },
  dark: {
    background: "#1e2424",
    color: "#979899",
    linkColor: colors["yellow"][4]
  }
};

export const ThemeContext = React.createContext(themes.light);
