import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="px-4 bg-white dark:bg-gray-900 font-serif">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
