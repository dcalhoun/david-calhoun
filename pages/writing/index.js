import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import TextButton from "../../components/TextButton";
import posts from "../../scripts/posts";
import { H2, H4 } from "../../components/Heading";

export default () => (
  <Layout>
    <SEO title="Writing" />
    <ul>
      {posts.map((p, i) => (
        <li key={i}>
          <H4>{p.published.replace(/-/g, ".")}</H4>
          <H2>
            <Link href={p.path} passHref>
              <TextButton className="lg:text-4xl">{p.title}</TextButton>
            </Link>
          </H2>
        </li>
      ))}
    </ul>
  </Layout>
);
