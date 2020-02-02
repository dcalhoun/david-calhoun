import "../theme.css";
import "./Layout.css";
import React from "react";
import Link from "next/link";
import Head from "next/head";
import TextButton from "./TextButton";

interface Props {
  children: React.ReactNode;
  disableContentPadding?: boolean;
}

let Layout: React.FC<Props> = ({ children, disableContentPadding }) => {
  return (
    <>
      <a className="SkipToContent" href="#content">
        Skip to content
      </a>
      <div className="Layout min-h-screen p-2 lg:p-4 flex flex-col">
        <div
          className={`Layout-content ${
            disableContentPadding ? "pt-8" : "px-4 pt-8"
          } flex-1`}
        >
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <nav
            className={`text-center text-lg mb-8 ${
              disableContentPadding ? "px-4" : ""
            }`}
          >
            <Link href="/" passHref>
              <TextButton className="mx-2">About</TextButton>
            </Link>
            <Link href="/writing" passHref>
              <TextButton className="mx-2">Writing</TextButton>
            </Link>
            <TextButton
              className="mx-2"
              href="https://twitter.com/david_calhoun"
              external
            >
              Twitter
            </TextButton>
            <TextButton
              className="mx-2"
              href="https://github.com/dcalhoun"
              external
            >
              GitHub
            </TextButton>
          </nav>
          <main className="max-w-md lg:max-w-4xl m-auto" id="content">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

Layout.defaultProps = {
  disableContentPadding: false
};

export default Layout;
