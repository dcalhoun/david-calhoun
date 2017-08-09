import ButtonTweet from '../ButtonTweet'
import CodeBlock from '../CodeBlock'
import Heading from '../Heading'
import IssueCTA from '../IssueCTA'
import Markdown from 'react-markdown'
import Paragraph from '../Paragraph'
import React from 'react'
import TextLink from '../TextLink'
import Theme from '../../containers/Theme'
import syntaxStyles from './index.css'
import withTheme from '../../containers/withTheme'
import { styled } from 'styletron-react'

const Post = styled('article', {
  padding: '0 1rem'
})

const PostTitle = styled('h1', props => ({
  color: props.color,
  fontFamily: '"Avenir Next", sans-serif',
  fontSize: '1.5rem',
  fontWeight: '400',
  marginTop: 0,

  '@media (min-width: 32rem)': {
    fontSize: '2.625rem'
  }
}))

const PostDate = styled('span', props => ({
  color: '#999',
  display: 'inline-block',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
  fontSize: '0.75rem',
  fontWeight: '400',
  margin: '0'
}))

const PostBody = styled(Markdown, props => ({
  color: props.color,
  fontFamily: '"Fira Sans", Georgia, serif',
  fontDisplay: 'fallback',
  fontSize: '1.25rem',
  fontWeight: 400,
  lineHeight: 1.66,

  '@media (min-width: 48rem)': {
    fontSize: '1.5rem'
  }
}))

const renderers = () => (
  Object.assign(
    {},
    Markdown.renderers,
    {
      CodeBlock,
      Link: withTheme(TextLink),
      Heading,
      Paragraph
    }
  )
)

export default ({ post }) => (
  <Theme>
    {({ background, color }) => (
      <Post>
        <style dangerouslySetInnerHTML={{ __html: syntaxStyles }} />
        <PostDate color={color}>
          {post.date.replace(/-/g, '.')}
        </PostDate>

        <PostTitle color={color}>{post.title}</PostTitle>
        <PostBody
          color={color}
          renderers={renderers()}
          source={post.bodyContent}
        />

        <ButtonTweet title={post.title} />
        <IssueCTA background={background} color={color} title={post.title} />
      </Post>
    )}
  </Theme>
)
