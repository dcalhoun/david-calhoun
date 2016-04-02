import React from 'react'

const Issue = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render () {
    const href = `https://github.com/dcalhoun/dcalhoun.github.io/issues/new?title=${this.props.title}`

    return (
      <p>
        Questions, Comments, Suggestions?
        {' '}
        <a className='inline-block btn-link' href={href} target='_blank'>
          Open an Issue
        </a>.
      </p>
    )
  }
})

export default Issue
