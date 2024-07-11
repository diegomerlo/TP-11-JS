document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(p => {
        p.addEventListener('click', () => {
            p.classList.toggle('resaltado');
        });
    });
});
