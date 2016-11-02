"use strict";
var http = require("http");
var path = require('path');
var express = require("express");
var webpack = require('webpack');
var server_1 = require('react-dom/server');
var React = require("react");
// import { Main } from './../common/index';
var MainProvider_1 = require('./../common/MainProvider');
var app = express();
if (process.env.NODE_ENV == "develop") {
    var config = require('./webpack.config.dev').config;
    var compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}
var server = http.createServer(app);
var port = process.env.PORT || 3000;
app.use('/', express.static(path.join(__dirname, '../..', "static/dist")));
//add developer middle 2016.11.01
app.get("*", function (req, res) {
    res.end(renderFullPage(server_1.renderToString(React.createElement(MainProvider_1.MainProvider, null))));
});
server.listen(port, function () {
    console.log('Server listening on: ', port);
});
function renderFullPage(html) {
    return "\n    <!doctype html>\n    <html lang=\"en\">\n      <head>\n        <link rel=\"icon\" href=\"./favicon.ico\" type=\"image/x-icon\" />\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\" />\n        <title>React Redux </title>\n      </head>\n      <body>\n        <container id=\"app\">" + html + "</container>\n        \n        <script src=\"/bundle.js\"></script>\n      </body>\n    </html>\n  ";
}
//# sourceMappingURL=index.js.map