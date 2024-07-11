document.addEventListener('DOMContentLoaded', () => {
    const moneyButton = document.getElementById('moneyButton');
    const miamiButton = document.getElementById('miamiButton');
    const maiameeeButton = document.getElementById('maiameeeButton');

    const moneyImage = document.getElementById('moneyImage');
    const miamiImage = document.getElementById('miamiImage');
    const maiameeeImage = document.getElementById('maiameeeImage');

    moneyButton.addEventListener('click', () => toggleImage(moneyImage));
    miamiButton.addEventListener('click', () => toggleImage(miamiImage));
    maiameeeButton.addEventListener('click', () => toggleImage(maiameeeImage));

    [moneyImage, miamiImage, maiameeeImage].forEach(img => {
        img.addEventListener('click', () => {
            img.classList.add('oculto');
        });
    });

    function toggleImage(image) {
        image.classList.toggle('oculto');
    }
});
