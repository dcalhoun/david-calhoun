import chroma from 'chroma-js'
import { styled } from 'styletron-react'

const TextLink = styled('a', props => ({
  backgroundPosition: '0 1.025em',
  backgroundRepeat: 'repeat-x',
  backgroundSize: '2px 2px',
  borderBottom: `2px solid ${chroma(props.background).darken(0.5)}`,
  boxShadow: `inset 0 -9px 0 ${chroma(props.background).darken(0.3).alpha(0.5)}`,
  color: props.color,
  textDecoration: 'none',
  transitionDuration: '160ms',
  transitionProperty: 'border-color, box-shadow',
  transitionTimingFunction: 'ease',

  ':hover': {
    boxShadow: `inset 0 -1.2em 0 ${chroma(props.background).darken(0.5).alpha(0.5)}`
  }
}))

export default ({
  background,
  color,
  children,
  href,
  ...other
}) => (
  <TextLink background={background} color={color} href={href} {...other}>
    {children}
  </TextLink>
)
