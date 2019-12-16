import "../styles/index.css";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import TextLink from "./TextLink";

export default props => (
  <div className="bg-gray-200 min-h-screen p-2 flex flex-col">
    <div className="bg-white p-4 flex-1">
      <Head>
        <title>David Calhoun, Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav>
        <Link href="/" passHref>
          <TextLink>About</TextLink>
        </Link>{" "}
        <Link href="/writing" passHref>
          <TextLink>Writing</TextLink>
        </Link>{" "}
        <TextLink
          href="https://twitter.com/david_calhoun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </TextLink>{" "}
        <TextLink
          href="https://github.com/dcalhoun"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </TextLink>
      </nav>
      {props.children}
    </div>
  </div>
);
