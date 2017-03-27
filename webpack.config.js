var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!node_modules/jquery/dist/jquery.min.js',
    'script!node_modules/foundation-sites/dist/js/foundation.min.js',
    './js/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
      path: __dirname,
      filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [ path.resolve(__dirname , 'node_modules'),
                          path.resolve(__dirname , 'js'),
                          path.resolve(__dirname , 'img')],
    alias: {
      applicationStyles: 'css/app.scss'
    },
    extensions:['','.js','.jsx','.json', '.png']
  },
  /* To define in the entry property an jsx we have to specify a loader as babel.*/
  module:{
    loaders:[
      {
        loader: 'babel-loader',
        query:{
            presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        //Ignore these folders for packaging
        exclude: /(node_modules)/
      },
      {
          test: /\.json$/,
          loader: 'json'
      },
      {
          test: /\.png$/,
          exclude: /node_modules/,
          loader: 'file-loader?name=img/[name].[ext]'
      }
    ],
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
