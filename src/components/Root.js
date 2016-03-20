'use strict'

import React from 'react'

const Root = React.createClass({
  render () {
    const { app, assets, title } = this.props

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <title>{title}</title>
          <link rel='shortcut icon' type='image/png' href='/favicon.png' />
          <link rel='stylesheet' href='/main.css' />
        </head>
        <body>
          <div dangerouslySetInnerHTML={{ __html: app }} id='js-outlet' />
          {Object.keys(assets).map((chunk, index) => {
            return <script key={index} src={'/' + assets[chunk]} />
          })}
        </body>
      </html>
    )
  }
})

export default Root
