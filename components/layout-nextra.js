import Head from "next/head";
import Link from "next/link";
import PostList from "./post-list";
import { NAME, SITE_NAME, DESCRIPTION } from "../lib/constants";
import { useRouter } from "next/router";
import FormattedDate from "./formatted-date";
import { sortByPostPublishDateString } from "../lib/post";
import MDXTheme from "../components/mdx-theme";

const siteOrigin =
  process.env.NODE_ENV === "production"
    ? "https://davidcalhoun.me"
    : "http://localhost:3000";

export default function LayoutNextra(props) {
  const { route } = useRouter();
  const context = globalThis.__nextra_pageContext__[route];
  if (!context) throw new Error(`No content found for ${route}.`);

  const {
    pageOpts: {
      frontMatter: {
        date,
        description = `${NAME} is a ${DESCRIPTION}`,
        image = siteOrigin + "/david.jpg",
        imageAlt = `Portrait of ${NAME}.`,
        imageHeight = 630,
        imageWidth = 1200,
        title,
        type,
      },
      pageMap,
    },
    Content,
  } = context;

  const pageTitle = title ? `${title} - ${NAME}` : SITE_NAME;
  const { asPath } = useRouter();
  const isBlogPost = asPath.startsWith("/blog/");

  return (
    <div className="motion-safe:animate-fade-up">
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
        <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
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
        <meta key="twitter:site" name="twitter:site" content="@david_calhoun" />
        <meta key="twitter:title" name="twitter:title" content={pageTitle} />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={description}
        />
      </Head>

      {isBlogPost ? (
        <article
          className="prose md:prose-lg lg:prose-2xl dark:prose-light mb-8 lg:mb-16"
          itemScope
          itemType="http://schema.org/BlogPosting"
        >
          <header>
            <FormattedDate className="text-sm md:text-base" dateString={date} />
            <h1 itemProp="headline">{title}</h1>
            <p
              className="text-xl md:text-2xl lg:text-3xl mb-0 italic text-gray-500"
              itemProp="description"
            >
              {description}
            </p>
          </header>

          <div itemProp="articleBody">
            <MDXTheme>
              <Content {...props} />
            </MDXTheme>
          </div>

          <footer>
            <hr />
            <p className="italic">
              Follow me on{" "}
              <a href="https://bsky.app/profile/davidcalhoun.me">Bluesky</a>,{" "}
              <a href="https://x.com/david_calhoun">X</a>, or via{" "}
              <a href="/feed.xml">RSS</a> to get notified when my next blog post
              is published.{" "}
            </p>
            <p className="italic">
              Questions, comments, suggestions?{" "}
              <a
                href={`https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${title}`}
              >
                Share them in a GitHub issue
              </a>
              .{" "}
            </p>
          </footer>
        </article>
      ) : (
        <>
          <div className="prose md:prose-lg lg:prose-2xl dark:prose-light mb-8 lg:mb-16">
            {!!title && <h1>{title}</h1>}
            <Content {...props} />
          </div>
          {type === "posts" && (
            <PostList
              posts={pageMap[0]?.children
                .filter(({ kind }) => kind !== "Meta")
                .map(({ route, frontMatter }) => ({ route, ...frontMatter }))
                .sort(sortByPostPublishDateString)}
            />
          )}
        </>
      )}
    </div>
  );
}
