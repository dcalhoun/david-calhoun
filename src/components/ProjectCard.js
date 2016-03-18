import React from 'react';

const sx = {
  project: {
    fontSize: '1rem'
  }
}

const ProjectCard = React.createClass({
  render() {
    const {name, description, href} = this.props;

    return (
      <a href={href} className='col-12 md-col-6 mb3 px2'>
        <h3>{name}</h3>
        <p style={sx.project}>{description}</p>
      </a>
    );
  }
});

export default ProjectCard;
