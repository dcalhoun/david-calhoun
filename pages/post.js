import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'
import withDarkMode from '../containers/withDarkMode'

const DarkModeLayout = withDarkMode(Layout)

export default ({
  id,
  title,
  ...other
}) => (
  <DarkModeLayout title={`${title}`}>
    <BlogPost id={id} {...other} />
  </DarkModeLayout>
)
