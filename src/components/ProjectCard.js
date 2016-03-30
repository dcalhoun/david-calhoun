'use strict'

import React from 'react'

const sx = {
  project: {
    flex: '0 0 320px'
  },
  description: {
    fontSize: '1rem'
  }
}

const ProjectCard = React.createClass({
  render (props) {
    const {name, description, href} = this.props

    return (
      <a href={href} className='mb3 px2' style={sx.project}>
        <h3 className='mt0'>{name}</h3>
        <p className='my0' style={sx.description}>{description}</p>
      </a>
    )
  }
})

export default ProjectCard
