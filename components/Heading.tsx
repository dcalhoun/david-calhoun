import React from "react";
import { stripEmpty } from "../utils/string";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function H1({ className, ...rest }: Props) {
  return (
    <h1
      className={`text-3xl lg:text-5xl font-bold ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

export function H2({ className, ...rest }: Props) {
  return (
    <h2
      className={`text-xl lg:text-3xl font-bold mb-2 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

export function H3({ className, ...rest }: Props) {
  return (
    <h3
      className={`text-md lg:text-lg uppercase mb-2 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

export function H4({ className, ...rest }: Props) {
  return (
    <h4
      className={`text-sm lg:text-lg opacity-75 mb-4 lg:mb-8 ${stripEmpty(
        className
      )}`}
      {...rest}
    />
  );
}