import BlogList from "../components/BlogList";
import Layout from "../components/Layout";
import PropTypes from "prop-types";
import React from "react";
import SEO from "../components/SEO";
import { useStaticQuery, graphql } from "gatsby";

function Writing(props) {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                date(formatString: "YYYY.MM.DD")
                path
                title
              }
              id
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <SEO
        description="A collection of David’s thoughts and experiences."
        title="Writing"
      />
      <BlogList posts={allMarkdownRemark.edges} />
    </Layout>
  );
}

Writing.propTypes = {
  allMarkdownRemark: PropTypes.shape({
    edges: PropTypes.array.isRequired
  })
};

export default Writing;
