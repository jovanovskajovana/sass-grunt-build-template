# Sass plus Grunt build template

Here is a [Grunt](https://gruntjs.com/) setup that will save you countless hours of trying to get the bundling up and running.

## Quick Start

This quick start is intended to guide you through installing all the dependencies and understanding the basic file architecture.

#### Install the Grunt CLI

```
npm install -g grunt-cli
```

> Make sure you have a stable version of [Node.js](https://nodejs.org/en/) and install Grunt CLI globally on your machine.

#### Install Grunt

```
npm install grunt --save-dev
```

> Navigate to your project and add grunt to the devDependencies list.

#### Setup the Gruntfile.js

```
module.exports = function(grunt) {

	// Configure task(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    uglify: {
      dev: {
        options: {
          ...
        },
        files: [{
          ...
        }]
      },
      build: {
        files: [{
          ...
        }]
      }
    },
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// Register task(s)
	grunt.registerTask('default', ['uglify:dev']);
  grunt.registerTask('build', ['uglify:build']);

};
```

> First you need to configure all the tasks you will be using for automation, load the plugins and then register the tasks for development or production. Keep the process simple by including only key tasks such as [watch](https://www.npmjs.com/package/grunt-contrib-watch), [sass](https://www.npmjs.com/package/grunt-sass), [uglify](https://www.npmjs.com/package/grunt-contrib-uglify), [copy](https://www.npmjs.com/package/grunt-contrib-copy) and [connect](https://www.npmjs.com/package/grunt-contrib-connect).

#### Install Gruntplugins

```
npm install grunt-contrib-watch --save-dev
```
> Triggers the watch task to reload Gruntfile.js changes each time a watched file is midified.

```
npm install --save-dev node-sass grunt-sass
```
> Compiles Sass code to minified CSS files.

```
npm install grunt-contrib-uglify --save-dev
```
> Compresses JavaScript code into a target bundle.

```
npm install grunt-contrib-copy --save-dev
```
> Makes a copy of the static files in the production ready folder.

```
npm install grunt-contrib-connect --save-dev
```
> Runs a web server for local development.



