import ButtonTweet from '../ButtonTweet'
import CodeBlock from '../CodeBlock'
import Heading from '../Heading'
import IssueCTA from '../IssueCTA'
import Markdown from 'react-markdown'
import React from 'react'
import TextLink from '../TextLink'
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
  fontFamily: 'Alegreya, Georgia, serif',
  fontDisplay: 'fallback',
  fontSize: '1.125rem',
  fontWeight: 300,
  lineHeight: 1.5,

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
      Heading
    }
  )
)

export default ({
  post,
  ...props
}) => (
  <Post>
    <style dangerouslySetInnerHTML={{ __html: syntaxStyles }} />
    <PostDate color={props.color}>
      {post.date.replace(/-/g, '.')}
    </PostDate>

    <PostTitle color={props.color}>{post.title}</PostTitle>
    <PostBody
      color={props.color}
      renderers={renderers()}
      source={post.bodyContent}
    />

    <ButtonTweet title={post.title} />
    <IssueCTA background={props.background} color={props.color} title={post.title} />
  </Post>
)
