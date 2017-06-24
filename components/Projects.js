import ProjectCard from './ProjectCard'
import styled from 'styled-components'

const Projects = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const Title = styled.h3`
  color: #fff;
  font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 0.75rem;
  font-weight: 100;
  letter-spacing: 0.2em;
  margin: 0 0 0.5rem;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`

export default (props) => (
  <Projects>
    <Title>Open Source</Title>
    <ProjectCard
      backgroundColor={props.backgroundColor}
      description='Remotely inspect any iOS device by name via Safari’s web inspector.'
      href='https://github.com/dcalhoun/alfred-remote-inspector-workflow'
      index={0}
      name='Alfred Remote Inspector'
    />
    <ProjectCard
      backgroundColor={props.backgroundColor}
      description='Immutable, CSS margin utilities.'
      href='http://github.com/dcalhoun/css-utils-margin'
      index={1}
      name='css-utils-margin'
    />
    <ProjectCard
      backgroundColor={props.backgroundColor}
      description='Immutable, CSS padding utilities.'
      href='http://github.com/dcalhoun/css-utils-padding'
      index={2}
      name='css-utils-padding'
    />
    <ProjectCard
      backgroundColor={props.backgroundColor}
      description='CLI to convert AMD CoffeeScript to ES6 Standard JavaScript.'
      href='https://github.com/dcalhoun/es6-migrate'
      index={3}
      name='es6-migrate'
    />
    <ProjectCard
      backgroundColor={props.backgroundColor}
      description='A Yeoman generator for prototyping and building experiences.'
      href='http://playbook.centresource.com'
      index={4}
      name='Playbook'
    />
    <ProjectCard
      backgroundColor={props.backgroundColor}
      description='Selectively remove PostCSS warnings from your logs.'
      href='http://github.com/dcalhoun/postcss-warn-cleaner'
      index={5}
      name='postcss-warn-cleaner'
    />
  </Projects>
)
