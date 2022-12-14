var express = require('express');
var serveStatic = require('serve-static');

var app = express();
app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 8082;
app.listen(port);
