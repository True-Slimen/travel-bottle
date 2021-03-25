const web3 = require('Web3');
const contract = require("@truffle/contract");
const provider = new web3.providers.HttpProvider('http://127.0.0.1:9545');

const contract_config = require("../build/contracts/BeerTraceability.json");

let BeerContract = contract(contract_config);
BeerContract.setProvider(provider);
BeerContract.defaults({
	from: "0xCa86cE47cdDb57e5DAf95017C1D630Eef564aC1D",
})

module.exports = {
	getBeer: async (req) => {
		try {
			const instance = await BeerContract.deployed();
			return await instance.getBeer(req.query.beer_id);
		}
		catch (err) {
			console.log("ERROR ", err);
		}
	},
	getBeers: async () => {
		try {
			const instance = await BeerContract.deployed();
			return await instance.getBeers();
		}
		catch (err) {
			console.log("ERROR ", err);
		}
	},
	addBeer: async (req) => {
		try {
			const instance = await BeerContract.deployed();
			return await instance.addBeer(
				req.body.productionyear,
				req.body.origin,
				req.body.name,
				req.body.brand,
			);
		}
		catch (err) {
			console.log("ERROR ", err);
		}
	},
	addStep: async (req) => {
		try {
			const instance = await BeerContract.deployed();
			return await instance.addStep(req.body.beer_id, req.body.storageType + ", " + req.body.city + ", " + req.body.country);
		}
		catch (err) {
			console.log("ERROR ", err);
		}
	},

}
