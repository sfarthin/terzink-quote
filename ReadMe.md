# Terzink Quote Generator

This web app generates quotes for screen printing orders based on this [http://www.terzink.com/#!getta-quote/c3xu](non-trival pricing method). Angularjs is used to keep order prices updated in realtime and encoded into the URL of the page so every step can be shared by copying the web address in the address bar. This example uses [Require.js](http://requirejs.org/) to combine and organize the [Foundation](http://foundation.zurb.com/) CSS, LESS, jade, json, and js libraries. Using require.js requires no build process to function, but can be optimized into one file when deploying using [r.js](http://requirejs.org/docs/optimization.html) (see below).

### Deploy to Github Pages

deploy.sh can be run to push the updated app onto github pages. This script optimizes the require.js app using [r.js](http://requirejs.org/docs/optimization.html) and pushes it to the gh-pages branch.

	$ deploy.sh

### Testing

Karma/mocha/chai is used for testing. See spec.js for tests.

	$ npm install
	$ npm test
