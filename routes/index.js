const express = require('express');
const router = express.Router();
const callContract = require('./callContract');

router.get('/getBeer', async (req, res) => {
	res.json(await callContract.getBeer(req));
});

router.get('/getBeers', async (req, res) => {
	res.json(await callContract.getBeers());
});

router.post('/addBeer', async (req, res) => {
	res.json(await callContract.addBeer(req));
});

router.post('/addStep', async (req, res) => {
	res.json(await callContract.addStep(req));
});

module.exports = router;
