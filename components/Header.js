import Link from 'next/link'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif;
  flex-wrap: flex-wrap;
  margin: 3rem 0;
`

const Title = styled.h1`
  display: inline-block;
  font-family: Monaco, monospace;
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0;
`

const Leader = styled.span`
  color: #fff;
  display: inline-block;
  font-family: Monaco, monospace;
  margin-right: 0.25rem;
  opacity: 0.5;
`

const Anchor = styled.a`
  color: #fff;
  text-decoration: none;
`

export default () => (
  <Header>
    <Title>
      <Link href='/'>
        <Anchor>
          <Leader>#</Leader>
          David Calhoun
        </Anchor>
      </Link>
    </Title>
  </Header>
)
