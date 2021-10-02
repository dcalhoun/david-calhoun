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
    <div className="px-4">
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
        <nav className="fixed z-10 lg:absolute bottom-2 lg:bottom-auto lg:top-0 lg:-left-32 flex w-full lg:w-auto">
          <div
            className="mx-auto flex lg:flex-col justify-around lg:items-end backdrop-filter backdrop-blur rounded-xl"
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
        <main
          className={`${
            prose ? "prose lg:prose-2xl" : "max-w-prose"
          } mx-auto my-10 pb-16 lg:pb-0`}
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
    ? "bg-blue-500"
    : "";
  return (
    <a
      className="relative flex items-center text-sm md:text-2xl p-4 lg:p-0 lg:mb-6"
      href={href}
      onClick={onClick}
      ref={ref}
    >
      <div
        className={`absolute bottom-2 lg:bottom-auto lg:top-1/2 left-1/2 lg:-left-4 -translate-x-1/2 lg:translate-x-0 lg:-translate-y-1/2 h-1 lg:h-2 w-1 lg:w-2 rounded-full ${indicatorColor}`}
      />
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
            <div className="prose lg:prose-2xl mb-8 lg:mb-16">{children}</div>
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