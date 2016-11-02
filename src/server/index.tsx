import http = require( "http");
import path = require('path');
import express = require("express");

import webpack = require('webpack');
import { renderToString } from 'react-dom/server'


import * as React from "react";
// import { Main } from './../common/index';
import { MainProvider } from './../common/MainProvider'

let app = express();

if(process.env.NODE_ENV=="develop"){
  
    let config = require('./webpack.config.dev').config as webpack.Configuration;
    let compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }))

    app.use(require('webpack-hot-middleware')(compiler));
}

const server = http.createServer(app);
let port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../..' , "static/dist")));

//add developer middle 2016.11.01

app.get("*",(req,res)=>{
  res.end(renderFullPage(renderToString(<MainProvider />)))
})

server.listen(port,()=>{
   console.log('Server listening on: ', port);
})


function renderFullPage(html) {
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
        <container id="app">${html}</container>
        
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}
