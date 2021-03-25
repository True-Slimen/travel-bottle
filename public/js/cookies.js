function setCookie(name, value, exdays) {
	const date = new Date();
	date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
	const expires = 'expires=' + date.toUTCString();
	document.cookie =
		name + '=' + value + ';' + expires + ';path=/;SameSite=Strict'; //;secure';
}

function getCookie(name) {
	name = name + '=';
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}

function deleteCookie(name) {
	document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}
