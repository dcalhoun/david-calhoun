import BlogPostTeaser from './BlogPostTeaser'
import { styled } from 'styletron-react'

const BlogList = styled('main', {
  padding: '0 1rem'
})

export default props => (
  <BlogList>
    {props.posts.map(post => <BlogPostTeaser key={post.title} {...post} />)}
  </BlogList>
)
