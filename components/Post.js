import React from "react";
import SEO from "./SEO";
import { MDXProvider } from "@mdx-js/react";
import * as Heading from "./Heading";
import Pre from "./Pre";
import Code from "./Code";
import Paragraph from "./Paragraph";
import TextButton from "./TextButton";

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Paragraph,
  a: TextButton,
  pre: Pre,
  code: ({ className, ...rest }) => (
    <code className={`text-sm lg:text-lg ${className}`} {...rest} />
  ),
  inlineCode: ({ className, ...rest }) => (
    <code className={`bg-gray-300 ${className}`} {...rest} />
  )
};

export default props => (
  <MDXProvider components={components}>
    <SEO title={`${props.title} | David Calhoun, Software Engineer`} />
    <Heading.H4>{props.published.replace(/-/g, ".")}</Heading.H4>
    <Heading.H1>{props.title}</Heading.H1>
    {props.children}
  </MDXProvider>
);
