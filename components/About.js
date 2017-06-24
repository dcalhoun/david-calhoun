import Link from './Link'
import styled from 'styled-components'

const About = styled.div`
  margin-bottom: 4rem;
`

const Title = styled.p`
  color: #fff;
  font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif;
  ${'' /* font-family: Monaco, monospace; */}
  font-size: 1.75rem;
  line-height: 1.25;
  margin: 0 0 3rem;

  @media (min-width: 32rem) {
    font-size: 2.75rem;
  }

  @media (min-width: 48rem) {
    font-size: 3.75rem;
  }
`

const SubTitle = styled.p`
  color: #fff;
  font-family: 'Avenir Next', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, sans-serif;
  font-size: 0.875rem;
  margin: 0;
`

const Break = styled.div`
  display: 'none';

  @media (min-width: 40rem) {
    display: 'block';
  }
`

export default () => (
  <About>
    <Title>
      Software engineer <Break />
      specializing in UX design <Break />
      & front-end architecture.
    </Title>
    <SubTitle>
      Currently at
      {' '}
      <Link href='https://www.gonoodle.com'>GoNoodle</Link>.
      {' '}
      Based in Nashville, TN.
    </SubTitle>
  </About>
)
