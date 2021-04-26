
document.querySelectorAll('.accordion__question').forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log('clock!');
        item.classList.toggle('open');
        item.nextElementSibling.classList.toggle('open');
    });
});