const BeerTraceability = artifacts.require("BeerTraceability");

module.exports = function (deployer) {
	deployer.deploy(BeerTraceability);
};
