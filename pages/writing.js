import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
import withDarkMode from '../containers/withDarkMode'

const DarkModeLayout = withDarkMode(Layout)

// TODO: Read posts from fs.
export default () => {
  return (
    <DarkModeLayout title='Writing'>
      <BlogList
        posts={[
          {
            date: '2013.12.16',
            id: 'developer-tools-homebrew',
            title: 'Developer Tools: Homebrew'
          }, {
            date: '2013.10.30',
            id: 'migration-to-jekyll-my-journey-to-understanding-yeoman',
            title: 'Migration to Jekyll: My Journey to Understanding Yeoman'
          }
        ]}
      />
    </DarkModeLayout>
  )
}
