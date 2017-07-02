import BlogPostTeaser from './BlogPostTeaser'
import { styled } from 'styletron-react'

const BlogList = styled('main', {
  padding: '0 1rem'
})

export default ({
  background,
  color,
  posts
}) => (
  <BlogList>
    {posts.map(post => (
      <BlogPostTeaser background={background} color={color} key={post.base} {...post} />
    ))}
  </BlogList>
)
