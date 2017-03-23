'use strict'

import { createHistory, createMemoryHistory } from 'history'
import { flushTitle } from 'react-title-component'
import { Router, RoutingContext, match } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Root from './components/Root'
import routes from './config/routes'

// Client render
if (typeof document !== 'undefined') {
  const history = createHistory()
  const outlet = document.getElementById('js-outlet')

  ReactDOM.render(<Router history={history} routes={routes} />, outlet)
}

// Static render
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  match({ routes: routes, location: location }, (error, redirect, props) => {
    if (error) {
      throw new Error('Static render failed.')
    } else if (props) {
      const app = ReactDOMServer.renderToString(<RoutingContext {...props} />)
      const title = flushTitle()
      const html = ReactDOMServer.renderToStaticMarkup(<Root {...locals} app={app} title={title} />)
      callback(null, '<!doctype html>' + html)
    } else {
      throw new Error('Not found.')
    }
  })
}
