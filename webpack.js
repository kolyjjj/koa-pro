var webpack = require("webpack");
var path = require('path');

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
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }
  ]
}
}, function(err, stats) {
    // ...
    console.log('error', err);
    // console.log('status', stats);
});
