import React from "react";

export default ({ className, ...rest }) => (
  <code className={`${className}`} {...rest} />
);
