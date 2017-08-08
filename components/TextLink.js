import Theme from '../containers/Theme'
import chroma from 'chroma-js'
import { styled } from 'styletron-react'

const TextLink = styled('a', props => ({
  backgroundPosition: '0 1.025em',
  backgroundRepeat: 'repeat-x',
  backgroundSize: '2px 2px',
  borderBottom: `2px solid ${chroma(props.linkColor).alpha(0.8).css()}`,
  boxShadow: `inset 0 -9px 0 ${chroma(props.linkColor).alpha(0.15).css()}`,
  color: props.color,
  textDecoration: 'none',
  transitionDuration: '160ms',
  transitionProperty: 'border-color, box-shadow',
  transitionTimingFunction: 'ease',

  ':hover': {
    boxShadow: `inset 0 -1.2em 0 ${chroma(props.linkColor).alpha(0.25).css()}`
  }
}))

export default props => (
  <Theme>
    {({ color, linkColor }) => (
      <TextLink
        color={color}
        href={props.href}
        linkColor={linkColor}
        {...props}
      >
        {props.children}
      </TextLink>
    )}
  </Theme>
)
