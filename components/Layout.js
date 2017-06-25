import Head from 'next/head'
import Header from './Header'
import chroma from 'chroma-js'
import getStyletron from '../utils/styletron'
import styled from 'styled-components'
import { StyletronProvider } from 'styletron-react'

function getTitle (title) {
  return title
    ? `${title} | David Calhoun, Software Engineer`
    : 'David Calhoun, Software Engineer'
}

const Layout = styled.div`
  background-color: ${props => chroma(props.background).darken(0.5)};
  padding: 0.5rem;

  @media (min-width: 54rem) {
    padding: 1rem;
  }
`

const LayoutInner = styled.div`
  background-color: ${props => props.background};
  min-height: calc(100vh - 1rem);
  overflow: hidden;

  @media (min-width: 54rem) {
    min-height: calc(100vh - 2rem);
  }
`

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 56.25rem;

  @media (min-width: 40rem) {
    margin-bottom: 3rem;
  }
`

export default (props) => (
  <StyletronProvider styletron={getStyletron()}>
    <Layout background={props.background}>
      <Head>
        <title>{getTitle(props.title)}</title>
      </Head>

      <LayoutInner background={props.background}>
        <Content>
          <Header color={props.color} onClick={props.onClick} />
          {props.children}
        </Content>
      </LayoutInner>
    </Layout>
  </StyletronProvider>
)
