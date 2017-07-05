import fetch from 'isomorphic-fetch'
import BlogPostTeaser from './BlogPostTeaser'
import { Component } from 'react'
import { styled } from 'styletron-react'

const BlogList = styled('main', {
  padding: '0 1rem'
})

export default class Yep extends Component {
  static async fetch (slug) {
    const url = slug
      ? `http://localhost:3000/api/v1/posts?slug=${slug}`
      : 'http://localhost:3000/api/v1/posts'
    const res = await fetch(url)
    const json = await res.json()
    return json ? json.data : {}
  }

  render () {
    const {
      background,
      color,
      posts
    } = this.props

    return (
      <BlogList>
        {posts.map(post => (
          <BlogPostTeaser background={background} color={color} key={post.title} {...post} />
        ))}
      </BlogList>
    )
  }
}
