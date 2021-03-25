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
			document.getElementById('productionYear').innerText = json.productionyear;
			document.getElementById('origin').innerText = json.origin;
			document.getElementById('name').innerText = json.name;

			for (let i = 0; i < json.steps.length; i++) {
				const step = json.steps[i];

				const htmlStep = document.createElement('li');
				htmlStep.classList.add('row');
				htmlStep.classList.add('mt-3');
				htmlStep.classList.add('data-display-row');

				const strong = document.createElement('strong');
				strong.innerText = `Étape ${i} : `;

				const text = document.createElement('p');
				text.innerText = step;

				htmlStep.appendChild(strong);
				htmlStep.appendChild(text);
				document.getElementById('infosList').appendChild(htmlStep);
			}
		})
		.catch((err) => console.error(err));
}
