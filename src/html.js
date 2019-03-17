import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.__onThemeChange = () => {};

                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  window.__onThemeChange(newTheme);
                }

                let preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (e) {}

                window.__setPreferedTheme = newTheme => {
                  setTheme(newTheme);
                  try {
                    window.localStorage.setItem('theme', newTheme);
                  } catch (e) {}
                };

                let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(e => {
                  window.__setPreferedTheme(e.matches ? 'dark' : 'light');
                })

                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `
          }}
        />
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
};
