"use strict";
var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);
var port = process.env.PORT || 3000;
app.get("*", function (req, res) {
    res.end("hello world!!!");
});
server.listen(port, function () {
    console.log('Server listening on: ', port);
});
//# sourceMappingURL=index.js.map