/* global config */

'use strict'

import React from 'react'
import Fonts from './Fonts'

const Root = React.createClass({
  render ({ app, title, ...props }) {
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
          <script dangerouslySetInnerHTML={{ __html: Fonts }} />
        </body>
      </html>
    )
  }
})

export default Root
