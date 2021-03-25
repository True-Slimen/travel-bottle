function onSearchBeerSubmit() {
	fetch('/getBeer', {
		method: 'POST',
		body: {
			reference: document.getElementById('beerReference'),
		},
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			json = {
				productionyear: '1995',
				origin: 'Belgique',
				name: 'IPA Stout',
				brand: 'Zoobrew',
				steps: ['Sahara', 'grande bretagne', 'Amérique du Nord', 'France'],
			}
			console.log(json);
			fillbeerInfo(json);
		})
		.catch((err) => console.error(err));
}

function getlastBeer() {
	fetch('/getBeers', {
		method: 'POST',
		body: {
			reference: document.getElementById('beerReference'),
		},
	})
		.then(function (response) {
			return response.json();
		})
		.then(function (json) {
			json = [{
				productionyear: '2002',
				origin: 'France',
				name: 'Triple pression',
				brand: 'Kro',
				steps: ['Sahara', 'grande bretagne', 'Amérique du Nord', 'Belgique'],
			}]
			console.log(json);

			fillbeerInfo(json[json.length - 1]);
		})
		.catch((err) => console.error(err));
}

function fillbeerInfo(beer) {
	document.getElementById('infosList').innerHTML = '';

	document.getElementById('infosList').appendChild(createListElement('Année de production :&nbsp;', beer.productionyear));
	document.getElementById('infosList').appendChild(createListElement('Nom :&nbsp;', beer.name));
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