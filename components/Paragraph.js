import React from "react";
import { stripEmpty } from "../utils/string";

export default function Paragraph({ className, ...rest }) {
  return (
    <p
      className={`text-lg lg:text-2xl mb-4 lg:mb-8 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}
