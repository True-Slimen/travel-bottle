/**
 * Module dependencies.
 */

const app = require('../app').app;
const server = require('../app').server;
const conf = require('./conf');

/**
 * Check if environment variables needed are set
 */

let exit = false;
for (const key in conf) {
	if (conf.hasOwnProperty(key) && key == key.toUpperCase() && !conf[key]) {
		console.error(`Environment variable ${key} not set`);
		exit = true;
	}
}

if (exit) {
	process.exit(1);
} else {
	delete exit;
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(conf.port, () =>
	console.log(
		`Express server listening on port ${conf.port}, in ${app.get(
			'env'
		)} mode`
	)
);

server.on('error', (error) => {
	if (error.syscall !== 'listen') {
		throw error;
	}

	// handle specific listen errors with friendly messages
	switch (error.code) {
		case 'EACCES':
			console.error(`Port ${conf.port} requires elevated privileges`);
			process.exit(1);
		case 'EADDRINUSE':
			console.error(`Port ${port} is already in use`);
			process.exit(1);
		default:
			throw error;
	}
});
