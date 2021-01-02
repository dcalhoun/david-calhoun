@bs.module external lazysizes: 'lazysizes = "lazysizes"
lazysizes

type token = {
  types: array<string>,
  content: string,
  empty: bool,
}

type lineInputProps = {
  line: array<token>,
  key: int,
}

type tokenInputProps = {
  token: token,
  key: int,
}

module Highlight = {
  type prism

  type defaultProps = {
    @bs.as("Prism")
    prism: prism,
  }
  @bs.module("prism-react-renderer")
  external defaultProps: defaultProps = "defaultProps"

  type theme
  @bs.module("prism-react-renderer/themes/nightOwl")
  external theme: theme = "default"

  type language = string

  @bs.module("prism-react-renderer") @react.component
  external make: (
    ~_Prism: prism,
    ~theme: theme,
    ~language: language,
    ~code: string,
    ~children: {
      "getLineProps": lineInputProps => {..},
      "getTokenProps": tokenInputProps => {..},
      "tokens": array<array<token>>,
      "className": option<string>,
      "style": ReactDOMRe.style,
    } => React.element,
  ) => React.element = "default"
}

module Code = {
  module Row = {
    @react.component
    let make = (~getLineProps, ~getTokenProps, ~tokens, ~className, ~style) =>
      <pre
        className={"text-sm lg:text-base mb-4 lg:mb-8 p-4 rounded-lg overflow-scroll " ++
        className->Belt.Option.getWithDefault("")}
        style>
        {tokens
        ->Belt.Array.mapWithIndex((i, line) =>
          line->Belt.Array.every((l: token) => !l.empty)
            ? <Spread key={string_of_int(i)} props={getLineProps({line: line, key: i})}>
                <div>
                  {line
                  ->Belt.Array.mapWithIndex((key, token) =>
                    <Spread
                      key={string_of_int(key)} props={getTokenProps({token: token, key: key})}>
                      <span />
                    </Spread>
                  )
                  ->React.array}
                </div>
              </Spread>
            : React.null
        )
        ->React.array}
      </pre>
  }

  @react.component
  let make = (~children, ~className) => {
    let language = Js.String.replaceByRe(%re("/language-/"), "", className)
    <Highlight code=children language _Prism=Highlight.defaultProps.prism theme=Highlight.theme>
      Row.make
    </Highlight>
  }
}

module Pre = {
  @react.component
  let make = (~children) => <div> children </div>
}

module UnorderedList = {
  @react.component
  let make = (~children) =>
    <ul className="font-serif text-gray-800 list-decimal pl-6 lg:pl-8"> children </ul>
}

module OrderedList = {
  @react.component
  let make = (~children) =>
    <ol className="font-serif text-gray-800 list-decimal pl-6 lg:pl-8"> children </ol>
}

module ListItem = {
  @react.component
  let make = (~children) => <li className="text-base lg:text-2xl mb-4 lg:mb-8"> children </li>
}

module Heading1 = {
  @react.component
  let make = (~children) => <h1 className=Heading.Styles.primary> children </h1>
}

module Heading2 = {
  @react.component
  let make = (~children) => <h2 className=Heading.Styles.secondary> children </h2>
}

module Heading3 = {
  @react.component
  let make = (~children) => <h3 className=Heading.Styles.tertiary> children </h3>
}

module Anchor = {
  @react.component
  let make = (~children, ~href) => <TextButton external_=true href> children </TextButton>
}

type mdxContentComponent = {"children": ReasonReact.reactElement} => ReasonReact.reactElement

type mdxComponents = {
  h1: mdxContentComponent,
  h2: mdxContentComponent,
  h3: mdxContentComponent,
  p: {
    "children": ReasonReact.reactElement,
    "className": option<string>,
  } => ReasonReact.reactElement,
  a: {"children": ReasonReact.reactElement, "href": string} => ReasonReact.reactElement,
  ul: mdxContentComponent,
  ol: mdxContentComponent,
  li: mdxContentComponent,
  code: {"children": string, "className": string} => React.element,
  pre: mdxContentComponent,
}

module MDXProvider = {
  @bs.module("@mdx-js/react") @react.component
  external make: (~components: mdxComponents, ~children: React.element) => React.element =
    "MDXProvider"
}

let components: mdxComponents = {
  h1: Heading1.make,
  h2: Heading2.make,
  h3: Heading3.make,
  p: Paragraph.make,
  a: Anchor.make,
  ul: UnorderedList.make,
  ol: OrderedList.make,
  li: ListItem.make,
  code: Code.make,
  pre: Pre.make,
}

@react.component
let make = (~title, ~description, ~published, ~children) => <>
  <article>
    <SEO title description />
    <h1 className=Heading.Styles.primary> {title->React.string} </h1>
    <FormattedDate dateString=published />
    <MDXProvider components> children </MDXProvider>
    <Paragraph>
      {<>
        {"Questions, comments, suggestions? "->React.string}
        <TextButton
          onClick={_e =>
            Gtag.sendEvent(
              ~action="Send Feedback",
              ~eventParams={
                event_category: Some("Post"),
                event_label: Some(title),
                value: None,
              },
            )}
          href={"https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=" ++ title}>
          {"Open an issue"->React.string}
        </TextButton>
        {". Enjoy this content? Please consider sharing it."->React.string}
        <ButtonTweet className="inline-block align-middle ml-2" title />
      </>}
    </Paragraph>
  </article>
  <footer
    className="flex items-center flex-col lg:flex-row rounded-lg p-4 mb-4 lg:mb-8 bg-gray-100">
    <Spread
      props={
        "data-sizes": "auto",
        "data-src": "/david-thumbnail.jpg",
        "data-srcset": "/david-thumbnail.jpg 96w, /david-thumbnail@2x.jpg 192w, /david-thumbnail@3x.jpg 288w",
      }>
      <img
        alt="David Calhoun"
        className="lazyload block h-24 w-24 flex-shrink-0 mb-4 lg:mb-0 lg:mr-4 rounded-full"
      />
    </Spread>
    <p className="flex-shrink text-md lg:text-xl font-serif text-gray-800">
      {(SEO.siteDescription ++ " He is a Software Engineer at ")->React.string}
      <TextButton href="https://automattic.com" external_=true>
        {"Automattic"->React.string}
      </TextButton>
      {", where he works to make the web a better place."->React.string}
    </p>
  </footer>
</>
