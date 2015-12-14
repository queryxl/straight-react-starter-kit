var path              = require('path');
var webpack           = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var cssnano           = require('cssnano');
module.exports        = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__webpack_hmr',
      path.join(__dirname, '../src/app.js')
    ],
    vendor: [
      'history',
      'react',
      'react-redux',
      'react-router',
      'redux',
      'redux-simple-router'
    ]
  },
  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  resolve: {
    root: './src',
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel',
        include: path.join(__dirname, '../src'),
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0'],
          env: {
            development: {
              plugins: [
                ['react-transform', {
                  // omit HMR plugin by default and _only_ load in hot mode
                  transforms: [
                    {
                      transform: 'react-transform-catch-errors',
                      imports: ['react', 'redbox-react']
                    },
                    {
                      transform: 'react-transform-hmr',
                      imports: ['react'],
                      locals: ['module']
                    }
                  ]
                }]
              ]
            }
          }
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?sourceMap'
        ]
      },
      /* eslint-disable */
      {test: /\.woff(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff"},
      {test: /\.woff2(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2"},
      {test: /\.ttf(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream"},
      {test: /\.eot(\?.*)?$/, loader: "file-loader?prefix=fonts/&name=[path][name].[ext]"},
      {test: /\.svg(\?.*)?$/, loader: "url-loader?prefix=fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml"},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
      /* eslint-enable */
    ]
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      discardComments: {
        removeAll: true
      }
    })
  ]
};
