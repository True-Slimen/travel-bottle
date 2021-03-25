    var btnPopupClose = document.getElementById('close-popup');
    var btnPopupAccept = document.getElementById('accept-popup');
    var btnPopupDecline = document.getElementById('decline-popup');

    var overlay = document.getElementById('overlay');
    
    btnPopupClose.addEventListener('click',openModal);
    btnPopupAccept.addEventListener('click',openModal);

    btnPopupDecline.addEventListener('click',RedirectionJavascript);
    
    
    function openModal() {
    overlay.style.display='none';
    }

    function RedirectionJavascript(){
        document.location.href="https://google.com";
      }