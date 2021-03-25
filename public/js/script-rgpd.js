let btnPopupClose = document.getElementById('close-popup');
let btnPopupAccept = document.getElementById('accept-popup');
let btnPopupDecline = document.getElementById('decline-popup');

let overlay = document.getElementById('overlay');

btnPopupClose.addEventListener('click', openModal);
btnPopupAccept.addEventListener('click', openModal);

btnPopupDecline.addEventListener('click', RedirectionJavascript);

function openModal() {
	overlay.style.display = 'none';
	setCookie('rgpd', 'accepted=1', 1000000);
}

function RedirectionJavascript() {
	document.location.href = "https://google.com";
}
