import Link from "next/link";
import FormattedDate from "./formatted-date";

export default function PostList({ posts }) {
  return posts.map(({ route, frontMatter: { title, published } }) => {
    return (
      <article
        className="mb-4 lg:mb-8"
        role="listitem"
        key={route}
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <Link href={route}>
          <a className="block" title={`${title} - Published on ${published}`}>
            <h2
              aria-hidden
              className="text-2xl lg:text-4xl font-semibold text-blue-600 dark:text-white underline"
              itemProp="headline"
            >
              {title}
            </h2>
            <FormattedDate ariaHidden dateString={published} />
          </a>
        </Link>
      </article>
    );
  });
}
