import "./index.css";
import React from "react";
import c from "../../utils/className";

let TextButton = React.forwardRef(({ className, ...rest }, ref) => (
  <a className={`TextButton ${c(className)}`} {...rest} ref={ref} />
));

TextButton.defaultProps = {
  className: ""
};

export default TextButton;
