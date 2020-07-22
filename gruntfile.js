const sass = require('node-sass');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      js: {
        files: ['src/js/*.js'],
        tasks: ['uglify:dev']
      },
      css: {
        files: ['src/scss/**/*.scss'],
        tasks: ['sass:dev']
      },
      view: {
        files: ['src/view/*.html'],
        tasks: ['copy']
      }
    },
    uglify: {
      dev: {
        options: {
          beautify: true,
          mangle: false,
          compress: false,
          preserveComments: 'all'
        },
        files: [{
          expand: true,
          cwd  :'src/js/',
          src  :'*.js',
          dest :'dist/js',
          ext  :'.min.js'
        }]
      },
      build: {
        files: [{
          expand: true,
          cwd  :'src/js/',
          src  :'*.js',
          dest :'dist/js',
          ext  :'.min.js'
        }]
      }
    },
    sass: {
      dev: {
        options: {
          implementation: sass,
          outputStyle: 'expanded'
        },
        files: [{
          expand: true,
          cwd  :'src/scss/',
          src  :'*.scss',
          dest :'dist/css',
          ext  :'.min.css'
        }]
      },
      build: {
        options: {
          implementation: sass,
          outputStyle: 'compressed'
        },
        files: [{
          expand: true,
          cwd  :'src/scss/',
          src  :'*.scss',
          dest :'dist/css',
          ext  :'.min.css'
        }]
      }
    },
    copy: {
      'view': {
        files: [{
          expand: true,
          cwd: 'src/view',
          src: '**/*',
          dest: 'dist',
          filter: 'isFile',
          flatten: true,
        }]
      },
      'img': {
        files: [{
          expand: true,
          cwd: 'src/img',
          src: '**/*',
          dest: 'dist/img',
          filter: 'isFile',
          flatten: true,
        }]
      }
    },
    connect: {
      dev: {
        port: 8000,
        base: '.'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['uglify:dev','sass:dev','connect:dev','copy','watch']);
  grunt.registerTask('build', ['uglify:build', 'sass:build','copy']);

};