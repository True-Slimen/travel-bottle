function onSearchBeerSubmit() {
	fetch(`/getBeer/?beer_id=${document.getElementById('beer_id').value}`, {
		method: 'GET',
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			json = {
				productionyear: json[0],
				origin: json[1],
				name: json[2],
				brand: json[3],
				steps: json[4],
			}
			console.log(json);
			fillbeerInfo(json);
		})
		.catch((err) => console.error(err));
}

function getlastBeer() {
	fetch('/getBeers', {
		method: 'GET'
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			json = {
				productionyear: json[json.length - 1][0],
				origin: json[json.length - 1][1],
				name: json[json.length - 1][2],
				brand: json[json.length - 1][3],
				steps: json[json.length - 1][4],
			}
			console.log(json);
			fillbeerInfo(json);
		})
		.catch((err) => console.error(err));
}

function addBeer() {
	fetch('/addBeer', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: document.getElementById('brand-beer').value,
			brand: document.getElementById('name-beer').value,
			productionyear: document.getElementById('year-beer').value,
			origin: document.getElementById('start-step-beer').value,
		})
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			console.log(json);
			fillbeerInfo(json);
		})
		.catch((err) => console.error(err));
}

function getBeersForSelect() {
	fetch('/getBeers', {
		method: 'GET'
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			console.log(json);

			const beers = [];

			for (let i = 0; i < json.length; i++) {
				const beer = json[i];
				beers.push({
					id: i,
					productionyear: beer[0],
					origin: beer[1],
					name: beer[2],
					brand: beer[3],
					steps: beer[4],
				});
			}

			beers.forEach(beer => {
				const opt = document.createElement('option');
				opt.innerText = `${beer.brand} / ${beer.name} / ${beer.productionyear}`;
				opt.value = beer.id;
				document.getElementById('beer_id').append(opt);
			});
		})
		.catch((err) => console.error(err));
}

function addBeerStep() {
	fetch('/addStep', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			beer_id: document.getElementById('beer_id').value,
			storageType: document.getElementById('storageType').value,
			city: document.getElementById('city').value,
			country: document.getElementById('country').value,
		})
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			alert("C'est enregistré !");
		})
		.catch((err) => console.error(err));
}

function fillbeerInfo(beer) {
	document.getElementById('infosList').innerHTML = '';

	document.getElementById('infosList').appendChild(createListElement('Année de production :&nbsp;', beer.productionyear));
	document.getElementById('infosList').appendChild(createListElement('Nom :&nbsp;', beer.name));
	document.getElementById('infosList').appendChild(createListElement("Marque :&nbsp;", beer.brand));
	document.getElementById('infosList').appendChild(createListElement("Pays d'origine :&nbsp;", beer.origin));

	for (let i = 0; i < beer.steps.length; i++) {
		const step = beer.steps[i];
		document.getElementById('infosList').appendChild(createListElement(`Étape ${i + 1} :&nbsp;`, step));
	}
}

function createListElement(title, text) {
	const htmlElement = document.createElement('li');
	htmlElement.classList.add('row');
	htmlElement.classList.add('mt-3');
	htmlElement.classList.add('data-display-row');

	const strong = document.createElement('strong');
	strong.innerHTML = title;

	const p = document.createElement('p');
	p.innerText = text;

	htmlElement.appendChild(strong);
	htmlElement.appendChild(p);

	return htmlElement;
}

function checkRgpdCookie() {
	if (getCookie('rgpd') == 'accepted=1') {
		document.getElementById('overlay').style.display = 'none';
	}
}
