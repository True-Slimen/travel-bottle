pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract BeerTraceability{
    struct Beer{
        uint productionyear;
        string origin;
        string name;
        string brand;
        string[] steps;
    }
    Beer[] beers;
    
    uint public beerCount;

    constructor() public {
        beerCount = 0;
    }

    event AddBeer(uint _id);
    function addBeer(uint _productionyear, string memory _origin, string memory _name, string memory _brand) public returns(uint){
        Beer memory beer;
        beer.productionyear = _productionyear;
        beer.origin = _origin;
        beer.name = _name;
        beer.brand = _brand;
        
        beers.push(beer);

        beerCount++;        
        emit AddBeer(beers.length - 1);
        return (beers.length - 1);
    }
    
    event AddStep(uint beer_id, uint step_id);
    function addStep(uint _id, string memory _step) public{
        string memory step = _step;
        emit AddStep(_id, beers[_id].steps.length - 1);
        beers[_id].steps.push(step);
    }
    
    function getBeer(uint _id) public view returns(Beer memory){
        return (beers[_id]);
    }

    function getBeers() public view returns(Beer[] memory){
        return beers;
    }
}