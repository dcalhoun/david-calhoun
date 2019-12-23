import "./index.css";
import React from "react";
import stripEmpty from "../../utils/string";
import { event } from "../../utils/gtag";

export default React.forwardRef(function TextButton(
  { className, external, onClick, href, ...rest },
  ref
) {
  return (
    <a
      className={`TextButton ${stripEmpty(className)}`}
      href={href}
      ref={ref}
      onClick={onClick}
      {...(!onClick &&
        href &&
        external && {
          target: "_blank",
          rel: "noopener noreferrer",
          onClick: () => {
            event({
              action: "Click Link",
              category: "External Links",
              label: href
            });
          }
        })}
      {...rest}
    />
  );
});
