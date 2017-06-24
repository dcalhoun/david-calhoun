import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { flush } from '../utils/styletron'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styletron = flush()
    const stylesheets = styletron ? styletron.getStylesheets() : []
    return { ...page, stylesheets }
  }

  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()

    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />

          <style>{`
            html {
              box-sizing: border-box;
            }

            *, *:before, *:after {
              box-sizing: inherit;
            }
            body {
              margin: 0;
            }
          `}</style>

          {this.props.stylesheets.map((sheet, i) => (
            <style
              className='_styletron_hydrate_'
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.media || ''}
              key={i}
            />
          ))}
          {styleTags}
        </Head>
        <body>
          {main}
          <NextScript />
        </body>
      </html>
    )
  }
}
