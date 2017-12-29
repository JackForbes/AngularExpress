module.exports = function karmaConfig (config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: [
      // Reference: https://github.com/karma-runner/karma-junit-reporter
      // Output jUnit-compatible test report, for CircleCI Test Summary
      'junit'
    ],
    files: ['src/tests.webpack.js'],
    preprocessors: {
      'src/tests.webpack.js': ['webpack', 'sourcemap']
    },
    browsers: ['PhantomJS'],
    singleRun: true,
    junitReporter: {
      outputDir: process.env.JUNIT_REPORT_PATH,
      outputFile: process.env.JUNIT_REPORT_NAME,
      useBrowserName: false
    },
    webpack: require('./webpack.config'),
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
}
