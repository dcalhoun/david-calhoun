import ButtonTweet from "../ButtonTweet";
import CodeBlock from "../CodeBlock";
import Heading from "../Heading";
import IssueCTA from "../IssueCTA";
import Paragraph from "../Paragraph";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import TextLink from "../TextLink";
import rehypeReact from "rehype-react";
import syntaxDark from "./dark.css";
import syntaxLight from "./light.css";
import withLevel from "../withLevel";
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

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    // code: CodeBlock,
    a: TextLink,
    h1: withLevel(1)(Heading),
    h2: withLevel(2)(Heading),
    h3: withLevel(3)(Heading),
    h4: withLevel(4)(Heading),
    h5: withLevel(5)(Heading),
    h6: withLevel(6)(Heading),
    p: Paragraph
  }
}).Compiler;

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
      <PostBody $color={context.color}>
        {renderAst(props.post.htmlAst)}
      </PostBody>

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
    htmlAst: PropTypes.object.isRequired
  }).isRequired
};

export default BlogPost;
