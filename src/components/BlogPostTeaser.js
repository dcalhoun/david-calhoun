import PropTypes from "prop-types";
import React from "react";
import TextLink from "./TextLink";
import { fonts } from "../utils/style";
import { slug, url } from "../utils/posts";
import { styled } from "styletron-react";

function BlogPostTeaser(props) {
  return (
    <Container>
      <PostDate>{props.frontmatter.date}</PostDate>
      <PostTitle>
        <TextLink to={props.frontmatter.path}>
          {props.frontmatter.title}
        </TextLink>
      </PostTitle>
    </Container>
  );
}

BlogPostTeaser.propTypes = {
  frontmatter: PropTypes.shape({
    date: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  })
};

export default BlogPostTeaser;

const Container = styled("article", {
  marginBottom: "1rem",
  maxWidth: "44rem"
});

const PostDate = styled("h6", {
  color: "#999",
  fontFamily: fonts.base,
  fontSize: "0.75rem",
  fontWeight: "400",
  margin: "0"
});

const PostTitle = styled("h1", {
  fontFamily: fonts.heading,
  fontSize: "1.5rem",
  fontWeight: "400",
  marginTop: 0,

  "@media (min-width: 32rem)": {
    fontSize: "2.625rem"
  }
});
