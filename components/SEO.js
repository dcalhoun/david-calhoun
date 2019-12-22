import React from "react";
import Head from "next/head";
// import defaultOpenGraphImage from "../images/david.jpg";

const SITE_TITLE = "David Calhoun, Software Engineer";
const HOST = "davidcalhoun.me";

function generateTitle(pageTitle) {
  return pageTitle ? `${pageTitle} | ${SITE_TITLE}` : SITE_TITLE;
}

export default ({
  description,
  image,
  imageHeight,
  imageWidth,
  title,
  url
}) => (
  <Head>
    <title key="title">{generateTitle(title)}</title>
    <meta key="description" name="description" content={description} />
    <meta key="og:description" name="og:description" content={description} />
    <meta key="og:image:height" name="og:image:height" content={imageHeight} />
    <meta key="og:image:width" name="og:image:width" content={imageWidth} />
    <meta key="og:image" name="og:image" content={`//${HOST}${image}`} />
    <meta key="og:title" name="og:title" content={title} />
    <meta key="og:type" name="og:type" content="website" />
    <meta key="og:url" name="og:url" content={url} />
    <meta key="twitter:card" name="twitter:card" content="summary" />
    <meta
      key="twitter:creator"
      name="twitter:creator"
      content="site.siteMetadata.author"
    />
    <meta
      key="twitter:description"
      name="twitter:description"
      content="metaDescription"
    />
    <meta key="twitter:title" name="twitter:title" content="title" />
  </Head>
);
