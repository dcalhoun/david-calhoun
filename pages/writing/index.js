import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import TextButton from "../../components/TextButton";
import posts from "../../scripts/posts";

export default () => (
  <Layout>
    <ul>
      {posts.map((p, i) => (
        <li key={i} className="mb-4">
          <div className="text-xs text-gray-600">
            {p.published.replace(/-/g, ".")}
          </div>
          <Link href={p.path} passHref>
            <TextButton>{p.title}</TextButton>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
