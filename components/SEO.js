import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const SITE_TITLE = "David Calhoun, Software Engineer";
export const SITE_DESCRIPTION =
  "David Calhoun is a software engineer with a passion for good UX design & scalable architecture.";
const HOST = "davidcalhoun.me";

function generateTitle(pageTitle) {
  return pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
}

export default function SEO({
  description,
  image,
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
        name="og:description"
        content={description || SITE_DESCRIPTION}
      />
      <meta
        key="og:image:height"
        name="og:image:height"
        content={imageHeight}
      />
      <meta key="og:image:width" name="og:image:width" content={imageWidth} />
      <meta
        key="og:image"
        name="og:image"
        content={image || `//${HOST}/david.jpg`}
      />
      <meta key="og:title" name="og:title" content={generateTitle(title)} />
      <meta key="og:type" name="og:type" content="website" />
      <meta key="og:url" name="og:url" content={`//${HOST}${router.route}`} />
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
