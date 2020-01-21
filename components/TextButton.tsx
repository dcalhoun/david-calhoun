import "./TextButton.css";
import React from "react";
import { stripEmpty } from "../utils/string";
import { event } from "../utils/gtag";

interface Props {
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  onClick?(event: Event): void;
  href?: string;
  rel?: "noopener noreferrer";
  target?: "_blank";
}

export default React.forwardRef<HTMLAnchorElement, Props>(function TextButton(
  { className, external, onClick, href, ...rest }: Props,
  ref: React.Ref<HTMLAnchorElement>
): React.ReactElement {
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
          onClick: (): void => {
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
