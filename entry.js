import React  from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import Routes from './Routes.jsx';
import Root from './components/Root.jsx';

module.exports = function render(path, props, callback) {
  Router.run(Routes, path, (Root) => {
    const html = React.renderToString(<Root/>);
    callback('<!DOCTYPE html>' + html);
  });
}

if (typeof document != 'undefined') {
  /**
   * Running in a web environment, re-render the entire tree onto the document,
   * react will be able to tell that what you are trying to render is exactly the same and
   * adjust itself accordingly
   */
  Router.run(Routes, Router.HistoryLocation, (Root) => {
    React.render(<Root/>, document);
  });
}
