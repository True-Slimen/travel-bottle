const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/healthcheck', (req, res) => {
	res.send({ status: 200 });
});

router.get('/hostname', (req, res) => {
	res.send({ hostname: os.hostname() });
});

module.exports = router;
