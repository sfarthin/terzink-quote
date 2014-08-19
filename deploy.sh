# go to the gh-pages branch
git checkout gh-pages 

# bring gh-pages up to date with master
git rebase master

# optimize JS and overwrite bootstrap
node ./node_modules/requirejs/bin/r.js -o name=app mainConfigFile=config.js out=bootstrap.js baseUrl=.

# commit the changes
git push origin gh-pages 

# return to the master branch
git checkout master 