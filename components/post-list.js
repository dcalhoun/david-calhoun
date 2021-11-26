import Link from "next/link";
import FormattedDate, { formatDateString } from "./formatted-date";

export default function PostList({ posts }) {
  return (
    <ul role="list">
      {posts.map(({ route, title, date }) => {
        return (
          <li
            className="mb-4 lg:mb-8"
            key={route}
            itemScope
            itemType="http://schema.org/BlogPosting"
            role="listitem"
          >
            <Link href={route}>
              <a
                className="block"
                title={`${title} - Published on ${formatDateString(date)}`}
              >
                <h2
                  aria-hidden
                  className="text-2xl lg:text-4xl font-semibold text-blue-600 dark:text-white underline"
                  itemProp="headline"
                >
                  {title}
                </h2>
                <FormattedDate ariaHidden dateString={date} />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
