import Link from "next/link";
import Head from "next/head";

const NAME = "David Calhoun";
const SITE_NAME = `${NAME}, Software Engineer`;
export const DESCRIPTION =
  "software engineer with a passion for building quality, accessible websites and apps";

export function Layout({
  description = `David Calhoun is a ${DESCRIPTION}.`,
  children,
  title = SITE_NAME,
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:description" content={description} />
        <meta name="twitter:site" content="@david_calhoun" />
      </Head>
      <nav className="prose lg:prose-xl mx-auto">
        <Link href="/">
          <a className="mr-4">About</a>
        </Link>
        <Link href="/writing">
          <a className="mr-4">Writing</a>
        </Link>
        <a href="https://github.com/dcalhoun" className="mr-4">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/davidpcalhoun/" className="mr-4">
          LinkedIn
        </a>
        <a href="https://twitter.com/david_calhoun" className="mr-4">
          Twitter
        </a>
      </nav>
      {children}
    </>
  );
}

// Default export layout required for Nextra
export default function Blog({ meta: { title, description } }) {
  return function BlogLayout({ children }) {
    return (
      <Layout title={`${title} | ${NAME}`} description={description}>
        <main className="prose lg:prose-xl mx-auto">
          <h1>{title}</h1>
          {children}
        </main>
      </Layout>
    );
  };
}
