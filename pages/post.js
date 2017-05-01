import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'

export default ({
  id,
  title,
  ...other
}) => (
  <Layout title={`${title}`}>
    <BlogPost id={id} {...other} />
  </Layout>
)
