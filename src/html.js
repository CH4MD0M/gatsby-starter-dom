import React from "react";
import PropTypes from "prop-types";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes} className="light">
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function() {
                window.__onThemeChange = function () {};

                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  window.__onThemeChange(newTheme);                
                }
            
                let preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme')
                } catch (err) {}
            
                window.__setPreferredTheme = (newTheme) => {
                  setTheme(newTheme)
                  try {
                    localStorage.setItem('theme', newTheme)
                  } catch (err) {}
                }
            
                let darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
            
                darkModeQuery.addListener(function (e) {
                  window.__setPreferredTheme(e.matches ? 'dark' : 'light')
                })
            
                window.__setPreferredTheme(
                  preferredTheme || (darkModeQuery.matches ? 'dark' : 'light')
                )
            })();
            `,
            }}
          />
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
