import React from "react";
import { stripEmpty } from "../utils/string";

interface Props {
  className?: string;
  children: React.ReactNode;
}

let Paragraph: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <p
      className={`text-lg lg:text-2xl mb-4 lg:mb-8 ${stripEmpty(className)}`}
      {...rest}
    />
  );
};

export default Paragraph;
