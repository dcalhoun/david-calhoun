import Head from 'next/head'
import Header from './Header'
import chroma from 'chroma-js'
import getStyletron from '../utils/styletron'
import { styled, StyletronProvider } from 'styletron-react'

function getTitle (title) {
  return title
    ? `${title} | David Calhoun, Software Engineer`
    : 'David Calhoun, Software Engineer'
}

const Layout = styled('div', (props) => ({
  backgroundColor: chroma(props.background).darken(0.5).hex(),
  padding: '0.5rem',
  transition: 'background-color 160ms ease',

  '@media (min-width: 54rem)': {
    padding: '1rem'
  }
}))

const LayoutInner = styled('div', (props) => ({
  backgroundColor: props.background,
  minHeight: 'calc(100vh - 1rem)',
  overflow: 'hidden',
  transition: 'background-color 160ms ease',

  '@media (min-width: 54rem)': {
    minHeight: 'calc(100vh - 2rem)'
  }
}))

const Content = styled('div', {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '56.25rem',

  '@media (min-width: 54rem)': {
    marginBottom: '3rem'
  }
})

export default props => (
  <StyletronProvider styletron={getStyletron()}>
    <Layout background={props.background}>
      <Head>
        <title>{getTitle(props.title)}</title>
        <link rel='icon' href='/static/favicon.png' />
      </Head>

      <LayoutInner background={props.background}>
        <Content>
          <Header background={props.background} color={props.color} onClick={props.onClick} />
          {props.children}
        </Content>
      </LayoutInner>
    </Layout>
  </StyletronProvider>
)
