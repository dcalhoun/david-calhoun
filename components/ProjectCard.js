import PropTypes from 'prop-types'
import chroma from 'chroma-js'
import { styled } from 'styletron-react'

function getColor (color, index) {
  return chroma(color).darken((100 - (index * 15)) / 100).hex()
}

const Card = styled('a', props => ({
  background: getColor(props.background, props.index),
  color: props.color,
  fontFamily: '"Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
  flex: '0 0 100%',
  padding: '1rem',
  textDecoration: 'none',
  width: '18rem',

  '@media (min-width: 54rem)': {
    backgroundImage: `linear-gradient(
      to right,
      ${getColor(props.background, props.index)},
      ${props.background}
    )`,
    willChange: 'transform',
    transition: 'transform 300ms ease-in-out',

    ':hover': {
      transform: 'translateX(-1rem)'
    }
  }
}))

const Title = styled('h3', {
  fontFamily: 'Monaco, monospace',
  fontSize: '1rem',
  fontWeight: 'normal',
  marginBottom: '0.5em',
  marginTop: 0,

  '@media (min-width: 40rem)': {
    fontSize: '1.25rem'
  }
})

const Description = styled('p', {
  fontSize: '0.875rem',
  fontStyle: 'italic',
  lineHeight: '1.5em',
  marginBottom: 0,
  marginTop: 0,
  opacity: '0.5',

  '@media (min-width: 40rem)': {
    fontSize: '1.125rem'
  }
})

const ProjectCard = ({
  background,
  color,
  description,
  href,
  index,
  name
}) => (
  <Card
    background={background}
    color={color}
    href={href}
    index={index}
  >
    <Title>{name}</Title>
    <Description>{description}</Description>
  </Card>
)

ProjectCard.propTypes = {
  background: PropTypes.string,
  description: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

ProjectCard.defaultProps = {
  background: 'transparent'
}

export default ProjectCard
