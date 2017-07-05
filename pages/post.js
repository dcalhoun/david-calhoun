import BlogList from '../components/BlogList'
import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'
import { Component } from 'react'
import withDarkMode from '../containers/withDarkMode'

const DarkModeLayout = withDarkMode(Layout)

export default class Post extends Component {
  static async getInitialProps (props) {
    const post = await BlogList.fetch(props.query.slug)
    return { post }
  }

  render () {
    return (
      <DarkModeLayout title={`${this.props.post.title}`}>
        <BlogPost post={this.props.post} />
      </DarkModeLayout>
    )
  }
}
