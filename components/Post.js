import React from "react";
import SEO, { SITE_DESCRIPTION } from "./SEO";
import { MDXProvider } from "@mdx-js/react";
import * as Heading from "./Heading";
import TextButton from "./TextButton";
import { stripEmpty } from "../utils/string";
import ButtonTweet from "./ButtonTweet";
import Paragraph from "./Paragraph";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { event } from "../utils/gtag";
import "lazysizes";
import FormattedDate from "../components/FormattedDate";

function Anchor(props) {
  return <TextButton external {...props} />;
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

function UnorderedList({ className, ...rest }) {
  return (
    <ul
      className={`list-decimal pl-6 lg:pl-8 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

function OrderedList({ className, ...rest }) {
  return (
    <ol
      className={`list-decimal pl-6 lg:pl-8 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

function ListItem({ className, ...rest }) {
  return (
    <li
      className={`text-lg lg:text-2xl mb-4 lg:mb-8 ${stripEmpty(className)}`}
      {...rest}
    />
  );
}

let components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  p: Paragraph,
  a: Anchor,
  pre: props => <div {...props} />,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  code: Code
};

export default function Post(props) {
  return (
    <MDXProvider components={components}>
      <SEO title={props.title} description={props.description} />
      <Heading.H1>{props.title}</Heading.H1>
      <Heading.H4>
        <FormattedDate dateString={props.published} />
      </Heading.H4>
      {props.children}
      <Paragraph>
        Questions, comments, suggestions?{" "}
        <TextButton
          onClick={() =>
            event({
              action: "Send Feedback",
              category: "Post",
              label: props.title
            })
          }
          href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${props.title}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Open an issue
        </TextButton>
        . Enjoy this content? Please consider sharing it.
        <ButtonTweet
          className="inline-block align-middle ml-2"
          title={props.title}
        />
      </Paragraph>
      <footer
        className="flex items-center flex-col lg:flex-row rounded-lg p-4 mb-4 lg:mb-8"
        style={{ backgroundColor: "var(--backgroundBorder)" }}
      >
        <img
          alt="David Calhoun"
          className="lazyload block h-24 w-24 mb-4 lg:mb-0 lg:mr-4 rounded-full"
          data-sizes="auto"
          data-src="/david-thumbnail.jpg"
          data-srcset="/david-thumbnail.jpg 96w, /david-thumbnail@2x.jpg 192w, /david-thumbnail@3x.jpg 288w"
        />
        <p className="flex-shrink text-md lg:text-xl text-center lg:text-left">
          {SITE_DESCRIPTION} He is the Director of Engineering at{" "}
          <TextButton href="https://www.gonoodle.com" external>
            GoNoodle
          </TextButton>
          , where he works to help kids be their best selves through movement
          and mindfulness.
        </p>
      </footer>
    </MDXProvider>
  );
}
