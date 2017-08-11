import Link from 'next/link'
import TextLink from './TextLink'
import { fonts } from '../utils/style'
import { styled } from 'styletron-react'
import { slug, url } from '../utils/posts'

const BlogPostTeaser = styled('article', {
  marginBottom: '1rem',
  maxWidth: '44rem'
})

const PostDate = styled('h6', {
  color: '#999',
  fontFamily: fonts.base,
  fontSize: '0.75rem',
  fontWeight: '400',
  margin: '0'
})

const PostTitle = styled('h1', {
  fontFamily: fonts.heading,
  fontSize: '1.5rem',
  fontWeight: '400',
  marginTop: 0,

  '@media (min-width: 32rem)': {
    fontSize: '2.625rem'
  }
})

export default props => (
  <BlogPostTeaser>
    <PostDate>{props.date.replace(/-/g, '.')}</PostDate>
    <PostTitle>
      <Link href={`/post?slug=${slug(props)}`} as={url(props)} prefetch>
        <TextLink href={url(props)}>{props.title}</TextLink>
      </Link>
    </PostTitle>
  </BlogPostTeaser>
)
