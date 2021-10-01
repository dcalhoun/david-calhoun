import Link from "next/link";
import Head from "next/head";

export function Layout({
  description = "David Calhoun is a software engineer with a passion for good UX design & scalable architecture.",
  children,
  title = "David Calhoun, Software Engineer",
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
      </Head>
      <nav className="prose lg:prose-xl mx-auto">
        <Link href="/">
          <a className="mr-4">About</a>
        </Link>
        <Link href="/writing">
          <a className="mr-4">Writing</a>
        </Link>
      </nav>
      {children}
    </>
  );
}

// Default export layout required for Nextra
export default function Blog({ meta: { title, description } }) {
  return function BlogLayout({ children }) {
    return (
      <Layout title={title + " | David Calhoun"} description={description}>
        <main className="prose lg:prose-xl mx-auto">
          <h1>{title}</h1>
          {children}
        </main>
      </Layout>
    );
  };
}
