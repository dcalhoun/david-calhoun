import "../styles/index.css";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import TextButton from "./TextButton";

export default props => (
  <div className="bg-gray-200 min-h-screen p-2 flex flex-col">
    <div className="bg-white p-4 flex-1">
      <Head>
        <title>David Calhoun, Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <nav className="text-center mb-2">
        <Link href="/" passHref>
          <TextButton className="mx-1">About</TextButton>
        </Link>{" "}
        <Link href="/writing" passHref>
          <TextButton className="mx-1">Writing</TextButton>
        </Link>{" "}
        <TextButton
          className="mx-1"
          href="https://twitter.com/david_calhoun"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </TextButton>{" "}
        <TextButton
          className="mx-1"
          href="https://github.com/dcalhoun"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </TextButton>
      </nav>
      {props.children}
    </div>
  </div>
);
