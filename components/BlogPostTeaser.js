import Link from 'next/link'
import TextLink from './TextLink'
import { styled } from 'styletron-react'

const BlogPostTeaser = styled('article', {
  marginBottom: '1rem',
  maxWidth: '44rem'
})

const PostDate = styled('h6', {
  color: '#999',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
  fontSize: '0.75rem',
  fontWeight: '400',
  margin: '0'
})

const PostTitle = styled('h1', {
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
  fontSize: '1.5rem',
  fontWeight: '400',
  marginTop: '0',

  '@media (min-width: 32rem)': {
    fontSize: '2.625rem'
  }
})

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
