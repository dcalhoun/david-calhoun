// import Highlight, { defaultProps } from "prism-react-renderer";
// import theme from "prism-react-renderer/themes/nightOwl";

type lazysizes;
[@bs.module] external lazysizes: lazysizes = "lazysizes";
lazysizes;

type event = {
  event_category: string,
  event_label: option(string),
  value: option(string),
};

[@bs.val] external gtag: (string, string, event) => unit = "gtag";

let trackEvent = (~action, ~params) => gtag("event", action, params);

type mdxComponents = {
  h1: (~children: React.element) => React.element,
  h2: (~children: React.element) => React.element,
  h3: (~children: React.element) => React.element,
  p: (~children: React.element) => React.element,
  a: (~children: React.element, ~href: string) => React.element,
  pre: (~children: React.element) => React.element,
  ul: (~children: React.element, ~className: string) => React.element,
  ol: (~children: React.element, ~className: string) => React.element,
  li: (~children: React.element, ~className: string) => React.element,
  code: (~children: React.element, ~className: string) => React.element,
};

module MDXProvider = {
  [@bs.module "@mdx-js/react"] [@react.component]
  external make:
    (~components: mdxComponents, ~children: React.element) => React.element =
    "MDXProvider";
};

module Anchor = {
  [@react.component]
  let make = (~children, ~href) => {
    <TextButton external_=true href> children </TextButton>;
  };
};

// module Highlight = {
//   [@bs.module "prism-react-renderer"]
//   external defaultProps: string = "defaultProps";

//   // TODO - Set proper type
//   [@bs.module] external theme: string = "prism-react-renderer/themes/nightOwl";

//   [@bs.deriving abstract]
//   type jsRenderProps = {
//     className: string,
//     style: string,
//     tokens: array(array(string)),
//     getLineProps: ({. line: string, key: int }) => unit,
//     getTokenProps: ({. token: string, key: int }) => unit,
//   };

//   [@bs.deriving abstract]
//   type jsProps = {
//     prism: 'a,
//     theme: 'a,
//     language: 'a,
//     code: string,
//     children: (Js.t(jsRenderProps)) => React.element,
//   };

//   [@bs.module "prism-react-renderer"] external highlight: highlight = "default";

//   let make:
//     (
//       ~prism: 'a,
//       ~theme: 'a,
//       ~language: 'a,
//       ~code: string,
//       ~children: (Js.t(jsProps)) => React.element
//     ) =>
//     ReasonReact.wrapJsForReason(~reactClass=highlight, ~props=jsProps())
// };

module Code = {
  [@react.component]
  let make = (~children, ~className) => {
    <div className>
       children </div>;
      //   let language = Js.String.replaceByRe([%re"/language-/"], "", className);
      //   <Highlight
      //     // {...Highlight.defaultProps}
      //     code={children}
      //     language={language}
      //     theme={Highlight.theme}
      //   >
      //     {({ className, style, tokens, getLineProps, getTokenProps }) => (
      //       <pre
      //         className={"text-sm lg:text-lg mb-4 lg:mb-8 p-4 rounded-lg overflow-scroll" ++ String.stripEmpty(
      //           className
      //         )}
      //         style={style}
      //       >
      //         {tokens.map(
      //           (line, i) =>
      //             line.every((l) => !l.empty) && (
      //               <div key={i} {...getLineProps({ line, key: i })}>
      //                 {line.map((token, key) => (
      //                   <span key={key} {...getTokenProps({ token, key })} />
      //                 ))}
      //               </div>
      //             )
      //         )}
      //       </pre>
      //     )}
      //   </Highlight>
  };
};

module UnorderedList = {
  [@react.component]
  let make = (~className: option(string)=?, ~children) => {
    <ul
      className={"list-decimal pl-6 lg:pl-8" ++ String.stripEmpty(className)}>
      children
    </ul>;
  };
};

module OrderedList = {
  [@react.component]
  let make = (~children, ~className: option(string)=?) => {
    <ol
      className={"list-decimal pl-6 lg:pl-8" ++ String.stripEmpty(className)}>
      children
    </ol>;
  };
};

module ListItem = {
  [@react.component]
  let make = (~children, ~className: option(string)=?) => {
    <li
      className={
        "text-lg lg:text-2xl mb-4 lg:mb-8" ++ String.stripEmpty(className)
      }>
      children
    </li>;
  };
};

let components: mdxComponents = {
  h1: (~children) => <Heading.H1> children </Heading.H1>,
  h2: (~children) => <Heading.H2> children </Heading.H2>,
  h3: (~children) => <Heading.H3> children </Heading.H3>,
  p: (~children) => <Paragraph> children </Paragraph>,
  a: (~children, ~href) => <Anchor href> children </Anchor>,
  pre: (~children) => <div> children </div>,
  ul: (~children, ~className) => {
    <UnorderedList className> children </UnorderedList>;
  },
  ol: (~children, ~className) => {
    <OrderedList className> children </OrderedList>;
  },
  li: (~children, ~className) => {
    <ListItem className> children </ListItem>;
  },
  code: (~children, ~className) => {
    <Code className> children </Code>;
  },
};

[@react.component]
let make = (~title, ~description, ~published, ~children) => {
  <MDXProvider components>
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
  </MDXProvider>;
};
