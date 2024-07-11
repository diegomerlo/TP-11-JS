document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('colorInput');
    const body = document.querySelector('body');

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            body.style.backgroundColor = input.value;
        }
    });

    input.addEventListener('keydown', (event) => {
        if (event.key === 'Backspace') {
            body.style.backgroundColor = 'white';
        }
    });
});
