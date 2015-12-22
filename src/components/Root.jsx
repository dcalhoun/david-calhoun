import React from 'react';

export default class Root extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>David Calhoun</title>
        </head>
        <body>
          <div id="js-outlet">
            {this.props.children}
          </div>
          <script src='/bundle.js' />
        </body>
      </html>
    );
  }
}
