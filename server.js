import { flushTitle } from 'react-title-component'
import { match, RoutingContext } from 'react-router'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import compression from 'compression'
import express from 'express'
import path from 'path'
import React from 'react'
import Root from './src/components/Root'
import routes from './src/config/routes'

const app = express()
const PORT = process.env.PORT || 8080

app.use(compression())
app.use(express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const app = renderToString(<RoutingContext {...props} />)
      const title = flushTitle()
      let html = renderToStaticMarkup(<Root app={app} title={title} />)
      res.send(html)
    } else {
      res.status(404).send('Not Found')
    }
  })
})

app.listen(PORT, () => {
  console.log(`Express server running at localhost:${PORT}`)
})
