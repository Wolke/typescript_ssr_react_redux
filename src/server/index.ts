import http = require( "http");
import path = require('path');
import express = require("express");

// import * as webpack from 'webpack';
import webpack = require('webpack');

import webpackDevMiddleware = require('webpack-dev-middleware');
import webpackHotMiddleware = require('webpack-hot-middleware');


let app = express();

if(process.env.NODE_ENV=="develop"){
    // var webpackConfig = require('./../../webpack.config.dev.js');
    // var compiler = webpack(webpackConfig);

    // app.use(require("webpack-dev-middleware")(compiler, {
    //     noInfo: true, publicPath: webpackConfig.output.publicPath
    // }));
    // app.use(require("webpack-hot-middleware")(compiler));
    let config = require('./../webpack.config.dev').config as webpack.Configuration;
    let compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }))

    app.use(webpackHotMiddleware(compiler));
}

const server = http.createServer(app);
let port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../..' , "static/dist")));

//add developer middle 2016.11.01

app.get("*",(req,res)=>{
    res.end(renderFullPage())
})

server.listen(port,()=>{
   console.log('Server listening on: ', port);
})


function renderFullPage() {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <title>React Redux </title>
      </head>
      <body>
        <container id="app"></container>
        
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}
