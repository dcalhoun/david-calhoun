import React from "react";
import SEO from "./SEO";
import { MDXProvider } from "@mdx-js/react";
import * as Heading from "./Heading";
import TextButton from "./TextButton";
import stripEmpty from "../utils/string";
import IssueCTA from "./IssueCTA";
import ButtonTweet from "./ButtonTweet";
import Paragraph from "./Paragraph";

function Anchor(props) {
  return <TextButton target="_blank" rel="noopener noreferrer" {...props} />;
}

function Pre({ className, ...rest }) {
  return (
    <pre
      className={`bg-gray-300 mb-4 lg:mb-8 p-4 rounded-lg overflow-scroll ${stripEmpty(
        className
      )}`}
      {...rest}
    />
  );
}

function Code({ className, ...rest }) {
  return (
    <code className={`text-sm lg:text-lg ${stripEmpty(className)}`} {...rest} />
  );
}

function InlineCode({ className, ...rest }) {
  return <code className={`bg-gray-300 ${stripEmpty(className)}`} {...rest} />;
}

let components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Paragraph,
  a: Anchor,
  pre: Pre,
  code: Code,
  inlineCode: InlineCode
};

export default function Post(props) {
  return (
    <MDXProvider components={components}>
      <SEO title={props.title} description={props.description} />
      <Heading.H4>{props.published.replace(/-/g, ".")}</Heading.H4>
      <Heading.H1>{props.title}</Heading.H1>
      {props.children}
      <IssueCTA title={props.title} />
      <ButtonTweet title={props.title} />
    </MDXProvider>
  );
}
