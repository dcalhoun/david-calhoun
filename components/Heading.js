import React from "react";

export const H1 = ({ className, ...rest }) => (
  <h1
    className={`text-3xl lg:text-5xl font-bold mb-2 ${className}`}
    {...rest}
  />
);

export const H2 = ({ className, ...rest }) => (
  <h2 className={`text-xl lg:text-3xl font-bold mb-2 ${className}`} {...rest} />
);

export const H3 = ({ className, ...rest }) => (
  <h3 className={`text-md lg:text-lg uppercase mb-2 ${className}`} {...rest} />
);

export const H4 = ({ className, ...rest }) => (
  <h4 className={`text-xs lg:text-lg opacity-50 ${className}`} {...rest} />
);
