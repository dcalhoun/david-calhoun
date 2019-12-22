import React, { useLayoutEffect, useRef } from "react";

export default function ButtonTweet(props) {
  const anchor = useRef(null);
  useLayoutEffect(() => {
    async function initTweetButton(anchor, text) {
      if (typeof window !== "undefined") {
        if (typeof window.twitter === "undefined") {
          try {
            await new Promise(resolve => {
              const firstScript = document.getElementsByTagName("script")[0];
              const twttrScript = document.createElement("script");
              twttrScript.id = "twitter-wjs";
              twttrScript.addEventListener("load", resolve);
              twttrScript.src = "//platform.twitter.com/widgets.js";
              firstScript.parentNode.insertBefore(twttrScript, firstScript);
            });
          } catch (e) {
            console.error("Twitter load failed.", e);
          }
        }

        try {
          await window.twttr.widgets.createShareButton(
            window.location.href,
            anchor.current,
            { size: "large", text, via: "david_calhoun" }
          );
        } catch (e) {
          console.error("Twitter initialization failed.", e);
        }
      }
    }

    initTweetButton(anchor, props.title);
  }, [anchor]);

  return <nav ref={anchor} className="mb-4 lg:mb-8" />;
}
