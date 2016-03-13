import React from 'react';
import css from '../app.css';

const Root = React.createClass({
  render() {
    const {assets, children, title} = this.props;

    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width,initial-scale=1' />
          <title>{title}</title>
          <link rel='shortcut icon' type='image/png' href='/favicon.png'/>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body>
          <div id='js-outlet'>
            {children}
          </div>
          {Object.keys(assets).map((chunk, index) => {
            return <script key={index} src={'/' + assets[chunk]}/>;
          })}
        </body>
      </html>
    );
  }
});

export default Root;
