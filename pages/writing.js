import BlogList from '../components/BlogList'
import Layout from '../components/Layout'
// import posts from '../.posts/summary.json'
import withDarkMode from '../containers/withDarkMode'
import { Component } from 'react'
import { sortByDate } from '../utils/posts'

const DarkModeLayout = withDarkMode(Layout)

export default class Writing extends Component {
  static async getInitialProps () {
    const posts = await BlogList.fetch()
    return { posts }
  }

  render () {
    return (
      <DarkModeLayout title='Writing'>
        <BlogList posts={sortByDate(this.props.posts)} />
      </DarkModeLayout>
    )
  }
}
