import React from 'react';

export default class ProjectCard extends React.Component {
  render() {
    const {name, description, href} = this.props;

    return (
      <a href={href} className="block bg-silver rounded mb2 p2">
        <h4>{name}</h4>
        <p>{description}</p>
      </a>
    );
  }
}
