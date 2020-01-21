import React from "react";
import { stripEmpty } from "../utils/string";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export default function Paragraph({ className, ...rest }: Props) {
  return (
    <p
      className={`text-lg lg:text-2xl mb-4 lg:mb-8 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}
