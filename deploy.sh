# Go to the gh-pages branch
git checkout gh-pages 

# Bring gh-pages up to date with master
git rebase master

# Optimize JS and overwrite bootstrap
node ./node_modules/requirejs/bin/r.js -o name=app mainConfigFile=config.js out=bootstrap.js baseUrl=.

# Commit changes
git commit -m "App updated" bootstrap.js

# Push changes
git push origin gh-pages 

# return to the master branch
git checkout master 