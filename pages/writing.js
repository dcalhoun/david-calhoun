import BlogList from '../components/BlogList'
import Layout from '../components/Layout'

// TODO: Read posts from fs.
export default () => (
  <Layout title='Writing'>
    <BlogList posts={[{
      date: '2013.12.16',
      path: '/developer-tools-homebrew',
      title: 'Developer Tools: Homebrew'
    }, {
      date: '2013.10.30',
      path: '/migration-to-jekyll-my-journey-to-understanding-yeoman',
      title: 'Migration to Jekyll: My Journey to Understanding Yeoman'
    }]} />
  </Layout>
)
