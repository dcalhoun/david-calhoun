import Analytics from '../containers/Analytics'
import BlogList from '../components/BlogList'
import DarkMode from '../containers/DarkMode'
import Layout from '../components/Layout'
import posts from '../.content/summary.json'
import { sortByDate } from '../utils/posts'

export default props => (
  <Analytics>
    <DarkMode>
      <Layout title='Writing'>
        <BlogList posts={sortByDate(posts)} />
      </Layout>
    </DarkMode>
  </Analytics>
)
