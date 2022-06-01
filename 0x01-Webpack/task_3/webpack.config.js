const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebPackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  pluggins: [new CleanWebPackPlugin(), new HtmlWebpackPlugin()],
  devServer: {
    static: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
  },
  OPtimizaction: {
    runtimeChuck: 'all'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(gif|png|svg|jpe?g)$/i,
        use: 'asset/resource',
      },
    ]
  }
};