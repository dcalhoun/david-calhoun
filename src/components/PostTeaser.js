'use strict'

import { Link } from 'react-router'
import Markdown from 'react-markdown'
import React from 'react'
import Text from './TextMixin'

const sx = {
  card: {
    maxWidth: '44rem'
  },
  title: {
    fontSize: '2.625rem',
    fontWeight: 'normal',
    marginTop: '1rem'
  }
}

const PostTeaser = React.createClass({
  mixins: [Text],

  render (props) {
    const {path, title, body} = this.props

    return (
      <article className='mb2' style={sx.card}>
        <h2 className='alegreya' style={sx.title}>
          <Link className='btn-link' to={path}>{title}</Link>
        </h2>
        <Markdown
          className='alegreya'
          source={this.truncate(body, 160)} />
      </article>
    )
  }
})

export default PostTeaser
