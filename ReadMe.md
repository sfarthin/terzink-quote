# Terzink Quote Generator [![Travis-ci status](https://travis-ci.org/sfarthin/terzink-quote.svg)](https://travis-ci.org/sfarthin/terzink-quote)

This web app generates quotes for screen printing orders based on this [non-trival pricing method](http://www.terzink.com/#!getta-quote/c3xu). Angular.js is used to keep order prices updated in realtime and encoded into the URL of the page so every step can be shared by copying the web address in the address bar. This example uses [Require.js](http://requirejs.org/) to combine and organize the [Foundation](http://foundation.zurb.com/) CSS, LESS, jade, json, and other JS libraries. Using Require.js requires no build process or other tool when developing, but can be optimized into one file when deploying using [r.js](http://requirejs.org/docs/optimization.html) (see below).


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

##### Karma

Mocha/chai is used for unit testing. See spec.js.

	$ npm install
	$ npm test

##### Protractor

No standalone selenium server needed. See e2e.js

	$ npm install
	$ npm install -g protractor
	$ protractor

This process generates screenshots automatically:

* * * 
![](https://raw.githubusercontent.com/sfarthin/terzink-quote/master/screenshots/1-start.png)
* * * 
![](https://raw.githubusercontent.com/sfarthin/terzink-quote/master/screenshots/2-garment.png)
* * * 
![](https://raw.githubusercontent.com/sfarthin/terzink-quote/master/screenshots/3-type.png)
* * * 
![](https://raw.githubusercontent.com/sfarthin/terzink-quote/master/screenshots/4-color.png)
* * * 
![](https://raw.githubusercontent.com/sfarthin/terzink-quote/master/screenshots/5-quantity.png)
* * * 
![](https://raw.githubusercontent.com/sfarthin/terzink-quote/master/screenshots/6-placement.png)
* * * 
![](https://raw.githubusercontent.com/sfarthin/terzink-quote/master/screenshots/7-number-of-colors.png)
