import ButtonTweet from "../ButtonTweet";
import CodeBlock from "../CodeBlock";
import Heading from "../Heading";
import IssueCTA from "../IssueCTA";
import Markdown from "react-markdown";
import Paragraph from "../Paragraph";
import React from "react";
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
      <PostDate $color={context.color}>{props.frontmatter.date}</PostDate>

      <PostTitle $color={context.color}>{props.frontmatter.title}</PostTitle>
      <PostBody
        $color={context.color}
        // renderers={renderers()}
        source={props.html}
      />

      <ButtonTweet title={props.frontmatter.title} />
      <IssueCTA
        $background={context.background}
        $color={context.color}
        title={props.frontmatter.title}
      />
    </Post>
  );
}

BlogPost.propTypes = {
  frontmatter: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }),
  html: PropTypes.string.isRequired
};

export default BlogPost;
