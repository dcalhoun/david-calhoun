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
  image = "../public/david.jpg",
  title = SITE_NAME,
}) {
  return (
    <div className="relative max-w-2xl mx-auto">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      <nav className="fixed lg:absolute bottom-2 lg:bottom-auto lg:top-0 lg:-left-32 flex w-full lg:w-auto">
        <div
          className="max-w-2xl mx-auto flex lg:flex-col justify-around lg:items-end backdrop-filter backdrop-blur rounded-xl"
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
      <main className="prose lg:prose-xl mx-auto my-10 px-2 pb-16 lg:pb-0">
        {children}
      </main>
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
