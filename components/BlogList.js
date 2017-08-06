import BlogPostTeaser from './BlogPostTeaser'
import { styled } from 'styletron-react'

const BlogList = styled('main', {
  padding: '0 1rem'
})

export default props => (
  <BlogList>
    {props.posts.map(post => (
      <BlogPostTeaser background={props.background} color={props.color} key={post.title} {...post} />
    ))}
  </BlogList>
)
