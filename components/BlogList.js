import BlogPostTeaser from './BlogPostTeaser'

export default ({ posts }) => (
  <main>
    {posts.map(post => (
      <BlogPostTeaser key={post.id} {...post} />
    ))}
  </main>
)
