import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = React.createClass({
  render() {
    const rsquo = String.fromCharCode(8217);

    return (
      <section className='flex flex-wrap mxn2'>
        <h2 className='col-12 px2'>Featured Projects</h2>
        <ProjectCard
          {...this.props}
          name='Playbook'
          description='A Yeoman generator for prototyping and building experiences.'
          href='http://playbook.centresource.com'/>
        <ProjectCard
          {...this.props}
          name='Alfred Remote Inspector'
          description='Remotely inspect any iOS device by name via Safari’s web inspector.'
          href='https://github.com/dcalhoun/alfred-remote-inspector-workflow'/>
      </section>
    );
  }
});

export default Projects;
