import Link from "next/link";
import { useRouter } from "next/router";
import { forwardRef } from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="sr-only focus-within:not-sr-only">
        <a
          className="fixed z-10 top-0 left-0 bg-white dark:bg-gray-900 text-blue-600 dark:text-white underline rounded-lg m-2 p-4"
          href="#content"
        >
          Skip to content
        </a>
      </div>
      <div className="relative max-w-prose mx-auto">
        <nav
          aria-label="Global"
          className="fixed z-10 bottom-2 lg:bottom-auto lg:top-10 left-0 lg:left-1/2 lg:translate-x-[calc(-65ch/2-128px)] flex w-full lg:w-auto"
        >
          <ul className="mx-auto flex lg:flex-col justify-around lg:items-start bg-white/50 dark:bg-gray-900/50 lg:bg-transparent backdrop-blur lg:backdrop-blur-none rounded-xl border border-gray-100 dark:border-gray-800 lg:border-none">
            <li>
              <Link href="/" passHref>
                <NavLink>About</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <NavLink>Blog</NavLink>
              </Link>
            </li>
            <li>
              <Link href="/links" passHref>
                <NavLink>Links</NavLink>
              </Link>
            </li>
          </ul>
        </nav>
        <main
          className="max-w-prose mx-auto mt-10 mb-28 md:mb-40 lg:mb-10"
          id="content"
        >
          {children}
        </main>
      </div>
    </>
  );
}

function NavNextLink({ children, href, onClick }, ref) {
  const { asPath } = useRouter();
  const indicatorColor = new RegExp(`${href}($|\/.+)`).test(asPath)
    ? "text-blue-600 dark:text-white"
    : "text-transparent";
  return (
    <a
      className="relative flex items-center text-lg md:text-2xl text-gray-700 dark:text-gray-400 underline p-4 lg:p-0 lg:mb-6"
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
