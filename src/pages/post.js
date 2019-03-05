import BlogPost from "../components/BlogPost";
import Layout from "../components/Layout";
import React from "react";
import SEO from "../components/SEO";
import { useStaticQuery, graphql } from "gatsby";

function Post(props) {
  const { markdownRemark } = useStaticQuery(
    graphql`
      query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
          id
          html
          frontmatter {
            title
            date(formatString: "YYYY.DD.MM")
            path
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO title={`${markdownRemark.frontmatter.title}`} />
      <BlogPost post={markdownRemark.html} />
    </Layout>
  );
}

export default Post;
