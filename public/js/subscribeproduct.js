var addStep = document.getElementById("btnAddStep");
var deleteStep = document.getElementById("btnDeleteStep");

// var arrayStep = document.getElementById("step-number-beer");

var inputProductStep = document.getElementById("step-number-beer");
var i = 1;

var div = document.createElement("div");
var localInput = document.createElement("input");
var cityInput = document.createElement("input");
var countryInput = document.createElement("input");

var numberProductStep = document.getElementById("step-number-beer").value;

var displayStepBox = document.getElementById("step-display-box");

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



inputProductStep.addEventListener('change', displayInputStep);

addStep.addEventListener('click', addStepFunc);

function addStepFunc() {
    
    displayStepBox.appendChild(div)
    div.appendChild(localInput)
    div.appendChild(cityInput)
    div.appendChild(countryInput)
}

function displayInputStep() {
    



    console.log('la val ' + numberProductStep);
    for(i=1; i < numberProductStep; i++){
        displayStepBox.appendChild(div)
        div.appendChild(localInput)
        div.appendChild(cityInput)
        div.appendChild(countryInput)
    }
    i=1;
}