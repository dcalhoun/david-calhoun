import React from "react";

const TextLink = React.forwardRef(({ className, ...rest }, ref) => (
  <a
    className={`text-purple-800 hover:text-purple-400 underline ${className}`}
    {...rest}
    ref={ref}
  />
));

TextLink.defaultProps = {
  className: ""
};

export default TextLink;
