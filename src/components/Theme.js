import React from "react";
import colors from "../utils/colors.json";
import { Component } from "react";

export const themes = {
  light: {
    background: colors["gray"][0],
    color: colors["gray"][9],
    linkColor: colors["base"],
    name: "light"
  },
  dark: {
    background: colors["black"],
    color: colors["gray"][3],
    linkColor: colors["gray"][0],
    name: "dark"
  }
};

export const ThemeContext = React.createContext(themes.light);
