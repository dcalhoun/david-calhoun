import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { forwardRef } from "react";
import PostList from "./post-list";

const NAME = "David Calhoun";
const SITE_NAME = `${NAME}, Software Engineer`;
export const DESCRIPTION =
  "software engineer with a passion for building high-quality, accessible websites and apps";

export function Layout({
  description = `David Calhoun is a ${DESCRIPTION}.`,
  children,
  image = "../public/david.jpg",
  prose = true,
  title = SITE_NAME,
}) {
  return (
    <div className="px-4 font-serif">
      <div className="relative max-w-prose mx-auto">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <meta name="og:title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta name="twitter:site" content="@david_calhoun" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className="sr-only focus-within:not-sr-only">
          <a
            className="fixed z-10 top-0 left-0 bg-white dark:bg-gray-900 text-blue-600 dark:text-white underline rounded-lg m-2 p-4"
            href="#content"
          >
            Skip to content
          </a>
        </div>
        <nav className="fixed z-10 lg:absolute bottom-2 lg:bottom-auto lg:top-0 left-0 lg:-left-32 flex w-full lg:w-auto">
          <div className="mx-auto flex lg:flex-col justify-around lg:items-start bg-white dark:bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur rounded-xl border border-gray-100 dark:border-gray-800 lg:border-none">
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
        <main
          className={`${
            prose
              ? "prose md:prose-lg lg:prose-2xl dark:prose-light"
              : "max-w-prose"
          } mx-auto mt-10 mb-28 md:mb-40 lg:mb-10`}
          id="content"
        >
          {children}
        </main>
      </div>
    </div>
  );
}

function NavNextLink({ children, href, onClick }, ref) {
  const { asPath } = useRouter();
  const indicatorColor = new RegExp(`${href}($|\/.+)`).test(asPath)
    ? "text-blue-600 dark:text-white"
    : "text-transparent";
  return (
    <a
      className="relative flex items-center text-lg md:text-2xl text-gray-700 dark:text-gray-400 p-4 lg:p-0 lg:mb-6"
      href={href}
      onClick={onClick}
      ref={ref}
    >
      <div
        className={`absolute bottom-1 lg:bottom-auto lg:top-1/2 left-1/2 lg:-left-6 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 rounded-full ${indicatorColor}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 lg:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hidden lg:block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      {children}
    </a>
  );
}
const NavLink = forwardRef(NavNextLink);

// Default export layout required for Nextra
export default function Blog({ meta: { title, description, type }, pageMap }) {
  return function BlogLayout({ children }) {
    return (
      <Layout
        title={`${title} | ${NAME}`}
        description={description}
        prose={type !== "posts"}
      >
        {type === "posts" ? (
          <>
            <div className="prose md:prose-lg lg:prose-2xl dark:prose-light mb-8 lg:mb-16">
              {children}
            </div>
            <PostList
              posts={pageMap[0]?.children.sort(sortByPostPublishDateString)}
            />
          </>
        ) : (
          children
        )}
      </Layout>
    );
  };
}

function sortByPostPublishDateString(a, b) {
  return (
    parseDate(b.frontMatter.published) - parseDate(a.frontMatter.published)
  );
}

function parseDate(dateString) {
  const [year, month, day] = dateString.split("-");
  return new Date(year, month - 1, day);
}
