import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Link from "next/link";

const A = ({ children, ...props }) => {
  const isExternal = props.href && /https?:\/\//.test(props.href);

  if (isExternal) {
    return (
      <a rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return props.href ? (
    <Link href={props.href} {...props}>
      {children}
    </Link>
  ) : (
    <></>
  );
};

const Pre = ({ children, ...props }) => {
  return <pre tabIndex="0">{children}</pre>;
};

const components = {
  a: A,
  pre: Pre,
};

const MDXTheme = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXTheme;
