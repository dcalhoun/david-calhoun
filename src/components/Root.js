import css from '../app.css';
import React from 'react';

const Root = (assets, children, title, ...props) => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width,initial-scale=1' />
      <title>{title}</title>
      <link rel='shortcut icon' type='image/png' href='/favicon.png' />
      <link rel='stylesheet' href='/main.css' />
    </head>
    <body>
      <div id='js-outlet'>
        {children}
      </div>
      {Object.keys(assets).map((chunk, index) => {
        return <script key={index} src={'/' + assets[chunk]} />;
      })}
    </body>
  </html>
);

export default Root;
