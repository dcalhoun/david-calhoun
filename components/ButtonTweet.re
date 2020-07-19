open Webapi.Dom;

type twttrScaffolding;
let twttrScaffolding = [%raw
  {|
  (function() {
    var t = {};
    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    }
    return t;
  })()
|}
];
type twttr;
[@bs.val] external twttr: twttr = "twttr";
[@bs.set] external setTwttr: (Dom.window, twttr) => unit = "twttr";
[@bs.val] [@bs.scope ("window", "twttr")]
external ready: 'a => unit = "ready";

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
external createShareButton:
  (string, Dom.element, twttrShareButtonOptions) => unit =
  "createShareButton";

[@react.component]
let make = (~className, ~title) => {
  let isClient = Js.typeof(window) != "undefined";
  let anchorRef = React.useRef(Js.Nullable.null);

  // Load Twitter widget library
  React.useEffect(() => {
    let twttrScriptId = "twitter-wjs";

    if (isClient) {
      let twttrLoaded =
        document
        |> Document.getElementById(twttrScriptId)
        |> Belt.Option.isSome;

      if (!twttrLoaded) {
        setTwttr(Webapi.Dom.window, twttrScaffolding);
        let twttrScript = Document.createElement("script", document);
        Element.setId(twttrScript, twttrScriptId);
        Element.setAttribute(
          "src",
          "//platform.twitter.com/widgets.js",
          twttrScript,
        );

        let firstScript =
          document
          |> Document.getElementsByTagName("body")
          |> HtmlCollection.item(0);

        firstScript->Belt.Option.mapWithDefault(
          (),
          Element.appendChild(twttrScript),
        );
      };
    };

    Some(() => ());
  });

  // Initialize tweet button
  React.useEffect2(
    () => {
      if (isClient) {
        ready(() => {
          switch (anchorRef.current->Js.Nullable.toOption) {
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
                text: Some(title),
                via: Some("david_calhoun"),
              },
            )
          | None => ()
          }
        });
      };
      Some(() => ());
    },
    (anchorRef, title),
  );

  <span className ref={ReactDOMRe.Ref.domRef(anchorRef)} />;
};
