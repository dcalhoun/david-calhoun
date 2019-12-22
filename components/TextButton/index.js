import "./index.css";
import React from "react";
import stripEmpty from "../../utils/string";

let TextButtonWithRef = React.forwardRef(function TextButton(
  { className, ...rest },
  ref
) {
  return (
    <a className={`TextButton ${stripEmpty(className)}`} {...rest} ref={ref} />
  );
});

TextButtonWithRef.defaultProps = {
  className: ""
};

export default TextButtonWithRef;
