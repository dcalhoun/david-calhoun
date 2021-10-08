import Head from "next/head";
import Link from "next/link";
import PostList from "./post-list";
import { NAME, SITE_NAME, DESCRIPTION } from "../components/layout";
import { useRouter } from "next/router";
import FormattedDate from "./formatted-date";

const siteOrigin =
  process.env.NODE_ENV === "production"
    ? "https://davidcalhoun.me"
    : "http://localhost:3000";

export default function LayoutNextra({
  meta: {
    description = `${NAME} is a ${DESCRIPTION}`,
    image = siteOrigin + "/public/david.jpg",
    imageAlt = `Portrait of ${NAME}.`,
    imageHeight = 630,
    imageWidth = 1200,
    published,
    title,
    type,
  },
  pageMap,
}) {
  const pageTitle = title ? `${title} | ${NAME}` : SITE_NAME;
  return function LayoutBlog({ children }) {
    const { asPath } = useRouter();
    return (
      <div className="animate-fade-up">
        <Head>
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title key="title">{pageTitle}</title>
          <meta key="description" name="description" content={description} />
          <meta key="og:title" property="og:title" content={pageTitle} />
          <meta
            key="og:description"
            property="og:description"
            content={description}
          />
          <meta
            key="og:site_name"
            property="og:site_name"
            content={SITE_NAME}
          />
          <meta key="og:image" property="og:image" content={image} />
          <meta
            key="og:image:height"
            property="og:image:height"
            content={imageHeight}
          />
          <meta
            key="og:image:width"
            property="og:image:width"
            content={imageWidth}
          />
          <meta key="og:image:alt" property="og:image:alt" content={imageAlt} />
          <meta key="og:type" property="og:type" content="website" />
          <meta key="og:url" property="og:url" content={siteOrigin + asPath} />
          <meta
            key="twitter:card"
            name="twitter:card"
            content="summary_large_image"
          />
          <meta
            key="twitter:site"
            name="twitter:site"
            content="@david_calhoun"
          />
          <meta key="twitter:title" name="twitter:title" content={pageTitle} />
          <meta
            key="twitter:description"
            name="twitter:description"
            content={description}
          />
        </Head>
        <article
          className="prose md:prose-lg lg:prose-2xl dark:prose-light mb-8 lg:mb-16"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <header>
            <h1 itemProp="headline">{title}</h1>
            {type === "article" && (
              <p
                className="text-xl md:text-2xl lg:text-3xl mb-0 italic text-gray-500"
                itemProp="description"
              >
                {description}
              </p>
            )}
            {!!published && (
              <FormattedDate
                className="text-sm md:text-base"
                dateString={published}
              />
            )}
          </header>
          <div itemProp="articleBody">{children}</div>
          {asPath.startsWith("/blog/") && (
            <footer>
              <hr />
              <p className="text-center italic">
                <Link href="/blog">
                  <a>Read more</a>
                </Link>{" "}
                posts by{" "}
                <span
                  itemProp="author"
                  itemScope
                  itemType="http://schema.org/Person"
                >
                  <span itemProp="name">{NAME}</span>
                </span>
                .
              </p>
            </footer>
          )}
        </article>
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
