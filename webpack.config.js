'use strict';

// Modules
var webpack                 = require('webpack');
var path                    = require('path');
var autoprefixer            = require('autoprefixer');
var HtmlWebpackPlugin       = require('html-webpack-plugin');
var ExtractTextPlugin       = require('extract-text-webpack-plugin');
var CopyWebpackPlugin       = require('copy-webpack-plugin');
var CompressionPlugin       = require('compression-webpack-plugin');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
var WebpackPwaManifest      = require('webpack-pwa-manifest');

var environment             = require('./config/environment');

const MANIFEST_ICONS_URL    = 'https://s3.amazonaws.com/static-images.padpiper.com/logos/logo-white.png';

module.exports = function makeWebpackConfig () {

  /**
    * Set vendors
    */
  var vendors = [
    'angular',
    'angular-ui-router',
    'angular-material',
    'angular-messages',
    'angular-sanitize',
    'angular-moment',
    'angular-credit-cards',
    'angular-youtube-embed',
    'angular-material-data-table',
    'ng-sortable'
  ];

  /**
    * Set ENV varables Globals, default to development
    */
  var env = process.env.NODE_ENV || 'development';

  // Give access to variable throughout file
  var __DEV__ = env === 'development',
      __PROD__ = env === 'production',
      __TEST__ = env === 'test';

  /**
   * Config and Context
   * Reference: https://webpack.js.org/
   * This is the object where all configuration gets set
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
   var config = {
     context: path.resolve(__dirname, 'src')
   };

  /**
   * Entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  config.entry = __TEST__
  ?
    function(){return {}}
  : {
    app: './index.js',
    vendor: vendors
  };

  /**
   * Output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  config.output = __TEST__ ? {} : {
    // Absolute output directory
    path: __dirname + '/dist',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: __PROD__ ? '/' : 'http://localhost:8080/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: __PROD__ ? '[name].[hash].js' : '[name].bundle.js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: __PROD__ ? '[name].[hash].js' : '[name].bundle.js'
  };

  /**
   * Devtool
   * Type of sourcemap to use per build type
   */
  if (__TEST__) {
    config.devtool = 'inline-source-map';
  } else if (__PROD__) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  /**
   * Loaders
   * This handles most of the magic responsible for converting modules
   */

  // Initialize module
  config.module = {
    rules: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['env']
      }
    },
    {
      // SCSS COMPILER
      // Reference: https://github.com/jtangelder/sass-loader
      // Process SCSS into CSS
      test: /\.scss$/,
      use: __TEST__ ? 'null-loader' :
      [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      // CSS LOADER
      // Reference: https://github.com/webpack/css-loader
      // Allow loading css through js
      //
      // Reference: https://github.com/postcss/postcss-loader
      // Postprocess your css with PostCSS plugins
      test: /\.css$/,
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files in production builds
      //
      // Reference: https://github.com/webpack/style-loader
      // Use style-loader in development.
      use: __TEST__ ? 'null-loader' : ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'postcss-loader'
        ]
      })
    },
    {
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, mp4, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif|svg|mp4)$/,
      use: [{
        loader: 'file-loader'
      }]
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$/,
      use: [{
        loader: 'raw-loader'
      }]
    }]
  };

  /**
   * Vendor Validation
   * Validate that package dependencies exist
   */
  const pkg = require('./package.json');

  vendors = vendors.filter(dep => {
    if (pkg.dependencies[dep]) return true;

    console.log(
      `Package "${dep}" was not found as an npm dependency in package.json; ` +
      `it won't be included in the webpack vendor bundle.
       Consider removing it from vendor_dependencies in ~/src/index.js`
    );
  });

  // ES LINT LOADER
  // Reference: https://github.com/MoOx/eslint-loader
  // Runs through JS files with eslint and detects JS errors and warnings
  // Skips node_modules
  if (__DEV__) {
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        failOnWarning: false,
        failOnError: true,
        fix: true
      }
    });
  }

  // ISTANBUL INSTRUMENT LOADER
  // Reference: https://github.com/webpack-contrib/istanbul-instrumenter-loader
  // Instrument JS files with Istanbul for subsequent code coverage reporting
  // Skips node_modules and files that end with .spec.js
  if (__TEST__) {
    config.module.rules.push({
      test: /\.js$/,
      exclude: [
        /node_modules/,
        /\.spec\.js$/
      ],
      use: {
        loader: 'istanbul-instrumenter-loader',
        options: { esModules: true }
      },
      enforce: 'post'
    });
  }

  /**
   * Plugins
   */
  config.plugins = [
    new webpack.DefinePlugin(environment[env])
  ];

  // Skip rendering index.html in test mode
  if (!__TEST__) {
    config.plugins.push(
      // Render index.html
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: 'body',
        favicon: './public/images/favicon.ico',
        minify: __PROD__ ? { caseSensitive: true, collapseWhitespace: true, removeComments: true } : false
      }),

      // Extract css files
      // Disabled when in test mode or not in build mode
      new ExtractTextPlugin('[name].[hash].css', { disable: (__TEST__ || __DEV__) }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity
      })
    )
  }

  // Add build specific plugins
  if (__PROD__) {
    config.plugins.push(
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin({
        comments: false,
        whitespace: false,
        sourceMap: true
      }),

      // Create service-worker.js file for PWA capabilities
      new SWPrecacheWebpackPlugin({
          cacheId: 'padpiper-sw-cache',
          dontCacheBustUrlsMatching: /\.\w{8}\./,
          filename: 'service-worker.js',
          minify: true,
          navigateFallback: config.output.publicPath,
          staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/]
      }),

      // Reference: https://github.com/arthurbergmz/webpack-pwa-manifest
      // Generate application manifest for PWA capabilities
      new WebpackPwaManifest({
        name: 'PadPiper',
        short_name: 'PadPiper',
        description: 'With PadPiper, students can easily find trusted housing for school terms and internships, and landlords can quickly find suitable tenants for their spaces.',
        background_color: '#00BCD4',
        theme_color: '#00BCD4',
        'theme-color': '#00BCD4',
        start_url: '/',
        icons: [
          {
            src: MANIFEST_ICONS_URL,
            sizes: [96, 128, 192, 256, 384, 512]
          }
        ]
      }),

      // Compress JS and CSS files for faster loading
      // Reference: https://github.com/webpack-contrib/compression-webpack-plugin
      new CompressionPlugin({
        test: /\.(js|html|css)$/,
        asset: '[path].gz[query]',
        algorithm: 'gzip',
        threshold: 10240,
        minRatio: 0.8
      })
    )
  }

  /**
   * Dev server configuration
   */
  config.devServer = {
    contentBase: './src/public',
    stats: 'minimal'
  };

  return config;
}();
