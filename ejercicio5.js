document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const img = document.querySelector('img');

    body.addEventListener('mousemove', (event) => {
        if (event.buttons === 1) { // Si el mouse está presionado
            img.style.top = `${event.clientY}px`;
            img.style.left = `${event.clientX}px`;
        }
    });
});
