'use strict'

import { createHistory, createMemoryHistory } from 'history'
import { Router, RoutingContext, match } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import Root from './components/Root'
import Routes from './Routes'
import { flushTitle } from 'react-title-component'

// Client render
if (typeof document !== 'undefined') {
  const history = createHistory()
  const outlet = document.getElementById('js-outlet')

  ReactDOM.render(<Router history={history} routes={Routes} />, outlet)
}

// Static render
export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)

  match({ routes: Routes, location: location }, (error, redirectLocation, renderProps) => {
    if (error) {
      throw new Error('Static render failed.')
    } else if (renderProps) {
      const app = ReactDOMServer.renderToString(<RoutingContext {...renderProps}/>)
      const title = flushTitle()
      const html = ReactDOMServer.renderToStaticMarkup(<Root {...locals} app={app} title={title} />)
      callback(null, '<!doctype html>' + html)
    } else {
      throw new Error('Not found.')
    }
  })
}
