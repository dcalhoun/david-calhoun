import ButtonTweet from './ButtonTweet'
import CodeBlock from './CodeBlock'
import IssueCTA from './IssueCTA'
import Markdown from 'react-markdown'
import styled from 'styled-components'

const PostTitle = styled.h1`
  font-family: 'Avenir Next', sans-serif;
  font-size: 1.5rem;
  font-weight: normal;
  margin-top: 0rem;

  @media (min-width: 48rem) {
    font-size: 2.625rem;
  }
`

const PostDate = styled.span`
  color: #999;
  font-size: 0.75rem;
  display: inline-block;
`

const PostBody = styled(Markdown)`
  font-family: 'Avenir Next', sans-serif;
  font-size: 1.125rem;

  @media (min-width: 48rem) {
    font-size: 1.5rem;
  }
`

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
