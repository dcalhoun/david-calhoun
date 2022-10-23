import { useContext, useMemo } from "react";
import { MDXProvider } from "@mdx-js/react";
import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/oceanicNext";
import Link from "next/link";

const HightlightContext = React.createContext({});

const A = ({ children, ...props }) => {
  const isExternal = props.href && /https?:\/\//.test(props.href);

  if (isExternal) {
    return (
      <a target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return props.href ? (
    <Link href={props.href}>
      <a {...props}>{children}</a>
    </Link>
  ) : (
    <></>
  );
};

const Pre = ({ children, ...props }) => {
  return (
    <HightlightContext.Provider value={props}>
      <pre tabIndex="0">{children}</pre>
    </HightlightContext.Provider>
  );
};

const Code = ({ children, className, ...props }) => {
  const { highlight } = useContext(HightlightContext);
  const highlightedRanges = useMemo(() => {
    return highlight
      ? highlight.split(",").map((r) => {
          if (r.includes("-")) {
            return r.split("-").map((v) => parseInt(v, 10));
          }
          return +r;
        })
      : [];
  }, [highlight]);
  if (!className) return <code {...props}>{children}</code>;
  if (typeof children !== "string") return <code {...props}>{children}</code>;
  const language = className.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <code className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line, key: i })}
              style={
                highlightedRanges.some((r) => {
                  return Array.isArray(r)
                    ? r[0] <= i + 1 && i + 1 <= r[1]
                    : r === i + 1;
                })
                  ? {
                      background: "var(--c-highlight)",
                      margin: "0 -1rem",
                      padding: "0 1rem",
                    }
                  : {}
              }
            >
              {line
                .filter((token) => !token.empty)
                .map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
            </div>
          ))}
        </code>
      )}
    </Highlight>
  );
};

const components = {
  a: A,
  pre: Pre,
  code: Code,
};

const MDXTheme = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXTheme;
