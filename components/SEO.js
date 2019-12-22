import React from "react";
import Head from "next/head";
// import defaultOpenGraphImage from "../images/david.jpg";

export default ({
  description,
  host,
  image,
  imageHeight,
  imageWidth,
  keywords,
  meta,
  title,
  url
}) => (
  <Head>
    <title key="title">{title}</title>
    <meta key="description" name="description" content={description} />
    <meta key="og:description" name="og:description" content={description} />
    <meta key="og:image:height" name="og:image:height" content={imageHeight} />
    <meta key="og:image:width" name="og:image:width" content={imageWidth} />
    <meta key="og:image" name="og:image" content={`${host}${image}`} />
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
