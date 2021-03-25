/**
 * Module dependencies.
 */

const http = require('http');
const conf = require('./conf');

const request = http.request(
	`http://localhost:${conf.port}/healthcheck`,
	(res) => {
		if (res.statusCode == 200) {
			process.exit(0);
		} else {
			process.exit(1);
		}
	}
);

request.on('error', (err) => {
	console.error('Health check error', err);
	process.exit(1);
});

request.end();
