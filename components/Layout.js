import "../styles/index.css";
import React from "react";
import Link from "next/link";
import Head from "next/head";

export default props => (
  <div>
    <Head>
      <title>David Calhoun, Software Engineer</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Link href="/">
      <a>David Calhoun</a>
    </Link>{" "}
    <Link href="/writing">
      <a>Writing</a>
    </Link>{" "}
    <a href="https://twitter.com/david_calhoun">Twitter</a>{" "}
    <a href="https://github.com/dcalhoun">GitHub</a>
    <br />
    {props.children}
  </div>
);
