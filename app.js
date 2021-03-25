/**
 * Module dependencies.
 */

const http = require('http');
const express = require('express');
const path = require('path');

const errorMiddleware = require('./routes/error');

const indexRouter = require('./routes/index');

/**
 * Create HTTP server.
 */

const app = express();
const server = http.createServer(app);

app.use(express.json()); // for parsing application/json

app.use('/', express.static('public'));
app.use('/', indexRouter);

app.use(errorMiddleware.notFound);
app.use(errorMiddleware.error);

module.exports = {
	server,
	app,
};
