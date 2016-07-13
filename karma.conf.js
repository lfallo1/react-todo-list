module.exports = function(karma) {
  karma.set({

    frameworks: [ 'browserify', 'jasmine'],
    files: ['src/tests/**/*.jsx'],
    preprocessors: {
      'src/tests/**/*.jsx': [ 'browserify' ]
    },

    browserify: {
      debug: true,
      transform: [ 'reactify' ]
    },
    browsers: ['Chrome']
  });
}
