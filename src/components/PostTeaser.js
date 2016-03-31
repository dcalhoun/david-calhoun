'use strict'

import { Link } from 'react-router'
import Markdown from 'react-markdown'
import React from 'react'
import Text from './TextMixin'

const PostTeaser = React.createClass({
  mixins: [Text],

  render (props) {
    const {path, title, body} = this.props

    return (
      <article className='mb2 pb2'>
        <h2 className='cardo'>
          <Link className='btn-link' to={path}>{title}</Link>
        </h2>
        <Markdown
          className='cardo'
          source={this.truncate(body, 140)} />
      </article>
    )
  }
})

export default PostTeaser
