import React from "react";
import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import TextButton from "../../components/TextButton";
import posts from "../../utils/posts";
import { H2, H4 } from "../../components/Heading";
import FormattedDate from "../../components/FormattedDate";

interface Post {
  description: string;
  path: string;
  published: string;
  title: string;
}

export default function Writing() {
  return (
    <Layout>
      <SEO
        title="Writing"
        description="Thoughts and explorations of David Calhoun."
      />
      <ul>
        {posts.map((postData: Post, index: number) => (
          <li key={index}>
            <H2>
              <Link href={postData.path} passHref>
                <TextButton className="lg:text-4xl">
                  {postData.title}
                </TextButton>
              </Link>
            </H2>
            <H4>
              <FormattedDate dateString={postData.published} />
            </H4>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
