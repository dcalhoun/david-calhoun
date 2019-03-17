import PropTypes from "prop-types";
import React, { useLayoutEffect, useRef } from "react";
import { Component } from "react";
import { styled } from "styletron-react";

const Anchor = styled("nav", {
  display: "inline-block",
  marginBottom: "1.5em"
});

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

function ButtonTweet(props) {
  const anchor = useRef(null);
  useLayoutEffect(() => {
    initTweetButton(anchor, props.title);
  }, [anchor, props.title]);

  return <Anchor $ref={anchor} />;
}

ButtonTweet.propTypes = {
  title: PropTypes.string.isRequired
};

export default ButtonTweet;
