'use strict'

import { Link } from 'react-router'
import React from 'react'
import Text from './TextMixin'

const sx = {
  card: {
    maxWidth: '44rem'
  },
  date: {
    color: '#999'
  },
  title: {
    fontSize: '2.625rem',
    fontWeight: 'normal',
    marginTop: '0rem'
  }
}

const PostTeaser = React.createClass({
  mixins: [Text],

  render (props) {
    const {path, created, title} = this.props

    return (
      <article className='mb2' style={sx.card}>
        <span className='h6' style={sx.date}>{created.replace(/-/g, '.')}</span>
        <h2 className='alegreya' style={sx.title}>
          <Link className='btn-link' to={path}>{title}</Link>
        </h2>
      </article>
    )
  }
})

export default PostTeaser
