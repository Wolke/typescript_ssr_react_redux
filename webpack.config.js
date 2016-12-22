const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        'lodash',
        path.join(__dirname, 'src/client/index.tsx')
    ],
    module: {
        loaders: [{
            test: /\.(ts|tsx)$/,
            loaders: ['ts']
        }],
        preLoaders: [{
            test: /\.js$/,
            loaders: ['source-map']
        }]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        
    ],
    devtool: 'cheap-module-source-map'
}