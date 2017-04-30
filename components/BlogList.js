import BlogPost from './BlogPost'

export default ({ posts }) => (
  <main>
    {posts.map(post => (
      <BlogPost {...post} />
    ))}
  </main>
)
