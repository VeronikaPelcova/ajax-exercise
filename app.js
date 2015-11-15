var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var debug = require('debug')('AjaxServer:server');
var http = require('http');

var routes = require('./routes/index');
var api = require('./routes/api');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);
app.use('/', api);

var port = process.env.PORT || 3000;
app.set('port', port);
http.createServer(app).listen(port);

module.exports = app;
