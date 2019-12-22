import "../../theme.css";
import "./index.css";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import TextButton from "../TextButton";

export default function Layout({ children, disableContentPadding }) {
  return (
    <div className="Layout min-h-screen p-2 lg:p-4 flex flex-col">
      <div
        className={`Layout-content ${
          disableContentPadding ? "py-4" : "p-4"
        } flex-1`}
      >
        <Head>
          <title>David Calhoun, Software Engineer</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <nav
          className={`text-center mb-4 ${disableContentPadding ? "px-4" : ""}`}
        >
          <Link href="/" passHref>
            <TextButton className="mx-2 text-md">About</TextButton>
          </Link>
          <Link href="/writing" passHref>
            <TextButton className="mx-2 text-md">Writing</TextButton>
          </Link>
          <TextButton
            className="mx-2 text-md"
            href="https://twitter.com/david_calhoun"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </TextButton>
          <TextButton
            className="mx-2 text-md"
            href="https://github.com/dcalhoun"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </TextButton>
        </nav>
        <div className="max-w-md lg:max-w-4xl m-auto">{children}</div>
      </div>
    </div>
  );
}
