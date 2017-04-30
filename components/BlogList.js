import BlogPostTeaser from './BlogPostTeaser'

export default ({ posts }) => (
  <main>
    {posts.map(post => (
      <BlogPostTeaser {...post} />
    ))}
  </main>
)
