import BlogPostTeaser from './BlogPostTeaser'

export default ({
  background,
  color,
  posts
}) => (
  <main>
    {posts.map(post => (
      <BlogPostTeaser background={background} color={color} key={post.id} {...post} />
    ))}
  </main>
)
