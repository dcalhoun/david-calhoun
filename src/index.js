import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { createHistory, createMemoryHistory } from 'history';
import { Router, RoutingContext, match } from 'react-router';
import Routes from './Routes.jsx';
import Root from './components/Root.jsx';

// Client render
// if (typeof document !== 'undefined') {
//   const history = createHistory();
//   const outlet  = document.getElementById('js-outlet');
//
//   ReactDOM.render(<Router history={history} routes={Routes} />, outlet);
// }

// Static site render
export default (locals, callback) => {
  const history  = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes: Routes, location: location }, (error, redirectLocation, renderProps) => {
    const html = ReactDOMServer.renderToStaticMarkup(
      <Root {...locals}>
        <RoutingContext {...renderProps}/>
      </Root>
    );
    callback(null, '<!doctype html>' + html);
  });
};
