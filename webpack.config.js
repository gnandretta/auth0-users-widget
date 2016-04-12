const path = require('path');

const PATHS = {
  app: path.join(__dirname, "."),
  build: path.join(__dirname, "build")
};

module.exports = {
  devServer: {
    contentBase: PATHS.build
  },
  devtool: 'eval-source-map',
  entry: {
    app: PATHS.app
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ["style", "css"],
        include: PATHS.app
      },
      {
        test: /\.jsx?$/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"]
        },
        include: PATHS.app
      }
    ]
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
