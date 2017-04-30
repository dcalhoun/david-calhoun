import Document, { Head, Main, NextScript } from 'next/document'
import { flush } from '../utils/styletron'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styletron = flush()
    const stylesheets = styletron ? styletron.getStylesheets() : []
    return { ...page, stylesheets }
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          {this.props.stylesheets.map((sheet, i) => (
            <style
              className='_styletron_hydrate_'
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.media || ''}
              key={i}
            />
          ))}
        </Head>
        <body style={{ margin: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
