const pricingSwitcher = document.getElementById('pricingSwitcher');
const boxesContainer = document.querySelector('main');

pricingSwitcher.addEventListener('change', (e) => {
    boxesContainer.className = '';

    if(e.target.checked) {
        boxesContainer.classList.add('monthly');
    } else {
        boxesContainer.classList.add('annually');
    }
});