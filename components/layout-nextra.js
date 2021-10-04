import Head from "next/head";
import PostList from "./post-list";
import { DESCRIPTION } from "../components/layout";

export default function LayoutNextra({
  meta: {
    title = "David Calhoun, Software Engineer",
    description = `David Calhoun is a ${DESCRIPTION}`,
    type,
    image = "/public/david.jpg",
  },
  pageMap,
}) {
  return function LayoutBlog({ children }) {
    return (
      <div className="animate-fade-up">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>{title}</title>
          <meta name="og:title" content={title} />
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta
            property="og:site_name"
            content="David Calhoun, Software Engineer"
          />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta name="twitter:site" content="@david_calhoun" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <div className="prose md:prose-lg lg:prose-2xl dark:prose-light mb-8 lg:mb-16">
          {children}
        </div>
        {type === "posts" && (
          <PostList
            posts={pageMap[0]?.children.sort(sortByPostPublishDateString)}
          />
        )}
      </div>
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
