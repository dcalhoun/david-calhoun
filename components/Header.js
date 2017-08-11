import Theme from '../containers/Theme'
import Link from 'next/link'
import TextLink from './TextLink'
import { fonts } from '../utils/style'
import { styled } from 'styletron-react'

const Header = styled('header', {
  fontFamily: fonts.heading,
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
  fontFamily: fonts.monospace,
  fontSize: '1.25rem',
  fontWeight: 300,
  margin: '0 0 1rem 0',

  '@media screen and (min-width: 40rem)': {
    fontSize: '1.5rem',
    marginBottom: 0
  }
})

const Leader = styled(TextLink, props => ({
  cursor: 'pointer',
  fontFamily: fonts.monospace,

  '@media screen and (max-width: 39.9375rem)': {
    alignItems: 'center',
    display: 'flex',
    height: '3rem',
    justifyContent: 'center',
    position: 'absolute',
    right: '1rem',
    top: '1rem',
    width: '3rem'
  },

  '@media screen and (min-width: 40rem)': {
    marginRight: '0.5rem',
    padding: '0 0.25rem'
  }
}))

const NavItem = styled('div', {
  display: 'inline-block',
  fontSize: '0.875rem',
  paddingRight: '0.5rem',

  '@media screen and (min-width: 40rem)': {
    fontSize: '1rem',
    paddingLeft: '0.5rem'
  }
})

export default props => (
  <Theme>
    {({ color, onClick, linkColor }) => (
      <Header>
        <Title>
          <Leader color={color} linkColor={linkColor} onClick={onClick}>#</Leader>
          <Link href='/' prefetch>
            <TextLink button href='/'>David Calhoun</TextLink>
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
