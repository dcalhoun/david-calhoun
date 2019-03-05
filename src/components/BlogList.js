import PropTypes from "prop-types";
import React from "react";
import BlogPostTeaser from "./BlogPostTeaser";
import { styled } from "styletron-react";

const Container = styled("main", {
  padding: "0 1rem"
});

function BlogList(props) {
  return (
    <Container>
      {props.posts.map(post => (
        <BlogPostTeaser key={post.node.id} {...post.node} />
      ))}
    </Container>
  );
}

BlogList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default BlogList;
