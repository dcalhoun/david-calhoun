import Link from "next/link";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function PostList({ posts }) {
  return posts.map(({ route, frontMatter: { title, published } }) => {
    const [year, month, day] = published.split("-");
    return (
      <article className="mb-4 lg:mb-8" role="listitem" key={route}>
        <Link href={route}>
          <a className="block" title={`${title} - Published on ${published}`}>
            <h2
              aria-hidden
              className="text-2xl lg:text-4xl font-semibold text-blue-600 dark:text-white underline"
            >
              {title}
            </h2>
            <time
              aria-hidden
              className="text-gray-700 dark:text-gray-400"
              dateTime={published}
            >
              {`${day} ${MONTHS[month - 1]} ${year}`}
            </time>
          </a>
        </Link>
      </article>
    );
  });
}
