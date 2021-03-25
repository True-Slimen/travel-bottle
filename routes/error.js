module.exports = {
	error: (err, req, res, next) => {
		console.error('Internal server error', err.stack);

		if (res.headersSent) return next(err);

		res.status(500).json({
			status: 500,
			msg: 'Internal server error',
		});
	},

	notFound: (req, res, next) => {
		if (res.headersSent) return next();

		res.status(404).json({
			status: 404,
			msg: 'Route not found, check method and url please',
		});
	},
};
