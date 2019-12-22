import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import TextButton from "../../components/TextButton";
import posts from "../../utils/posts";
import { H2, H4 } from "../../components/Heading";

export default function Writing() {
  return (
    <Layout>
      <SEO
        title="Writing"
        description="Thoughts and explorations of David Calhoun."
      />
      <ul>
        {posts.map((p, i) => (
          <li key={i} className="mb-4 lg:mb-8">
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
}
