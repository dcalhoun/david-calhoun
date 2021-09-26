import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" style={{ boxSizing: "border-box" }}>
        <Head>
          {process.env.DEVTOOLS === "true" && (
            <script src="http://localhost:8097" />
          )}
          <link rel="shortcut icon" href="/icon-48x48.png" />
          <link rel="manifest" href="/manifest.webmanifest" />
          <meta
            name="theme-color"
            content="#111827"
            media="(prefers-color-scheme: dark)"
          />
          <meta name="theme-color" content="#e5e7eb" />
          <link rel="apple-touch-icon" sizes="48x48" href="/icon-48x48.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="96x96" href="/icon-96x96.png" />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="192x192"
            href="/icon-192x192.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="256x256"
            href="/icon-256x256.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="384x384"
            href="/icon-384x384.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="512x512"
            href="/icon-512x512.png"
          />
          <link rel="preconnect" href="https://platform.twitter.com" />
        </Head>
        <body className="text-gray-800 dark:text-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
