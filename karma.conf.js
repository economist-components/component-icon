module.exports = function(config) {
  const localBrowsers = ['Chrome'];
  const sauceLabsBrowsers = {
    SauceChromeLatest: {
      base: 'SauceLabs',
      browserName: 'Chrome',
    },
    SauceFirefoxLatest: {
      base: 'SauceLabs',
      browserName: 'Firefox',
    },
    SauceSafariLatest: {
      base: 'SauceLabs',
      browserName: 'Safari',
    },
    SauceInternetExplorerLatest: {
      base: 'SauceLabs',
      browserName: 'Internet Explorer',
    },
    SauceEdgeLatest: {
      base: 'SauceLabs',
      browserName: 'MicrosoftEdge',
    },
    SauceIphoneLatest: {
      base: 'SauceLabs',
      browserName: 'iPad',
    },
    SauceAndroidLatest: {
      base: 'SauceLabs',
      browserName: 'Android',
    },
  };
  config.set({
    basePath: '',
    browsers: localBrowsers,
    logLevel: config.LOG_DEBUG,
    frameworks: ['mocha', 'chai'],
    files: [
      require.resolve('chai-spies/chai-spies'),
      require.resolve('chai-things/lib/chai-things'),
      'testbundle.js'
    ],
    exclude: [],
    preprocessors: {},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    concurrency: 3,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    captureTimeout: 1000 * 60 * 2,
    browserDisconnectTimeout: 1000 * 60 * 2,
    browserNoActivityTimeout: 1000 * 60 * 2,
    singleRun: true
  });

  if (process.env.SAUCE_ACCESS_KEY) {
    config.reporters.push('saucelabs');
    config.set({
      customLaunchers: sauceLabsBrowsers,
      browsers: Object.keys(sauceLabsBrowsers),
      sauceLabs: {
        testName: require('./package').name,
        startConnect: true,
        username: process.env.SAUCE_USERNAME || 'economist',
        build: (function() {
          if (process.env.GO_PIPELINE_NAME && process.env.GO_PIPELINE_LABEL) {
            return process.env.GO_PIPELINE_NAME + '-' + process.env.GO_PIPELINE_LABEL;
          }
          return 'localbuild-' + new Date().toJSON();
        })()
      }
    });
  }
};
