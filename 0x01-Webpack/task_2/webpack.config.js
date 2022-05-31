const path = require("path");

module.exports = {
  mode: 'production',
  performance: {
    maxAssetSize: 1000000
  },
  entry: './js/dashboard_main.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: tru
            }
          }
        ]
      }
    ]
  }
};