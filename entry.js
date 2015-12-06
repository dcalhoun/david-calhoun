import React  from 'react';
import Router, {HistoryLocation} from 'react-router';
import Routes from './Routes.jsx';
import Root from './components/Root.jsx';

module.exports = function render(path, props, callback) {
  Router.run(Routes, path, (Root) => {
    const html = React.renderToString(<Root/>);
    callback('<!DOCTYPE html>' + html);
  });
}

if (typeof document != 'undefined') {
  Router.run(Routes, HistoryLocation, (Root) => {
    React.render(<Root/>, document);
  });
}
