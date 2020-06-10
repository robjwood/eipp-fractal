'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();
/*
 * Give your project a title.
 */
fractal.set('project.title', 'EIPP style guide');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.engine('@frctl/nunjucks'); // use Nunjucks for components
fractal.components.set('ext', '.njk'); // Change file extension for the view template

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));


// My additions
fractal.components.set('default.preview', '@preview');

const mandelbrot = require('@frctl/mandelbrot');
const nighthawk = require('@gotoandplay/nighthawk');

const myCustomisedTheme = mandelbrot({
  skin: "black",
  "nav": ["docs", "components"],
  "panels": ["notes", "html", "resources", "context", "info"],
  "styles": [
    "default",
    "/css/fractal-theme/eipp.css"
  ],
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default
// fractal.web.theme(nighthawkTheme({
//   // specify locale for build date in the sidebar
//   lang: 'et',
//   // specify custom brand color to personalize theme
//   brandColor: '#ff0000'
// }));

fractal.web.set('builder.dest', __dirname + '/dist');
