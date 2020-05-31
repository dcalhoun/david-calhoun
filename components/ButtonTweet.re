open Webapi.Dom;

let isClient: bool = [%raw "typeof window !== 'undefined'"];

type twttr;
[@bs.val] [@bs.scope "window"] external twttr: twttr = "twttr";
let twttrLoaded =
  if (isClient) {
    Js.Types.test(twttr, Js.Types.Object);
  } else {
    false;
  };

type twttrShareButtonOptions = {
  dnt: option(bool),
  hashtags: option(string),
  lang: option(string),
  related: option(string),
  size: option(string),
  text: option(string),
  via: option(string),
};
type createShareButton =
  (string, ReactDOMRe.Ref.t, twttrShareButtonOptions) => unit;
[@bs.val] [@bs.scope ("window", "twttr", "widgets")]
external createShareButton: createShareButton = "createShareButton";

let initTweetButton = (~anchor, ~text) => {
  if (isClient) {
    if (!twttrLoaded) {
      let twttrLoad =
        Js.Promise.make((~resolve, ~reject) => {
          let twttrScript = Document.createElement("script", document);
          Element.setId(twttrScript, "twitter-wjs");
          Element.addEventListener(
            "load",
            _ => resolve(. twttrScript),
            twttrScript,
          );
          Element.addEventListener(
            "error",
            _ => reject(. Js.Exn.raiseError("Twitter load failed.")),
            twttrScript,
          );
          Element.setAttribute(
            "src",
            "//platform.twitter.com/widgets.js",
            twttrScript,
          );

          let firstScript =
            document
            |> Document.getElementsByTagName("script")
            |> HtmlCollection.item(0);

          switch (firstScript) {
          | Some(sibling) =>
            switch (Element.parentNode(sibling)) {
            | Some(parent) =>
              parent->Element.insertBefore(sibling, twttrScript) |> ignore
            | None => ()
            }
          | None => ()
          };
        });

      twttrLoad
      |> Js.Promise.then_(_ => {
           createShareButton(
             Webapi.Dom.window |> Window.location |> Location.href,
             ReactDOMRe.Ref.domRef(anchor),
             {
               dnt: None,
               hashtags: None,
               lang: None,
               related: None,
               size: Some("large"),
               text: Some(text),
               via: Some("david_calhoun"),
             },
           );
           Js.Promise.resolve();
         })
      |> Js.Promise.catch(error => {
           Js_console.error2("Twitter initialization failed.", error);
           Js.Promise.resolve();
         })
      |> ignore;
    };
  };
  Some(() => ());
};

[@react.component]
let make = (~className, ~title) => {
  let anchor = React.useRef(Js.Nullable.null);

  React.useEffect2(
    () => {initTweetButton(~anchor, ~text=title)},
    (anchor, title),
  );

  <span className ref={ReactDOMRe.Ref.domRef(anchor)} />;
};
