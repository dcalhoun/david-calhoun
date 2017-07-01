import ButtonTweet from './ButtonTweet'
import CodeBlock from './CodeBlock'
import IssueCTA from './IssueCTA'
import Markdown from 'react-markdown'
import { styled } from 'styletron-react'

const PostTitle = styled('h1', {
  fontFamily: '"Avenir Next", sans-serif',
  fontSize: '1.5rem',
  fontWeight: 'normal',
  marginTop: '0rem',

  '@media (min-width: 48rem)': {
    fontSize: '2.625rem'
  }
})

const PostDate = styled('span', {
  color: '#999',
  display: 'inline-block',
  fontSize: '0.75rem'
})

const PostBody = styled(Markdown, {
  fontFamily: '"Avenir Next", sans-serif',
  fontSize: '1.125rem',

  '@media (min-width: 48rem)': {
    fontSize: '1.5rem'
  }
})

export default ({
  date,
  body,
  styles,
  title
}) => (
  <article>
    <PostDate>
      {date.replace(/-/g, '.')}
    </PostDate>

    <PostTitle>{title}</PostTitle>
    <PostBody
      renderers={Object.assign({}, Markdown.renderers, { CodeBlock: CodeBlock })}
      source={body}
    />

    <ButtonTweet title={title} />
    <IssueCTA title={title} />
  </article>
)
