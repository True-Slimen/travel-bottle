var addStep = document.getElementById("btnAddStep");
var deleteStep = document.getElementById("btnDeleteStep");

// var arrayStep = document.getElementById("step-number-beer");

var inputProductStep = document.getElementById("step-number-beer");
var i = 1;

var localInput = document.createElement("input");
var cityInput = document.createElement("input");
var countryInput = document.createElement("input");

var numberProductStep = document.getElementById("step-number-beer").value;

var displayStepBox = document.getElementById("step-display-box");

var div = document.createElement("div");
div.classList.add("row");
div.classList.add("justify-content-between");
div.classList.add("step-local-display-box");

localInput.classList.add("form-control");
localInput.classList.add("text-input");
localInput.classList.add("col-3");
localInput.setAttribute("id","step-local-beer-2")

cityInput.classList.add("form-control");
cityInput.classList.add("text-input");
cityInput.classList.add("col-3");
cityInput.setAttribute("id","step-city-beer-2");



countryInput.classList.add("form-control");
countryInput.classList.add("text-input");
countryInput.classList.add("col-3");
countryInput.setAttribute("id","step-country-beer-2");

localInput.type = "text";
cityInput.type = "text";
countryInput.type = "text";

localInput.setAttribute('placeholder', 'Lieu');
cityInput.setAttribute('placeholder', 'Ville');
countryInput.setAttribute('placeholder', 'Pays');

addStep.addEventListener('click', addStepFunc);

var test = false;
function addStepFunc() {
    console.log('func run !');

    
    if(test == false){
        displayStepBox.appendChild(div)
    }
    test = true;

    div.appendChild(localInput);
    div.appendChild(cityInput);
    div.appendChild(countryInput);
}