import Link from "next/link";

export default function PostList({ posts }) {
  return posts.map(({ route, frontMatter: { title, published } }) => (
    <article className="mb-4 lg:mb-8" role="listitem" key={route}>
      <Link href={route}>
        <a className="block" title={`${title} - Published on ${published}`}>
          <h2 aria-hidden className="text-lg font-semibold">
            {title}
          </h2>
          <time aria-hidden dateTime={published}>
            {published}
          </time>
        </a>
      </Link>
    </article>
  ));
}
