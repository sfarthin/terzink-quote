# Terzink Quote Generator

This web app generates quotes for screen printing orders based on this [http://www.terzink.com/#!getta-quote/c3xu](non-trival pricing method). Angularjs is used to keep order prices updated in realtime and encoded into the URL of the page so every step can be shared by copying the web address in the address bar. This example uses [Require.js](http://requirejs.org/) to combine and organize the [Foundation](http://foundation.zurb.com/) CSS, LESS, jade, json, and js libraries. Using require.js requires no build process to function, but can be optimized into one file when deploying using [r.js](http://requirejs.org/docs/optimization.html) (see below).


### Optimizing

You can minify and combine assests with the line below. This optimizes all of the app's assests and overwrites bootstrap.js. You must re-optimize or revert this this process if any changes are made.

	$ npm run-script optimize

To revert the optimization and return to developing the app, you can run the line below.

	$ npm run-script develop


### Deploying on github project pages

This app is pushed to a github project page as shown below

	git checkout gh-pages 
	git rebase master
	npm run-script optimize
	git commit -m "App update" bootstrap.js
	git push origin gh-pages 

### Testing

Karma/mocha/chai is used for testing. See spec.js for tests.

	$ npm install
	$ npm test
