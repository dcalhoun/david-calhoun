import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'

// TODO: Read posts from fs.
export default (props = {}) => (
  <Layout title={`${props.title}`}>
    <BlogPost {...props} />
  </Layout>
)
