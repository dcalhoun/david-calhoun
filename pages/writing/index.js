import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import TextLink from "../../components/TextLink";
import posts from "../../scripts/posts";

export default () => (
  <Layout>
    <ul>
      {posts.map((p, i) => (
        <li key={i}>
          <Link href={p.path} passHref>
            <TextLink>{p.title}</TextLink>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
