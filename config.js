require.config({
	shim: {
		angular: { exports: 'angular' },
		"angular-route": { deps: ['angular'] },
		"checklist-model": { deps: ['angular'] },
		lodash: { exports: "_" },
		numeral: { exports: "numeral" }
	},
	map: {
	  '*': {
	    'css': 'css', // or whatever the path to require-css is
		'less': 'less' // path to less
	  }
	},
    paths : {
		text: 	'bower_components/requirejs-plugins/lib/text',
        async: 	'bower_components/requirejs-plugins/src/async',
        json: 	'bower_components/requirejs-plugins/src/json',
		angular: 'bower_components/angular/angular',
		jade: 	 'bower_components/require-jade/jade',
		lodash:  'bower_components/lodash/dist/lodash',
		numeral:  'bower_components/numeral/numeral',
		
		"angular-route": 'bower_components/angular-route/angular-route',
		
		"checklist-model": "bower_components/checklist-model/checklist-model",
		
		less : 	'bower_components/require-less/less',
			"less-builder" : 		"bower_components/require-less/less-builder",
			"normalize" : 			"bower_components/require-less/normalize",
			"lessc" : 				"bower_components/require-less/lessc",
    },
	deps: ["app"]
});