document.addEventListener('DOMContentLoaded', () => {
    const magiaDiv = document.getElementById('magia');
    const image = document.querySelector('img');
    
    magiaDiv.addEventListener('mouseenter', () => {
        image.style.display = 'none';
    });

    magiaDiv.addEventListener('mouseleave', () => {
        image.style.display = 'block';
    });
});
