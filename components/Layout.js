import Head from 'next/head'
import Header from './Header'
import Theme from '../containers/Theme'
import chroma from 'chroma-js'
import getStyletron from '../utils/style'
import { styled, StyletronProvider } from 'styletron-react'

function getTitle (title) {
  const base = 'David Calhoun, Software Engineer'

  return title ? `${title} | ${base}` : base
}

const Wrap = styled('div', props => ({
  backgroundColor: chroma(props.background)
    .darken(0.5)
    .hex(),
  padding: '0.5rem',
  transition: 'background-color 160ms ease',

  '@media (min-width: 54rem)': {
    padding: '1rem'
  }
}))

const Inner = styled('div', props => ({
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
  <Theme>
    {({ background }) => (
      <StyletronProvider styletron={getStyletron()}>
        <Wrap background={background}>
          <Head>
            <title>{getTitle(props.title)}</title>
            <link rel='icon' href='/static/icon.png' />
            <link rel='apple-touch-icon' href='/static/icon-60.png' />
            <link
              rel='apple-touch-icon'
              sizes='152x152'
              href='/static/icon-152.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='180x180'
              href='/static/icon-180.png'
            />
            <link
              rel='apple-touch-icon'
              sizes='167x167'
              href='/static/icon-167.png'
            />
          </Head>

          <Inner background={background}>
            <Content>
              <Header />
              {props.children}
            </Content>
          </Inner>
        </Wrap>
      </StyletronProvider>
    )}
  </Theme>
)
