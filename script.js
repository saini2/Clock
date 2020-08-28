setInterval(setClock, 1000)
const hourhand = document.querySelector('#hour');
const minhand = document.querySelector('#min');
const sechand = document.querySelector('#sec');
function setClock() {
    var date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let hrPosition = hr * 360 / 12 + ((min * 360 / 60) / 12);
    let minPosition = (min * 360 / 60) + (sec * 360 / 60) / 60;
    let secPosition = sec * 360 / 60;
    hourhand.style.transform = 'rotate('+hrPosition+'deg)' ;
    minhand.style.transform = 'rotate('+minPosition+'deg)';
    sechand.style.transform = 'rotate('+secPosition+'deg)' ;
}

setClock();