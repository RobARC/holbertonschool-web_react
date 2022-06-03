const path = require("path");

module.exports = {
    mode: 'production',
    entry: './src/indexjs',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    performance: {
        maxAssetSize: 1000000,
        maxEntrypointSize: 1000000,
    },
    devServer: {
        hot: true,
        contentBase: path.resolve(__dirname, "./dist"),
        compress: true,
        port: 8564,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(gif|png|jpe?g|svg|ico)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
        ],
    },
};