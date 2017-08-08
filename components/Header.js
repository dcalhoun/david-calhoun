import Theme from '../containers/Theme'
import Link from 'next/link'
import TextLink from './TextLink'
import { styled } from 'styletron-react'

const Header = styled('header', {
  fontFamily: '"Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif',
  margin: '3rem 0',
  padding: '0 1rem',

  '@media (min-width: 40rem)': {
    alignItems: 'baseline',
    display: 'flex',
    flexWrap: 'flex-wrap',
    justifyContent: 'space-between'
  }
})

const Title = styled('h1', {
  display: 'inline-block',
  fontFamily: 'Monaco, monospace',
  fontSize: '1.25rem',
  fontWeight: 300,
  margin: '0 0 1rem 0',

  '@media screen and (min-width: 40rem': {
    fontSize: '1.5rem',
    marginBottom: 0
  }
})

const Leader = styled('span', props => ({
  color: props.color,
  cursor: 'pointer',
  display: 'inline-block',
  fontFamily: 'Monaco, monospace',
  paddingRight: '0.5rem',
  opacity: 0.5,
  transitionDuration: '300ms',
  transitionProperty: 'opacity, transform',
  transitionTimingFunction: 'ease-in-out',

  ':hover': {
    opacity: 1,
    transform: 'translateX(-0.25rem)'
  }
}))

const NavItem = styled('div', {
  display: 'inline-block',
  fontSize: '0.875rem',
  padding: '0 0.25rem',

  '@media screen and (min-width: 40rem': {
    fontSize: '1rem'
  }
})

export default props => (
  <Theme>
    {({ color, onClick }) => (
      <Header>
        <Title>
          <Leader color={color} onClick={onClick}>#</Leader>
          <Link href='/' prefetch>
            <TextLink href='/'>David Calhoun</TextLink>
          </Link>
        </Title>

        <nav>
          <NavItem>
            <Link href='/writing' prefetch>
              <TextLink href='/writing'>Writing</TextLink>
            </Link>
          </NavItem>

          <NavItem>
            <TextLink href='http://twitter.com/david_calhoun'>Twitter</TextLink>
          </NavItem>

          <NavItem>
            <TextLink href='http://github.com/dcalhoun'>GitHub</TextLink>
          </NavItem>
        </nav>
      </Header>
    )}
  </Theme>
)
