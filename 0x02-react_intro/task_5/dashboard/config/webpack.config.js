const path = require("path");

module.exports = {
    mode: 'production',
    entry: './src/indexjs',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    }, devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 8564,
    }
};