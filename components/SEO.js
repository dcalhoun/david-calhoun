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
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="og:description" content={description} />
    <meta name="og:image:height" content={imageHeight} />
    <meta name="og:image:width" content={imageWidth} />
    <meta name="og:image" content={`${host}${image}`} />
    <meta name="og:title" content={title} />
    <meta name="og:type" content="website" />
    <meta name="og:url" content={url} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:creator" content="site.siteMetadata.author" />
    <meta name="twitter:description" content="metaDescription" />
    <meta name="twitter:title" content="title" />
  </Head>
);
