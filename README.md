## Awesome Docs Generator ##
By: Amin Meyghani

The default grunt task in docs/gruntfile.js reads all the specified source code and extracts the markdown portions in /*   */. Then, it generates html and markdown pages form the folder structure of the source and creates simple inline links for angular to consume.

v0.0.1

### Usage:

	cd docs && npm install && npm install -g grunt-cli && grunt

__for dev:__

	cd docs && grunt watch # creates docs as files are changed in ../css/**/*.scss

__viewing docs:__

serve: docs/public, then view the page docs/index.html to reroute to the docs.
 