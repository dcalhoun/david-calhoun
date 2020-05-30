// import { make as SEO, siteDescription } from "./SEO.bs";
// import { MDXProvider } from "@mdx-js/react";
// import * as Heading from "./Heading";
// import { make as TextButton } from "./TextButton.bs";
// import { stripEmpty } from "../utils/String.bs";
// import ButtonTweet from "./ButtonTweet";
// import Paragraph from "./Paragraph";
// import Highlight, { defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/nightOwl";
// import { event } from "../utils/gtag";
// import "lazysizes";
// import FormattedDate from "../components/FormattedDate";

type event = {
  event_category: string,
  event_label: option(string),
  value: option(string),
};

[@bs.val] external gtag: (string, string, event) => unit = "gtag";

let trackEvent = (~action, ~params) => gtag("event", action, params);

module MDX = {
  module MDXProvider = {
    [@bs.module "@mdx-js/react"] [@react.component]
    external make: (~components: 'a, ~children: React.element) => React.element =
      "MDXProvider";
  };
};

module Anchor = {
  [@react.component]
  let make = (~children, ~href) => {
    <TextButton external_=true href> children </TextButton>;
  };
};

module Highlight = {
  [@bs.module "prism-react-renderer"]
  external defaultProps: string = "defaultProps";

  // TODO - Set proper type
  [@bs.module] external theme: string = "prism-react-renderer/themes/nightOwl";

  [@bs.module "prism-react-renderer"] [@react.component]
  external make:
    (
      ~prism: 'a,
      ~theme: 'a,
      ~language: 'a,
      ~code: string,
      ~children: React.element
    ) =>
    React.element =
    "default";
};

// module Code = {
//   [@react.component]
//   let make = (~children, ~className) => {
//     let language = Js.String.replaceByRe([%re"/language-/"], "", className);

//       <Highlight
//         // {...Highlight.defaultProps}
//         code={children}
//         // @ts-ignore
//         language={language}
//         theme={Highlight.theme}
//       >
//         {({ className, style, tokens, getLineProps, getTokenProps }) => (
//           <pre
//             className={"text-sm lg:text-lg mb-4 lg:mb-8 p-4 rounded-lg overflow-scroll" ++ String.stripEmpty(
//               className
//             )}
//             style={style}
//           >
//             {tokens.map(
//               (line, i) =>
//                 line.every((l) => !l.empty) && (
//                   <div key={i} {...getLineProps({ line, key: i })}>
//                     {line.map((token, key) => (
//                       <span key={key} {...getTokenProps({ token, key })} />
//                     ))}
//                   </div>
//                 )
//             )}
//           </pre>
//         )}
//       </Highlight>
//     ;
//   };
// }

module UnorderedList = {
  [@react.component]
  let make = (~className, ~children) => {
    <ul
      className={"list-decimal pl-6 lg:pl-8" ++ String.stripEmpty(className)}>
      children
    </ul>;
  };
};

module OrderedList = {
  [@react.component]
  let make = (~className, ~children) => {
    <ol
      className={"list-decimal pl-6 lg:pl-8" ++ String.stripEmpty(className)}>
      children
    </ol>;
  };
};

module ListItem = {
  [@react.component]
  let make = (~className, ~children) => {
    <li
      className={
        "text-lg lg:text-2xl mb-4 lg:mb-8" ++ String.stripEmpty(className)
      }>
      children
    </li>;
  };
};

// type mDXComponents = {
//   h1: int,
//   h2: int,
//   h3: int,
//   p: int,
//   a: int,
//   pre: int,
//   ul: int,
//   ol: int,
//   li: int,
//   code: int,
// };

// let components = {
//   h1: Heading.H1,
//   h2: Heading.H2,
//   h3: Heading.H3,
//   p: Paragraph,
//   a: Anchor,
//   pre: (
//     props: JSX.IntrinsicAttributes &
//       React.ClassAttributes<HTMLDivElement> &
//       React.HTMLAttributes<HTMLDivElement>
//   ) => <div {...props} />,
//   ul: UnorderedList,
//   ol: OrderedList,
//   li: ListItem,
//   code: Code,
// };

[@react.component]
let make = (~title, ~description, ~published, ~children) => {
  <MDX.MDXProvider components="">
    <SEO title description />
    <Heading.H1> {React.string(title)} </Heading.H1>
    <Heading.H4> <FormattedDate dateString=published /> </Heading.H4>
    children
    <Paragraph>
      <>
        {React.string("Questions, comments, suggestions? ")}
        <TextButton
          onClick={_e => {
            trackEvent(
              ~action="Send Feedback",
              ~params={
                event_category: "Post",
                event_label: Some(title),
                value: None,
              },
            )
          }}
          href={
            "https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title="
            ++ {
              title;
            }
          }
          target="_blank"
          rel="noopener noreferrer">
          {React.string("Open an issue")}
        </TextButton>
        {React.string(". Enjoy this content? Please consider sharing it.")}
        <ButtonTweet className="inline-block align-middle ml-2" title />
      </>
    </Paragraph>
    <footer
      className="flex items-center flex-col lg:flex-row rounded-lg p-4 mb-4 lg:mb-8"
      style={ReactDOMRe.Style.make(
        ~backgroundColor="var(--backgroundBorder)",
        (),
      )}>
      <Spread
        props={
          "data-sizes": "auto",
          "data-src": "/david-thumbnail.jpg",
          "data-srcset": "/david-thumbnail.jpg 96w, /david-thumbnail@2x.jpg 192w, /david-thumbnail@3x.jpg 288w",
        }>
        <img
          alt="David Calhoun"
          className="lazyload block h-24 w-24 mb-4 lg:mb-0 lg:mr-4 rounded-full"
        />
      </Spread>
      <p className="flex-shrink text-md lg:text-xl text-center lg:text-left">
        {React.string(
           SEO.siteDescription ++ "He is the Director of Engineering at ",
         )}
        <TextButton href="https://www.gonoodle.com" external_=true>
          {React.string("GoNoodle")}
        </TextButton>
        {React.string(
           ", where he works to help kids be their best selves through movement and mindfulness.",
         )}
      </p>
    </footer>
  </MDX.MDXProvider>;
};
