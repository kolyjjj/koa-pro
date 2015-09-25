var webpack = require("webpack");
// var path = require('path');

console.log('dir name', __dirname);
// returns a Compiler instance
webpack({
  context: __dirname + '/static/src',
  entry: "./app.jsx",
  output: {
      path: __dirname + "/static/build",
      filename: "bundle.js"
  },
  module: {
  loaders: [
    {
      test: /\.jsx?$/,
      // exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }
  ]
  },
  externals: {
    // Use external version of React (from CDN for client-side, or
    // bundled with ReactJS.NET for server-side)
    react: 'React'
  }
}, function(err, stats) {
    // ...
    console.log('error', err);
    // console.log('status', stats);
});
