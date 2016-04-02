'use strict'

import ProjectCard from './ProjectCard'
import React from 'react'

const Projects = React.createClass({
  render () {
    return (
      <section className='flex flex-wrap mxn2'>
        <h2 className='h6 caps my2 px2 col-12'>Open Source</h2>
        <ProjectCard
          { ...props }
          name='Playbook'
          description='A Yeoman generator for prototyping and building experiences.'
          href='http://playbook.centresource.com'/>
        <ProjectCard
          { ...props }
          name='Alfred Remote Inspector'
          description='Remotely inspect any iOS device by name via Safari’s web inspector.'
          href='https://github.com/dcalhoun/alfred-remote-inspector-workflow'/>
      </section>
    )
  }
})

export default Projects
