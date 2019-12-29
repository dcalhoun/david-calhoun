import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_TITLE = "David Calhoun, Software Engineer";
export const SITE_DESCRIPTION =
  "David Calhoun is a software engineer with a passion for good UX design & scalable architecture.";
const ORIGIN =
  process.env.NODE_ENV === "production"
    ? "https://davidcalhoun.me"
    : "http://localhost:3000";

function generateTitle(pageTitle) {
  return pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
}

export default function SEO({
  description,
  image,
  imageAlt,
  imageHeight,
  imageWidth,
  title
}) {
  const router = useRouter();

  return (
    <Head>
      <title key="title">{generateTitle(title)}</title>
      <meta
        key="description"
        name="description"
        content={description || SITE_DESCRIPTION}
      />
      <meta
        key="og:description"
        property="og:description"
        content={description || SITE_DESCRIPTION}
      />
      <meta
        key="og:image:height"
        property="og:image:height"
        content={imageHeight || 630}
      />
      <meta
        key="og:image:width"
        property="og:image:width"
        content={imageWidth || 1200}
      />
      <meta
        key="og:image:alt"
        property="og:image:width"
        content={imageAlt || "David Calhoun"}
      />
      <meta
        key="og:image"
        property="og:image"
        content={image || `${ORIGIN}/david.jpg`}
      />
      <meta key="og:title" property="og:title" content={generateTitle(title)} />
      <meta key="og:type" property="og:type" content="website" />
      <meta
        key="og:url"
        property="og:url"
        content={`${ORIGIN}${router.route}`}
      />
      <meta key="twitter:card" name="twitter:card" content="summary" />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content="@david_calhoun"
      />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={description || SITE_DESCRIPTION}
      />
      <meta
        key="twitter:title"
        name="twitter:title"
        content={generateTitle(title)}
      />
    </Head>
  );
}
