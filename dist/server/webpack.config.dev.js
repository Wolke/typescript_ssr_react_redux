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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VicGFjay5jb25maWcuZGV2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZlci93ZWJwYWNrLmNvbmZpZy5kZXYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBQzlCLDREQUE0RDtBQUUvQyxjQUFNLEdBQTBCO0lBQ3pDLEtBQUssRUFBRTtRQUNILHdCQUF3QjtRQUN4QiwrQkFBK0I7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUM7S0FDMUM7SUFFRCxNQUFNLEVBQUU7UUFDSixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDO1FBQ3JDLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFVBQVUsRUFBRSx1QkFBb0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFHO0tBQzlEO0lBRUQsT0FBTyxFQUFFO1FBQ0wsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQztLQUNqRDtJQUVELE1BQU0sRUFBRTtRQUNKLE9BQU8sRUFBRSxDQUFDO2dCQUNOLElBQUksRUFBRSxhQUFhO2dCQUNuQixPQUFPLEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUM7YUFDOUMsQ0FBQztRQUNGLFVBQVUsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUMxQixDQUFDO0tBQ0w7SUFFRCxPQUFPLEVBQUU7UUFDTCxJQUFJLE9BQU8sQ0FBQywwQkFBMEIsRUFBRTtLQUkzQztJQUVELE9BQU8sRUFBRSx5QkFBeUI7Q0FDckMsQ0FBQSJ9