import "../../theme.css";
import "./index.css";
import React from "react";

const TextButton = React.forwardRef(({ className, ...rest }, ref) => (
  <a className={`TextButton ${className}`} {...rest} ref={ref} />
));

TextButton.defaultProps = {
  className: ""
};

export default TextButton;
