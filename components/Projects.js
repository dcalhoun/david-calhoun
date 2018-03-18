import ProjectCard from './ProjectCard'
import Theme from '../containers/Theme'
import chroma from 'chroma-js'
import { fonts } from '../utils/style'
import { styled } from 'styletron-react'

const Projects = styled('section', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',

  '@media (min-width: 54rem)': {
    padding: '0 1rem'
  }
})

const Title = styled('h3', props => ({
  color: chroma(props.color).alpha(0.8).css(),
  display: 'flex',
  flexWrap: 'wrap',
  fontFamily: fonts.heading,
  fontSize: '0.75rem',
  fontWeight: 600,
  justifyContent: 'center',
  letterSpacing: '0.2em',
  margin: '0 0 0.5rem',
  textAlign: 'center',
  textTransform: 'uppercase',

  '::after': {
    borderBottom: `0.0625rem solid ${props.color}`,
    content: '""',
    display: 'block',
    marginTop: '0.5rem',
    width: '50%'
  }
}))

export default props => (
  <Theme>
    {({ color }) => (
      <Projects>
        <Title color={color}>Open Source</Title>
        <ProjectCard
          description='A Yeoman generator for prototyping and building experiences.'
          href='http://playbook.centresource.com'
          index={4}
          name='Playbook'
        />
        <ProjectCard
          description='Configure Clubhouse to respond to GitHub events by specific users.'
          href='https://github.com/dcalhoun/github-to-clubhouse'
          index={0}
          name='github-to-clubhouse'
        />
        <ProjectCard
          description='CLI to convert AMD CoffeeScript to ES6 Standard JavaScript.'
          href='https://github.com/dcalhoun/es6-migrate'
          index={3}
          name='es6-migrate'
        />
        <ProjectCard
          description='Selectively remove PostCSS warnings from your logs.'
          href='https://github.com/dcalhoun/postcss-warn-cleaner'
          index={5}
          name='postcss-warn-cleaner'
        />
        <ProjectCard
          description='Immutable, CSS margin utilities.'
          href='https://github.com/dcalhoun/css-utils-margin'
          index={1}
          name='css-utils-margin'
        />
        <ProjectCard
          description='Immutable, CSS padding utilities.'
          href='https://github.com/dcalhoun/css-utils-padding'
          index={2}
          name='css-utils-padding'
        />
      </Projects>
    )}
  </Theme>
)
