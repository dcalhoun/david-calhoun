import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
import posts from '../.posts/summary.json'
import withDarkMode from '../containers/withDarkMode'
import { sortByDate } from '../utils/posts'

const DarkModeLayout = withDarkMode(Layout)

export default props => (
  <DarkModeLayout title='Writing'>
    <BlogList posts={sortByDate(posts)} />
  </DarkModeLayout>
)
