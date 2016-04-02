/* global config */

'use strict'

import 'file?name=.nojekyll!../.nojekyll'
import 'file?name=[name].[ext]!../apple-touch-icon.png'
import 'file?name=CNAME!../CNAME'
import 'file?name=[name].[ext]!../favicon.png'
import Analytics from './Analytics'
import Fonts from './Fonts'
import React from 'react'

const Root = React.createClass({
  render () {
    const { app, title } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <title>{title}</title>
          <link rel='shortcut icon' type='image/png' href='/favicon.png' />
          {config.env === 'prod' ? <link rel='stylesheet' href='/bundle.css' /> : ''}
        </head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: app }} id='js-outlet' />
          {config.env !== 'prod' ? <script src='/client.bundle.js' /> : ''}
          <script dangerouslySetInnerHTML={{ __html: Fonts }} />
          {config.env === 'prod' ? <script dangerouslySetInnerHTML={{ __html: Analytics }} /> : ''}
        </body>
      </html>
    )
  }
})

export default Root
