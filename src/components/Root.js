/* global config */

'use strict'

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
          <link rel='stylesheet' href='/bundle.css' />
        </head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: app }} id='js-outlet' />
          {config.env !== 'prod' ? <script src='/client.bundle.js' /> : ''}
        </body>
      </html>
    )
  }
})

export default Root
