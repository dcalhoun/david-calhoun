import React, { useEffect, useRef } from "react";

interface Props {
  className?: string;
  title: string;
}

let ButtonTweet: React.FC<Props> = ({ title, ...rest }) => {
  const anchor = useRef(null);
  useEffect(() => {
    async function initTweetButton(
      anchor: React.RefObject<HTMLSpanElement>,
      text: string
    ) {
      if (typeof window !== "undefined") {
        if (typeof window.twttr === "undefined") {
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

    initTweetButton(anchor, title);
  }, [anchor, title]);

  return <span ref={anchor} {...rest} />;
};

export default ButtonTweet;
