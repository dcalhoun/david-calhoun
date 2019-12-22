import React from "react";
import SEO from "./SEO";
import { MDXProvider } from "@mdx-js/react";
import * as Heading from "./Heading";
import TextButton from "./TextButton";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: ({ className, ...rest }) => (
    <p className={`text-md lg:text-2xl mb-4 lg:mb-8 ${className}`} {...rest} />
  ),
  a: props => (
    <TextButton target="_blank" rel="noopener noreferrer" {...props} />
  ),
  pre: ({ className, ...rest }) => (
    <pre
      className={`bg-gray-300 mb-4 lg:mb-8 p-4 rounded-lg overflow-scroll ${className}`}
      {...rest}
    />
  ),
  code: ({ className, ...rest }) => (
    <code className={`text-sm lg:text-lg ${className}`} {...rest} />
  ),
  inlineCode: ({ className, ...rest }) => (
    <code className={`bg-gray-300 ${className}`} {...rest} />
  )
};

export default props => (
  <MDXProvider components={components}>
    <SEO
      title={`${props.title} | David Calhoun, Software Engineer`}
      description={props.description}
    />
    <Heading.H4>{props.published.replace(/-/g, ".")}</Heading.H4>
    <Heading.H1>{props.title}</Heading.H1>
    {props.children}
  </MDXProvider>
);
