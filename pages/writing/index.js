import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import TextButton from "../../components/TextButton";
import posts from "../../scripts/posts";

export default () => (
  <Layout>
    <SEO title="Writing | David Calhoun, Software Engineer" />
    <ul>
      {posts.map((p, i) => (
        <li key={i} className="mb-4">
          <div className="text-xs lg:text-lg opacity-50">
            {p.published.replace(/-/g, ".")}
          </div>
          <Link href={p.path} passHref>
            <TextButton className="lg:text-4xl">{p.title}</TextButton>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);
