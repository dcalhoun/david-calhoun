import React from 'react';

export default class ProjectCard extends React.Component {
  render() {
    const {name, description, href} = this.props;

    return (
      <a href={href} className='col-12 md-col-6 mb2 px2'>
        <div className='bg-silver rounded p2'>
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </a>
    );
  }
}
