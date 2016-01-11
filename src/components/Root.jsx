import React from 'react';
import styles from '../app.css';

export default class Root extends React.Component {
  render() {
    if (config.env === 'prod') {
      var link = <link rel="stylesheet" type="text/css" href="./bundle.css" media="screen" />;
    }

    return (
      <html>
        <head>
          <title>David Calhoun</title>
          {link}
        </head>
        <body>
          <div id="js-outlet">
            {this.props.children}
          </div>
          <script src="./bundle.js" />
        </body>
      </html>
    );
  }
}
