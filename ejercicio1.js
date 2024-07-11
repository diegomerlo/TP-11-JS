document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('beepButton');
    button.addEventListener('click', seEjecutaEnEvento);
});

function seEjecutaEnEvento() {
    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
    body.classList.toggle('color');
}
