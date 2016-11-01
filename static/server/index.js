"use strict";
var http = require("http");
var path = require('path');
var express = require("express");
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
app.use('/', express.static(path.join(__dirname, '../..', "static")));
//add developer middle 2016.11.01
app.get("*", function (req, res) {
    res.end(renderFullPage());
});
server.listen(port, function () {
    console.log('Server listening on: ', port);
});
function renderFullPage() {
    return "\n    <!doctype html>\n    <html lang=\"en\">\n      <head>\n        <link rel=\"icon\" href=\"./favicon.ico\" type=\"image/x-icon\" />\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\" />\n        <title>React Redux </title>\n      </head>\n      <body>\n        <container id=\"app\"></container>\n        \n        <script src=\"/dist/bundle.js\"></script>\n      </body>\n    </html>\n  ";
}
//# sourceMappingURL=index.js.map