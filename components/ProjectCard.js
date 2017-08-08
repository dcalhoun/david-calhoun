import Theme from '../containers/Theme'
import chroma from 'chroma-js'
import { styled } from 'styletron-react'

const Card = styled('a', props => ({
  borderBottom: `2px solid ${chroma(props.linkColor).alpha(0.8).css()}`,
  boxShadow: `inset 0 -9px 0 ${chroma(props.linkColor).alpha(0.15).css()}`,
  color: props.color,
  flex: '0 0 100%',
  fontFamily: '"Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
  padding: '1rem',
  position: 'relative',
  textDecoration: 'none',
  transitionDuration: '160ms',
  transitionProperty: 'border-color, box-shadow',
  transitionTimingFunction: 'ease',
  width: '18rem',

  '@media (min-width: 54rem)': {
    ':hover': {
      boxShadow: `inset 0 -1.2em 0 ${chroma(props.linkColor).alpha(0.25).css()}`
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

const Description = styled('p', props => ({
  color: props.color,
  fontSize: '0.875rem',
  fontStyle: 'italic',
  lineHeight: '1.5em',
  marginBottom: 0,
  marginTop: 0,
  opacity: '0.6',

  '@media (min-width: 40rem)': {
    fontSize: '1.125rem'
  }
}))

export default props => (
  <Theme>
    {({ color, linkColor }) => (
      <Card
        color={color}
        href={props.href}
        index={props.index}
        linkColor={linkColor}
      >
        <Title>{props.name}</Title>
        <Description color={color} index={props.index}>
          {props.description}
        </Description>
      </Card>
    )}
  </Theme>
)
