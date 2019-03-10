import ButtonTweet from "../ButtonTweet";
import CodeBlock from "../CodeBlock";
// import Heading from "../Heading";
import IssueCTA from "../IssueCTA";
// import Markdown from "react-markdown";
// import Paragraph from "../Paragraph";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import TextLink from "../TextLink";
import syntaxDark from "./dark.css";
import syntaxLight from "./light.css";
import { ThemeContext } from "../../components/Theme";
import { fonts } from "../../utils/style";
import { styled } from "styletron-react";

const Post = styled("article", {
  padding: "0 1rem"
});

const PostTitle = styled("h1", props => ({
  color: props.$color,
  fontFamily: fonts.heading,
  fontSize: "1.5rem",
  fontWeight: 400,
  marginTop: 0,

  "@media (min-width: 32rem)": {
    fontSize: "2.625rem"
  }
}));

const PostDate = styled("span", () => ({
  color: "#999",
  display: "inline-block",
  fontFamily: fonts.base,
  fontSize: "0.75rem",
  fontWeight: 400,
  margin: "0"
}));

const PostBody = styled("div", props => ({
  color: props.$color,
  fontFamily: fonts.body,
  fontDisplay: "fallback",
  fontSize: "1.125rem",
  fontWeight: 400,
  lineHeight: 1.66,

  "@media (min-width: 48rem)": {
    fontSize: "1.5rem"
  }
}));

// const renderers = () =>
//   Object.assign({}, Markdown.renderers, {
//     CodeBlock,
//     Link: TextLink,
//     Heading,
//     Paragraph
//   });

function BlogPost(props) {
  const context = useContext(ThemeContext);
  return (
    <Post>
      <style
        dangerouslySetInnerHTML={{
          __html: context.enabled ? syntaxDark : syntaxLight
        }}
      />
      <PostDate $color={context.color}>{props.post.frontmatter.date}</PostDate>

      <PostTitle $color={context.color}>
        {props.post.frontmatter.title}
      </PostTitle>
      <PostBody
        $color={context.color}
        source={props.post.html}
        dangerouslySetInnerHTML={{ __html: props.post.html }}
      />

      <ButtonTweet title={props.post.frontmatter.title} />
      <IssueCTA
        $background={context.background}
        $color={context.color}
        title={props.post.frontmatter.title}
      />
    </Post>
  );
}

BlogPost.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }),
    html: PropTypes.string.isRequired
  }).isRequired
};

export default BlogPost;
