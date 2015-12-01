import React  from 'react';
import Router, {Route, DefaultRoute} from 'react-router';
import Routes from './Routes.jsx';

module.exports = function render(path, props, callback) {
  Router.run(Routes, path, (Root) => {
    const html = React.renderToStaticMarkup(<Root/>);
    callback('<!DOCTYPE html>' + html);
  });
}
