module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'requirejs', 'chai', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
		"config.js", 
		"karma-requirejs.js",
		{pattern: '**/*', included: false}
    ],
	
	exclude: [
		"karma.conf.js",
	],

    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS_without_security'], //, 'Chrome', 'Firefox', 'Safari'

    // you can define custom flags
    customLaunchers: {
		PhantomJS_without_security: {
			base: 'PhantomJS',
			flags: ['--web-security=no']
		}
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
