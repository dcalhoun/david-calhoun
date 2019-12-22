import React from "react";

export default ({ className, ...rest }) => (
  <pre
    className={`bg-gray-300 mb-4 lg:mb-8 p-4 rounded-lg overflow-scroll ${className}`}
    {...rest}
  />
);
