"use strict";
var webpack = require('webpack');
var path = require('path');
// import HtmlWebpackPlugin = require('html-webpack-plugin')
exports.config = {
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(__dirname, '../client/index')
    ],
    output: {
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js',
        publicPath: "http://localhost:" + (process.env.PORT || 3000) + "/"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        loaders: [{
                test: /\.(ts|tsx)$/,
                loaders: ["react-hot-loader/webpack", "ts"]
            }],
        preLoaders: [{
                test: '/\.js$/',
                loaders: ["source-map"]
            }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'cheap-module-source-map'
};
//# sourceMappingURL=webpack.config.dev.js.map