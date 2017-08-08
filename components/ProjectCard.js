import Theme from '../containers/Theme'
import chroma from 'chroma-js'
import { styled } from 'styletron-react'

function getColor (color, index) {
  const background = chroma(color).darken((100 - (index * 15)) / 100)

  return {
    background: background.css(),
    color: chroma.contrast(background, '#f2f2f2') >= 4.5 ? '#f2f2f2' : '#42413f'
  }
}

const Card = styled('a', props => {
  const { background, color } = getColor(props.background, props.index)

  return {
    background: background,
    color: color,
    fontFamily: '"Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
    flex: '0 0 100%',
    padding: '1rem',
    textDecoration: 'none',
    width: '18rem',

    '@media (min-width: 54rem)': {
      backgroundImage: `linear-gradient(
        to right,
        ${background},
        ${props.background}
      )`,
      willChange: 'transform',
      transition: 'transform 300ms ease-in-out',

      ':hover': {
        transform: 'translateX(-1rem)'
      }
    }
  }
})

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

const Description = styled('p', props => {
  const { color } = getColor(props.background, props.index)

  return {
    color: color,
    fontSize: '0.875rem',
    fontStyle: 'italic',
    lineHeight: '1.5em',
    marginBottom: 0,
    marginTop: 0,
    opacity: '0.6',

    '@media (min-width: 40rem)': {
      fontSize: '1.125rem'
    }
  }
})

export default props => (
  <Theme>
    {({ background }) => (
      <Card
        background={background}
        href={props.href}
        index={props.index}
      >
        <Title>{props.name}</Title>
        <Description background={background} index={props.index}>
          {props.description}
        </Description>
      </Card>
    )}
  </Theme>
)
