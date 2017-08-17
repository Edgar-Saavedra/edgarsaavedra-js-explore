const webpackConfig = require('./webpack.config');
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.registerTask('default', 'Log some stuff.', function() {
    grunt.log.write('working!');
  });
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      options: {
        stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      },
      prod: webpackConfig,
      dev: Object.assign({ watch: true }, webpackConfig)
    },
    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ["webpack:prod"],
        options: {
          spawn: false,
        },
      },
    },
  });
};