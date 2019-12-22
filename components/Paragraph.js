import React from "react";

export default ({ className, ...rest }) => (
  <p className={`text-md lg:text-2xl mb-4 lg:mb-8 ${className}`} {...rest} />
);
