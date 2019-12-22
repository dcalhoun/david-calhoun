import React from "react";
import stripEmpty from "../utils/string";

export function H1({ className, ...rest }) {
  return (
    <h1
      className={`text-3xl lg:text-5xl font-bold mb-2 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

export function H2({ className, ...rest }) {
  return (
    <h2
      className={`text-xl lg:text-3xl font-bold mb-2 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

export function H3({ className, ...rest }) {
  return (
    <h3
      className={`text-md lg:text-lg uppercase mb-2 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

export function H4({ className, ...rest }) {
  return (
    <h4 className={`text-xs lg:text-lg opacity-50 ${stripEmpty(className)}`} {...rest} />
  );
}
