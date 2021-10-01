import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { forwardRef } from "react";

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
      <div className="pb-16">{children}</div>
      <nav className="fixed bottom-0 w-full p-2">
        <div
          className="max-w-2xl mx-auto flex justify-around backdrop-filter backdrop-blur rounded-xl"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <Link href="/" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="/blog" passHref>
            <NavLink>Blog</NavLink>
          </Link>
          <Link href="/links" passHref>
            <NavLink>Links</NavLink>
          </Link>
        </div>
      </nav>
    </>
  );
}

function NavNextLink({ children, href, onClick }, ref) {
  const { asPath } = useRouter();
  const indicatorColor = new RegExp(`${href}($|\/.+)`).test(asPath)
    ? "bg-blue-500"
    : "";
  return (
    <a
      className="relative flex flex-col items-center text-sm md:text-2xl px-4 py-4"
      href={href}
      onClick={onClick}
      ref={ref}
    >
      {children}
      <div
        className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 mt-1 rounded-full ${indicatorColor}`}
      />
    </a>
  );
}
const NavLink = forwardRef(NavNextLink);

// Default export layout required for Nextra
export default function Blog({ meta: { title, description } }) {
  return function BlogLayout({ children }) {
    return (
      <Layout title={`${title} | ${NAME}`} description={description}>
        <main className="prose lg:prose-xl mx-auto px-2">
          <h1>{title}</h1>
          {children}
        </main>
      </Layout>
    );
  };
}
