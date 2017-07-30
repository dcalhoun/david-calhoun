import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'
import withDarkMode from '../containers/withDarkMode'

const DarkModeLayout = withDarkMode(Layout)

export default props => {
  const post = require(`../.posts/posts/${props.url.query.slug}.json`)

  return (
    <DarkModeLayout title={`${post.title}`}>
      <BlogPost post={post} />
    </DarkModeLayout>
  )
}
