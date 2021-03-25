function onFormSubmit() {
	toBase64(document.getElementById('text').files[0])
		.then((fileAsBase64) => {
			fetch('/findBottle', {
				method: 'GET',
				body: {
					document: fileAsBase64,
				},
			})
				.then(function (response) {
					return response.json();
				})
				.then(function (json) {
					console.log(json);
					// do whatever you fucking want with your json
				});
		})
		.catch((err) => console.error(err));
}

/**
 * Get base64 of the content of a document
 * @returns {Promise}
 **/
function toBase64(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
}