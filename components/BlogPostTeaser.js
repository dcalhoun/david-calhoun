import Link from 'next/link'
import TextLink from './TextLink'
import styled from 'styled-components'

const BlogPostTeaser = styled.article`
  margin-bottom: 1rem;
  max-width: 44rem;
`

const PostDate = styled.h6`
  color: #999;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  margin: 0;
`

const PostTitle = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Helvetica, sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 0;

  @media (min-width: 32rem) {
    font-size: 2.625rem;
  }
`

export default ({
  background,
  color,
  date,
  id,
  styles,
  title
}) => (
  <BlogPostTeaser>
    <PostDate>{date}</PostDate>
    <PostTitle>
      <Link href={`/writing/${id}`}>
        <TextLink background={background} color={color} href={`/writing/${id}`}>
          {title}
        </TextLink>
      </Link>
    </PostTitle>
  </BlogPostTeaser>
)
