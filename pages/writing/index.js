import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import posts from "../../scripts/posts";

export default () => (
  <Layout>
    <ul>
      {posts.map((p, i) => (
        <li key={i}>
          <Link href={p.path}>
            <a>{p.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
