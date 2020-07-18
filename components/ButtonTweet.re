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

[@bs.val] [@bs.scope ("window", "twttr", "widgets")]
external createShareButton: (string, Dom.element, twttrShareButtonOptions) => unit = "createShareButton";

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
            switch (Element.parentElement(sibling)) {
            | Some(parent) =>
              parent |> Element.insertBefore(twttrScript, sibling) |> ignore
            | None => ()
            }
          | None => ()
          };
        });

      twttrLoad
      |> Js.Promise.then_(_ => {
        switch(anchor) {
          | Some(anchorEl) =>
             createShareButton(
               Webapi.Dom.window |> Window.location |> Location.href,
               anchorEl,
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
             | None => Js.Promise.resolve();
             }
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
  let anchorRef = React.useRef(Js.Nullable.null);

  React.useEffect2(
    () => {initTweetButton(~anchor=anchorRef.current->Js.Nullable.toOption, ~text=title)},
    (anchorRef,title),
  );

  <span className ref={ReactDOMRe.Ref.domRef(anchorRef)} />;
};
