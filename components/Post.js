import React from "react";
import SEO, { SITE_DESCRIPTION } from "./SEO";
import { MDXProvider } from "@mdx-js/react";
import * as Heading from "./Heading";
import TextButton from "./TextButton";
import stripEmpty from "../utils/string";
import ButtonTweet from "./ButtonTweet";
import Paragraph from "./Paragraph";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

function Anchor(props) {
  return <TextButton target="_blank" rel="noopener noreferrer" {...props} />;
}

function Code({ children, className }) {
  let language = className.replace(/language-/, "");
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`text-sm lg:text-lg mb-4 lg:mb-8 p-4 rounded-lg overflow-scroll ${stripEmpty(
            className
          )}`}
          style={style}
        >
          {tokens.map(
            (line, i) =>
              line.every(l => !l.empty) && (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              )
          )}
        </pre>
      )}
    </Highlight>
  );
}

let components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Paragraph,
  a: Anchor,
  pre: props => <div {...props} />,
  code: Code
};

export default function Post(props) {
  return (
    <MDXProvider components={components}>
      <SEO title={props.title} description={props.description} />
      <Heading.H1>{props.title}</Heading.H1>
      <Heading.H4>{props.published.replace(/-/g, ".")}</Heading.H4>
      {props.children}
      <Paragraph className="mb-4 lg:mb-8">
        Questions, comments, suggestions?{" "}
        <TextButton
          href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${props.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue
        </TextButton>
        .
      </Paragraph>
      <ButtonTweet title={props.title} />
      <footer
        className="flex items-center flex-col lg:flex-row rounded-lg p-4 mb-4 lg:mb-8"
        style={{ backgroundColor: "var(--backgroundBorder)" }}
      >
        <img
          className="h-24 w-24 rounded-full mb-4 lg:mb-0 lg:mr-4"
          src="/david-thumbnail.jpg"
          srcset="/david-thumbnail@2x.jpg 2x, /david-thumbnail@3x.jpg 3x"
        />
        <p className="text-md lg:text-xl text-center lg:text-left">
          {SITE_DESCRIPTION}
        </p>
      </footer>
    </MDXProvider>
  );
}
