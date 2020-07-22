# Sass plus Grunt build template

Here is a [Grunt](https://gruntjs.com/) setup that will save you countless hours of trying to get the bundling up and running.

<img src='./src/img/logo-grunt-sass.png' width='270'>

<br/>
## 🚀 Quick Start

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

> Navigate to the project directory and add grunt to the devDependitions list.

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
> Triggers the watch task to reload Gruntfile.js changes each time a watched file is modified.

```
npm install node-sass grunt-sass --save-dev
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

<br/>
## 🎨 Sass architecture

To keep stylesheets short, efficient and easier to maintain, build the interface as a collection of [components](./src/scss). Split the code in separate folders, such as `base/`, `components/`, `layout/`, `pages/`, and a single file at the root level, called `main.scss`, which imports them all to be compiled into a CSS stylesheet.

When working on smaller projects, you can keep all reusable partials into `common/` folder and collect the page related styles into `pages/`.

```
sass/
    |
    |– common/
    |   |– _base.scss           # Global html rules
    |   |– _buttons.scss        # Buttons
    |   |– _footer.scss         # Footer
    |   |– _forms.scss          # Form components
    |   |– _header.scss         # Header
    |   |– _layout.scss         # Basic layouts
    |   |– _links.scss          # Links
    |   |– _margins.scss        # Spacing helpers
    |   |– _modal.scss          # Modals
    |   |– _tooltip.scss        # Tooltip
    |   |– _typography.scss     # Typography rules
    |   |– _variables.scss      # Sass Variables
    |
    |– pages/
    |   |– _contact.scss        # Contact page specific styles
    |   |– _home.scss           # Home page specific styles
    |   |– _news.scss           # News page specific styles
    |
    |
    `– main.scss                # Main Sass file
```

<br/>
## 🎉 Start developing

The [Gruntfile.js](./src/gruntfile.js) includes **build** and **dev** configuration. Build will compress JavaScript and CSS files into a production-ready directory, and dev is the default development mode.

```
npm install
```
> Clone this repository and install all dependencies.

```
npm run dev
```
> Continue local development and visit http://localhost:8000.

```
npm run build
```
> And then build all files for production.




